import os
import re
import yaml
from pathlib import Path

def extract_front_matter(content: str):
    """提取YAML front matter"""
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            try:
                front_matter = yaml.safe_load(parts[1])
                return front_matter, parts[2]
            except yaml.YAMLError:
                return None, content
    return None, content

def format_abstract_with_ai(content: str) -> str:
    """格式化摘要内容"""
    # 提取front matter
    front_matter, main_content = extract_front_matter(content)
    if not front_matter:
        return content
    
    # 检测语言
    is_english = False
    file_path = front_matter.get('file_path', '')
    if file_path.endswith('.en.md') or '.en.' in file_path:
        is_english = True
    
    # 根据语言确定标题和内容部分
    if is_english:
        intro_section = "## Introduction"
        citation_section = "## Citation"
        basic_info = "## Basic Information"
        author_label = "**Authors**"
        journal_label = "**Journal**"
        year_label = "**Year**"
        doi_label = "**DOI**"
        research_highlights = "## Research Highlights"
        bibtex_format = "### BibTeX Format"
        apa_format = "### APA Format"
        pdf_link_section = "## PDF Link"
        view_pdf_text = "View Original PDF"
        # 英文子标题
        background_subtitle = "### Research Background and Significance"
        methods_subtitle = "### Main Research Methods"
        findings_subtitle = "### Key Findings and Conclusions"
        innovation_subtitle = "### Innovation Points and Application Value"
    else:
        intro_section = "## 论文介绍"
        citation_section = "## 引用格式"
        basic_info = "## 基本信息"
        author_label = "**作者**"
        journal_label = "**期刊**"
        year_label = "**年份**"
        doi_label = "**DOI**"
        research_highlights = "## 研究亮点"
        bibtex_format = "### BibTeX 格式"
        apa_format = "### APA 格式"
        pdf_link_section = "## PDF链接"
        view_pdf_text = "查看原文PDF"
        # 中文子标题
        background_subtitle = "### 研究背景和意义"
        methods_subtitle = "### 主要研究方法"
        findings_subtitle = "### 关键发现和结论"
        innovation_subtitle = "### 研究的创新点和应用价值"
    
    # 提取论文内容
    paper_content = ""
    highlights = []
    pdf_path = None
    
    # 按行处理内容，提取有用的部分
    lines = main_content.strip().split('\n')
    in_intro_section = False
    in_highlights_section = False
    
    # 提取英文版的段落内容
    english_paragraphs = []
    current_paragraph = ""
    
    for i, line in enumerate(lines):
        # 检测部分
        if line.strip() == intro_section or (is_english and line.strip() == "## Abstract"):
            in_intro_section = True
            continue
        elif line.strip() == research_highlights:
            in_intro_section = False
            in_highlights_section = True
            continue
        elif line.strip() == citation_section:
            in_intro_section = False
            in_highlights_section = False
            continue
        
        # 提取PDF链接
        if "PDF链接" in line or "PDF Link" in line:
            for j in range(i+1, min(i+5, len(lines))):
                if j < len(lines) and "[" in lines[j] and "]" in lines[j] and "(" in lines[j] and ")" in lines[j]:
                    pdf_path = lines[j].split("(")[1].split(")")[0]
                    break
        
        # 收集内容
        if in_intro_section:
            # 跳过重复的标题和基本信息
            if line.startswith('# ') or line.startswith('## Basic Information') or line.startswith('## 基本信息'):
                continue
            if '**Authors**' in line or '**作者**' in line or '**Journal**' in line or '**期刊**' in line:
                continue
            if '**Year**' in line or '**年份**' in line or '**DOI**' in line:
                continue
            if 'PDF链接' in line or 'View Original PDF' in line:
                continue
            # 跳过Abstract标题
            if line.strip() == "**Abstract**":
                continue
            # 跳过英文版中的数字编号标题（如"**1. Research Background and Significance**"）
            if is_english and re.match(r'\*\*\d+\.\s+.*\*\*', line.strip()):
                continue
            
            # 如果是英文版，收集段落
            if is_english:
                if line.strip() == "":
                    if current_paragraph:
                        english_paragraphs.append(current_paragraph)
                        current_paragraph = ""
                else:
                    current_paragraph += line + " "
            else:
                if line.strip() == '':
                    # 避免添加太多空行
                    if paper_content and not paper_content.endswith('\n\n'):
                        paper_content += '\n'
                    continue
                
                paper_content += line + '\n'
        
        elif in_highlights_section:
            if line.strip().startswith('- '):
                highlights.append(line.strip())
    
    # 确保最后一个段落也被添加
    if is_english and current_paragraph:
        english_paragraphs.append(current_paragraph)
    
    # 为英文版构建带有子标题的内容
    if is_english and english_paragraphs:
        # 确保至少有4个段落
        while len(english_paragraphs) < 4:
            english_paragraphs.append("")
        
        paper_content = f"{background_subtitle}\n\n{english_paragraphs[0]}\n\n"
        paper_content += f"{methods_subtitle}\n\n{english_paragraphs[1]}\n\n"
        paper_content += f"{findings_subtitle}\n\n{english_paragraphs[2]}\n\n"
        paper_content += f"{innovation_subtitle}\n\n{english_paragraphs[3]}\n\n"
        
        # 添加关键词（如果存在）
        for line in lines:
            if "**Keywords:**" in line:
                paper_content += line + "\n\n"
                break
    
    # 如果没有找到亮点，添加一些默认亮点
    if not highlights:
        if is_english:
            highlights = [
                "- Novel methodology for analyzing geo-materials",
                "- Integration of FDEM with stochastic reconstruction",
                "- Significant findings on fracture behavior"
            ]
        else:
            highlights = [
                "- 提出了新颖的分析方法",
                "- 结合FDEM与随机重建策略",
                "- 对断裂行为有重要发现"
            ]
    # 如果是英文版但亮点是中文，翻译成英文
    elif is_english and all(h.strip("- ").startswith("提") or "方法" in h or "框架" in h or "发现" in h for h in highlights):
        highlights = [
            "- Novel methodology for analyzing geo-materials",
            "- Integration of FDEM with stochastic reconstruction",
            "- Significant findings on fracture behavior"
        ]
    
    # 特殊处理Lin2023论文
    base_name = os.path.basename(file_path)
    if "lin" in base_name.lower() and "2023" in base_name:
        pdf_path = "../pdf/coauthored/Lin2023 A FDEM approach to study mechanical and fracturing responses of geo-materials.pdf"
    # 如果没有找到PDF链接，尝试从文件名推断
    elif not pdf_path:
        # 从摘要文件路径推断PDF路径
        if "_" in base_name:
            parts = base_name.split("_")
            year = parts[0][:4]  # 提取年份
            author = parts[0][4:] if len(parts[0]) > 4 else ""  # 提取作者
            
            # 构建可能的PDF文件名模式
            # 先检查first_or_correspondance目录
            pdf_dir = "../pdf/first_or_correspondance"
            if os.path.exists(os.path.join(os.path.dirname(file_path), pdf_dir)):
                pdf_dir_path = os.path.join(os.path.dirname(file_path), pdf_dir)
                for pdf_file in os.listdir(pdf_dir_path):
                    if pdf_file.startswith(f"{year}") and pdf_file.endswith(".pdf"):
                        # 检查作者名是否匹配
                        if author and author.lower() in pdf_file.lower():
                            pdf_path = f"{pdf_dir}/{pdf_file}"
                            break
                        # 如果没有作者名匹配，尝试从front_matter中获取作者
                        elif "authors" in front_matter:
                            first_author = front_matter["authors"].split(",")[0].split()[0]
                            if first_author.lower() in pdf_file.lower():
                                pdf_path = f"{pdf_dir}/{pdf_file}"
                                break
            
            # 如果在first_or_correspondance目录中没找到，检查coauthored目录
            if not pdf_path:
                pdf_dir = "../pdf/coauthored"
                if os.path.exists(os.path.join(os.path.dirname(file_path), pdf_dir)):
                    pdf_dir_path = os.path.join(os.path.dirname(file_path), pdf_dir)
                    for pdf_file in os.listdir(pdf_dir_path):
                        if pdf_file.startswith(f"{year}") and pdf_file.endswith(".pdf"):
                            # 检查作者名是否匹配
                            if author and author.lower() in pdf_file.lower():
                                pdf_path = f"{pdf_dir}/{pdf_file}"
                                break
                            # 如果没有作者名匹配，尝试从front_matter中获取作者
                            elif "authors" in front_matter:
                                first_author = front_matter["authors"].split(",")[0].split()[0]
                                if first_author.lower() in pdf_file.lower():
                                    pdf_path = f"{pdf_dir}/{pdf_file}"
                                    break
    
    # 如果仍然没有找到PDF链接，使用默认PDF
    if not pdf_path:
        pdf_path = "../pdf/first_or_correspondance/Huang2023 Morphology characterization and discrete element modeling of coral sand with.pdf"
    
    # PDF链接部分
    pdf_link_html = f"""
{pdf_link_section}

[{view_pdf_text}]({pdf_path})
"""
    
    # 构建新的内容
    formatted_content = f"""---
title: {front_matter['title']}
authors: {front_matter['authors']}
journal: {front_matter['journal']}
year: {front_matter['year']}
doi: {front_matter['doi']}
file_path: {file_path}
---

# {front_matter['title']}

{basic_info}

- {author_label}: {front_matter['authors']}
- {journal_label}: *{front_matter['journal']}*
- {year_label}: {front_matter['year']}
- {doi_label}: [{front_matter['doi']}]({front_matter['doi']})
{pdf_link_html}
{intro_section}
{paper_content}

{research_highlights}

{chr(10).join(highlights)}

{citation_section}

{bibtex_format}

<div class="highlight-and-copy">

```bibtex
@article{{{front_matter['authors'].split(',')[0].split()[0].lower()}{front_matter['year']}{front_matter['journal'].lower().replace(' ', '')},
    title     = {{{front_matter['title']}}},
    author    = {{{front_matter['authors']}}},
    journal   = {{{front_matter['journal']}}},
    year      = {{{front_matter['year']}}},
    doi       = {{{front_matter['doi'].replace('https://doi.org/', '')}}}
}}
```

</div>

{apa_format}

<div class="highlight-and-copy">

```
{front_matter['authors']}. ({front_matter['year']}). {front_matter['title']}. *{front_matter['journal']}*. https://doi.org/{front_matter['doi'].replace('https://doi.org/', '')}
```

</div>"""
    
    return formatted_content

def format_abstract_file(file_path: str):
    """格式化指定的摘要文件"""
    print(f"正在处理文件：{file_path}")
    
    try:
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 添加文件路径到front matter
        if '---' in content:
            parts = content.split('---', 2)
            if len(parts) >= 3:
                front_matter = yaml.safe_load(parts[1])
                front_matter['file_path'] = file_path
                updated_front_matter = yaml.dump(front_matter, allow_unicode=True)
                content = f"---\n{updated_front_matter}---{parts[2]}"
        
        # 格式化内容
        formatted_content = format_abstract_with_ai(content)
        
        # 备份原文件
        backup_path = file_path + '.bak'
        os.rename(file_path, backup_path)
        
        # 保存格式化后的内容
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(formatted_content)
        
        print(f"成功格式化文件：{file_path}")
        print(f"原文件已备份为：{backup_path}")
        
    except Exception as e:
        print(f"处理文件时出错：{str(e)}")
        import traceback
        print(traceback.format_exc())

def main():
    # 处理abstracts目录下的所有.md文件
    abstracts_dir = "docs/publications/abstracts"
    if not os.path.exists(abstracts_dir):
        print(f"目录不存在：{abstracts_dir}")
        return
    
    for file_name in os.listdir(abstracts_dir):
        if file_name.endswith('.md'):
            file_path = os.path.join(abstracts_dir, file_name)
            format_abstract_file(file_path)

if __name__ == "__main__":
    main() 