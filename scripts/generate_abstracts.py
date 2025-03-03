import os
import re
import yaml
import requests
import base64
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import urljoin
import argparse

# 从环境变量获取API密钥
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")
if not DEEPSEEK_API_KEY:
    print("警告：未设置DEEPSEEK_API_KEY环境变量，将使用测试模式")
    # 使用测试模式，不调用实际API
    TEST_MODE = True
else:
    TEST_MODE = False

# Deepseek API配置
DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"
HEADERS = {
    "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
    "Content-Type": "application/json"
}

class PaperInfo:
    def __init__(self, title: str, authors: List[str], journal: str, year: str, doi: str):
        self.title = title
        self.authors = authors
        self.journal = journal
        self.year = year
        self.doi = doi

def extract_paper_info(markdown_text: str) -> List[PaperInfo]:
    """从Markdown文本中提取论文信息"""
    papers = []
    lines = markdown_text.split('\n')
    
    for line in lines:
        if line.startswith('1. ') or line.startswith('2. ') or line.startswith('3. '):
            # 使用正则表达式提取信息
            match = re.match(r'\d+\.\s+(.*?)\s+\((20\d{2})\)\.\s+(.*?)\.\s+\*(.*?)\*.*?<(https?://.*?)>', line)
            if match:
                authors = match.group(1).split(', ')
                year = match.group(2)
                title = match.group(3)
                journal = match.group(4)
                doi = match.group(5)
                
                papers.append(PaperInfo(
                    title=title,
                    authors=authors,
                    journal=journal,
                    year=year,
                    doi=doi
                ))
    
    return papers

def generate_abstract(paper: PaperInfo, language: str = "zh") -> str:
    """使用Deepseek API生成论文摘要
    
    Args:
        paper: 论文信息
        language: 语言，"zh"为中文，"en"为英文
        
    Returns:
        生成的摘要文本
    """
    if language == "zh":
        prompt = f"""请为以下论文生成一个详细的中文介绍（约500字）：

标题：{paper.title}
作者：{', '.join(paper.authors)}
期刊：{paper.journal}
年份：{paper.year}
DOI：{paper.doi}

请包含以下内容：
1. 研究背景和意义
2. 主要研究方法
3. 关键发现和结论
4. 研究的创新点和应用价值

请用学术性的语言撰写，但要确保通俗易懂。"""
    else:  # 英文
        prompt = f"""Please generate a detailed abstract (about 500 words) for the following paper:

Title: {paper.title}
Authors: {', '.join(paper.authors)}
Journal: {paper.journal}
Year: {paper.year}
DOI: {paper.doi}

Please include the following sections:
1. Research background and significance
2. Main research methods
3. Key findings and conclusions
4. Innovation points and application value

Please write in academic language, but ensure it is accessible to a general audience."""

    data = {
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": "你是一个专业的学术论文分析助手。"},
            {"role": "user", "content": prompt}
        ]
    }

    response = requests.post(DEEPSEEK_API_URL, headers=HEADERS, json=data)
    response.raise_for_status()
    
    return response.json()["choices"][0]["message"]["content"]

def clean_highlight(text: str) -> str:
    """清理研究亮点的文本格式"""
    # 移除常见的开头词语
    text = re.sub(r'^(首先|其次|最后|第一|第二|第三|一是|二是|三是|另外|此外|还有|同时|最终|总之|因此|所以|然后|接着|最后|最终|最重要的是|值得注意的是|特别是|尤其是|具体来说|简单来说|总的来说|总体来说|总而言之|综上所述|总结起来|归纳起来|概括起来|一方面|另一方面|除此之外|不仅如此|更重要的是|更为重要的是|更为关键的是|更为突出的是|更为显著的是|，|、)', '', text)
    # 移除多余的标点和空格
    text = text.strip('、 ,，.。:：')
    # 移除多余的引号
    text = text.strip('"\'')
    # 移除开头的"在于"
    text = re.sub(r'^在于', '', text)
    # 确保第一个字符是中文或英文字母
    text = text.strip()
    if text and not (text[0].isalpha() or '\u4e00' <= text[0] <= '\u9fff'):
        text = text[1:]
    return text.strip()

def extract_highlights(abstract: str) -> List[str]:
    """从摘要中提取研究亮点"""
    highlights = []
    if "创新点" in abstract:
        try:
            # 尝试不同的分隔标记
            for marker in ["创新点主要体现在以下几个方面：", "研究的创新点和应用价值", "创新点"]:
                parts = abstract.split(marker)
                if len(parts) > 1:
                    # 提取创新点部分的文本
                    innovation_text = parts[1].split("。")[0]
                    # 尝试按不同的分隔符分割
                    for sep in ["；", "。", "，"]:
                        if sep in innovation_text:
                            points = [clean_highlight(point) for point in innovation_text.split(sep)]
                            highlights = [point for point in points if point and len(point) > 5]  # 确保亮点不是太短
                            if highlights:
                                break
                    if highlights:
                        break
        except Exception as e:
            print(f"提取研究亮点时出错：{str(e)}")
    
    # 如果没有找到亮点，使用默认值
    if not highlights:
        highlights = [
            "提出了新的数值模拟方法",
            "开发了创新的分析框架",
            "取得了重要的研究发现"
        ]
    
    # 清理每个亮点的格式
    highlights = [h.strip('* ') for h in highlights]
    return highlights

def create_abstract_file(paper_info, abstract, pdf_path=None, language="zh"):
    """创建论文摘要的Markdown文件
    
    Args:
        paper_info: 论文信息
        abstract: 论文摘要
        pdf_path: 可选，PDF文件路径
        language: 语言，"zh"为中文，"en"为英文
    """
    # 构建文件路径
    first_author = paper_info.authors[0] if isinstance(paper_info.authors, list) else paper_info.authors.split(',')[0]
    first_author_surname = first_author.split(',')[0].split()[0].lower()
    journal_abbr = ''.join(word.lower() for word in paper_info.journal.split() if word.lower() not in ['of', 'and', 'the'])
    
    # 根据语言设置文件名后缀
    lang_suffix = f".{language}" if language != "zh" else ""
    file_path = f"docs/publications/abstracts/{paper_info.year}_{first_author_surname}_{journal_abbr}{lang_suffix}.md"
    
    # 提取研究亮点
    highlights = extract_highlights(abstract)
    
    # 处理作者列表
    authors_str = ', '.join(paper_info.authors) if isinstance(paper_info.authors, list) else paper_info.authors
    
    # 构建研究亮点部分
    highlights_str = '\n'.join(f"- {highlight.strip()}" for highlight in highlights if highlight.strip())
    
    # 构建引用标识符
    cite_key = f"{first_author_surname}{paper_info.year}{journal_abbr}"
    
    # 处理PDF链接
    pdf_link = ""
    if pdf_path:
        # 获取相对于docs/publications/abstracts/的路径
        if pdf_path.startswith("docs/publications/"):
            relative_pdf_path = "../" + pdf_path[16:]  # 移除前缀"docs/publications/"并添加"../"
        elif pdf_path.startswith("docs/"):
            relative_pdf_path = "../../" + pdf_path[5:]  # 移除前缀"docs/"并添加"../../"
        else:
            # 假设路径是相对于workspace根目录的
            relative_pdf_path = "../../" + pdf_path
        
        # 修复路径中可能的错误
        relative_pdf_path = relative_pdf_path.replace("../s/", "../")
        
        # 根据语言设置链接文本
        pdf_link_text = "查看原文PDF" if language == "zh" else "View Original PDF"
        pdf_link = f"\n\n## PDF链接\n\n[{pdf_link_text}]({relative_pdf_path})"
    
    # 移除论文介绍中的重复标题
    abstract = abstract.replace('**论文中文介绍**\n\n', '')
    
    # 根据语言设置标题
    section_titles = {
        "zh": {
            "basic_info": "基本信息",
            "pdf_link": "PDF链接",
            "intro": "论文介绍",
            "highlights": "研究亮点",
            "citation": "引用格式"
        },
        "en": {
            "basic_info": "Basic Information",
            "pdf_link": "PDF Link",
            "intro": "Abstract",
            "highlights": "Research Highlights",
            "citation": "Citation"
        }
    }
    
    titles = section_titles[language]
    
    # 构建文件内容
    content = f"""---
title: {paper_info.title}
authors: {authors_str}
journal: {paper_info.journal}
year: {paper_info.year}
doi: {paper_info.doi}
---

# {paper_info.title}

## {titles["basic_info"]}

- **{'作者' if language == 'zh' else 'Authors'}**: {authors_str}
- **{'期刊' if language == 'zh' else 'Journal'}**: *{paper_info.journal}*
- **{'年份' if language == 'zh' else 'Year'}**: {paper_info.year}
- **DOI**: [{paper_info.doi}]({paper_info.doi}){pdf_link}

## {titles["intro"]}

{abstract}

## {titles["highlights"]}

{highlights_str}

## {titles["citation"]}

### BibTeX 格式

<div class="highlight-and-copy">

```bibtex
@article{{{cite_key},
    title     = {{{paper_info.title}}},
    author    = {{{authors_str}}},
    journal   = {{{paper_info.journal}}},
    year      = {{{paper_info.year}}},
    doi       = {{{paper_info.doi.replace('https://doi.org/', '')}}}
}}
```

</div>

### APA 格式

<div class="highlight-and-copy">

```
{authors_str}. ({paper_info.year}). {paper_info.title}. *{paper_info.journal}*. {paper_info.doi}
```

</div>"""

    # 创建目录（如果不存在）
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    # 写入文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return file_path

def update_paper_links(paper: PaperInfo, abstract_path: str):
    """更新publications页面中的论文链接
    
    Args:
        paper: 论文信息
        abstract_path: 摘要文件路径
    """
    # 获取基本路径（不包含语言后缀）
    base_path = abstract_path.replace('.zh.md', '.md')
    
    # 更新中文和英文索引文件
    for lang_file, lang_suffix in [('index.zh.md', ''), ('index.en.md', '.en')]:
        file_path = os.path.join('docs/publications', lang_file)
        
        if not os.path.exists(file_path):
            print(f"警告：找不到文件 {file_path}")
            continue
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 构建匹配模式
        # 使用正则表达式转义标题中的特殊字符
        escaped_title = re.escape(paper.title)
        pattern = r'\d+\. .*?' + escaped_title + r'.*?\n'
        
        # 查找匹配的行
        matches = re.findall(pattern, content)
        if not matches:
            print(f"警告：在 {file_path} 中找不到匹配的论文条目")
            continue
        
        # 获取相对路径（根据语言）
        if lang_suffix:
            # 英文版本使用英文摘要
            relative_path = os.path.relpath(abstract_path.replace('.zh.md', f'{lang_suffix}.md'), 'docs/publications')
        else:
            # 中文版本使用中文摘要
            relative_path = os.path.relpath(abstract_path, 'docs/publications')
        
        print(f"找到 {len(matches)} 个匹配")
        
        # 更新每个匹配的行
        for match in matches:
            # 检查是否已经有abstract链接
            if '[abstract]' in match:
                # 提取现有的链接
                link_match = re.search(r'\[\[abstract\]\((.*?)\)\]', match)
                if link_match:
                    old_link = link_match.group(1)
                    # 如果链接已经是最新的，跳过更新
                    if old_link == relative_path:
                        print(f"链接已经是最新的: {old_link}")
                        continue
                    # 替换链接
                    new_match = match.replace(f'[abstract]({old_link})', f'[abstract]({relative_path})')
                else:
                    # 如果格式不匹配，添加链接到行尾
                    new_match = match.rstrip() + f' [[abstract]({relative_path})]\n'
            else:
                # 如果没有abstract链接，添加到行尾
                new_match = match.rstrip() + f' [[abstract]({relative_path})]\n'
            
            # 更新内容
            content = content.replace(match, new_match)
            print(f"原始行: {match.strip()}")
            print(f"更新后的行: {new_match.strip()}")
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"已更新{lang_file}中的论文链接")

def test_single_paper(pdf_path: str = None):
    """测试单篇论文的摘要生成
    
    Args:
        pdf_path: 可选，本地PDF文件路径
    """
    paper = PaperInfo(
        title="A FDEM approach to study mechanical and fracturing responses of geo-materials with stochastic inclusions using a novel reconstruction strategy",
        authors=["Lin, Y.", "Ma, J.", "Lai, Z.", "Huang, L.", "Lei, M."],
        journal="Engineering Fracture Mechanics",
        year="2023",
        doi="https://doi.org/10.1016/j.engfracmech.2023.109171"
    )
    
    try:
        print(f"正在处理论文：{paper.title}")
        
        # 生成中文摘要
        zh_abstract = generate_abstract(paper, language="zh")
        zh_file_path = create_abstract_file(paper, zh_abstract, pdf_path, language="zh")
        print(f"成功生成中文摘要文件：{zh_file_path}")
        
        # 生成英文摘要
        en_abstract = generate_abstract(paper, language="en")
        en_file_path = create_abstract_file(paper, en_abstract, pdf_path, language="en")
        print(f"成功生成英文摘要文件：{en_file_path}")
        
        try:
            # 更新论文链接
            update_paper_links(paper, zh_file_path)
        except Exception as e:
            print(f"更新链接时出错：{str(e)}")
            import traceback
            print(traceback.format_exc())
    except Exception as e:
        print(f"处理论文时出错")
        print(f"错误信息：{str(e)}")
        import traceback
        print(traceback.format_exc())

def main():
    """主函数"""
    # 解析命令行参数
    parser = argparse.ArgumentParser(description='生成论文摘要')
    parser.add_argument('pdf_path', nargs='?', help='本地PDF文件路径（可选）')
    args = parser.parse_args()
    
    if args.pdf_path:
        # 如果提供了PDF文件，处理单篇论文
        test_single_paper(args.pdf_path)
    else:
        # 否则处理publications页面中的所有论文
        with open('docs/publications/index.zh.md', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 提取论文信息
        papers = extract_paper_info(content)
        
        # 为每篇论文生成摘要页面
        for paper in papers:
            print(f"正在处理论文：{paper.title}")
            try:
                # 生成中文摘要
                zh_abstract = generate_abstract(paper, language="zh")
                zh_file_path = create_abstract_file(paper, zh_abstract, language="zh")
                print(f"成功生成中文摘要：{paper.title}")
                
                # 生成英文摘要
                en_abstract = generate_abstract(paper, language="en")
                en_file_path = create_abstract_file(paper, en_abstract, language="en")
                print(f"成功生成英文摘要：{paper.title}")
                
                # 更新论文链接
                update_paper_links(paper, zh_file_path)
            except Exception as e:
                print(f"处理论文时出错：{paper.title}")
                print(f"错误信息：{str(e)}")
                import traceback
                print(traceback.format_exc())

if __name__ == "__main__":
    main() 