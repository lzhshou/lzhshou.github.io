import os
import re
import yaml
import subprocess
from pathlib import Path
import argparse
import shlex
import tempfile
import fileinput

def get_pdf_files():
    """获取所有PDF文件路径"""
    pdf_files = []
    
    # 获取first_or_correspondance目录下的PDF文件
    first_dir = "docs/publications/pdf/first_or_correspondance"
    if os.path.exists(first_dir):
        for file in os.listdir(first_dir):
            if file.endswith(".pdf") and not file.startswith("."):
                pdf_files.append(os.path.join(first_dir, file))
    
    # 获取coauthored目录下的PDF文件
    coauthored_dir = "docs/publications/pdf/coauthored"
    if os.path.exists(coauthored_dir):
        for file in os.listdir(coauthored_dir):
            if file.endswith(".pdf") and not file.startswith("."):
                pdf_files.append(os.path.join(coauthored_dir, file))
    
    return pdf_files

def get_existing_abstracts():
    """获取已存在的摘要文件"""
    existing_abstracts = set()
    abstracts_dir = "docs/publications/abstracts"
    
    if os.path.exists(abstracts_dir):
        for file in os.listdir(abstracts_dir):
            if file.endswith(".md") and not file.endswith(".bak"):
                # 提取年份和作者
                match = re.match(r"(\d{4})_([^_]+)_", file)
                if match:
                    year = match.group(1)
                    author = match.group(2)
                    # 使用年份和作者作为标识
                    existing_abstracts.add(f"{year}_{author}")
    
    return existing_abstracts

def extract_info_from_pdf_name(pdf_path):
    """从PDF文件名中提取信息"""
    filename = os.path.basename(pdf_path)
    
    # 提取年份和作者
    match = re.match(r"([A-Za-z]+)(\d{4})\s+(.*?)\.pdf", filename)
    if match:
        author = match.group(1)
        year = match.group(2)
        title = match.group(3)
        return year, author, title
    
    return None, None, None

def clean_author_name(author):
    """清理作者名称中的特殊字符"""
    # 移除Markdown加粗标记
    author = re.sub(r'\*\*(.*?)\*\*', r'\1', author)
    # 移除其他特殊字符
    author = re.sub(r'[^\w\s,.]', '', author)
    return author

def get_paper_info_from_publications(year, author, title):
    """从publications页面中获取更完整的论文信息"""
    try:
        # 读取publications页面
        with open('docs/publications/index.zh.md', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 使用正则表达式查找匹配的论文
        # 匹配模式：作者包含指定作者，年份匹配，标题包含关键词
        author_pattern = author.split(',')[0]  # 使用第一个作者
        title_keywords = title.split()[:3]  # 使用标题的前三个单词作为关键词
        
        # 构建正则表达式
        pattern = r'\d+\.\s+(.*?' + author_pattern + r'.*?)\s+\(' + year + r'\)\.\s+(.*?'
        
        # 添加标题关键词
        for keyword in title_keywords:
            if len(keyword) > 3:  # 忽略太短的单词
                pattern += r'.*?' + re.escape(keyword)
        
        pattern += r'.*?)\.\s+\*(.*?)\*.*?<(https?://.*?)>'
        
        # 查找匹配的论文
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            authors_raw = match.group(1).split(', ')
            # 清理作者名称
            authors = [clean_author_name(a) for a in authors_raw]
            full_title = match.group(2)
            journal = match.group(3)
            # 清理期刊名称，移除特殊字符
            journal = re.sub(r'[^\w\s]', '', journal)
            doi = match.group(4)
            
            return {
                'title': full_title,
                'authors': authors,
                'journal': journal,
                'year': year,
                'doi': doi
            }
    except Exception as e:
        print(f"从publications页面获取论文信息时出错: {e}")
    
    # 如果无法从publications页面获取信息，则返回基本信息
    return {
        'title': title,
        'authors': [f"{author}, et al."],
        'journal': "To be determined",
        'year': year,
        'doi': "To be determined"
    }

def should_skip_abstract(pdf_path, existing_abstracts):
    """判断是否应该跳过该PDF的摘要生成"""
    year, author, _ = extract_info_from_pdf_name(pdf_path)
    
    if year and author:
        # 检查是否已存在对应的摘要
        key = f"{year}_{author.lower()}"
        return key in existing_abstracts
    
    return False

def modify_generate_abstracts_script(pdf_path):
    """修改generate_abstracts.py脚本中的test_single_paper函数，使其使用正确的论文信息"""
    year, author, title = extract_info_from_pdf_name(pdf_path)
    if not (year and author and title):
        print(f"无法从PDF文件名中提取论文信息: {pdf_path}")
        return False
    
    # 从publications页面获取更完整的论文信息
    paper_info = get_paper_info_from_publications(year, author, title)
    
    # 创建临时文件
    temp_file = tempfile.NamedTemporaryFile(delete=False, mode='w', suffix='.py')
    script_path = "scripts/generate_abstracts.py"
    
    try:
        with open(script_path, 'r') as original_file:
            content = original_file.read()
        
        # 构建作者列表字符串
        authors_str = ', '.join([f'"{a}"' for a in paper_info['authors']])
        
        # 使用正则表达式替换test_single_paper函数中的论文信息
        pattern = r'def test_single_paper\(pdf_path: str = None\):(.*?)paper = PaperInfo\((.*?)\)'
        replacement = f'''def test_single_paper(pdf_path: str = None):
    """测试单篇论文的摘要生成
    
    Args:
        pdf_path: 可选，本地PDF文件路径
    """
    paper = PaperInfo(
        title="{paper_info['title']}",
        authors=[{authors_str}],
        journal="{paper_info['journal']}",
        year="{paper_info['year']}",
        doi="{paper_info['doi']}"
    )'''
        
        # 使用re.DOTALL标志来匹配跨行内容
        modified_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # 写入临时文件
        temp_file.write(modified_content)
        temp_file.close()
        
        # 替换原始文件
        os.replace(temp_file.name, script_path)
        return True
    except Exception as e:
        print(f"修改generate_abstracts.py脚本时出错: {e}")
        if os.path.exists(temp_file.name):
            os.unlink(temp_file.name)
        return False

def generate_abstract(pdf_path):
    """为指定的PDF生成摘要"""
    # 修改generate_abstracts.py脚本
    if not modify_generate_abstracts_script(pdf_path):
        return False
    
    # 使用引号包裹文件路径，避免空格问题
    quoted_path = shlex.quote(pdf_path)
    cmd = f'zsh -i -c "init_gpt && python3 scripts/generate_abstracts.py {quoted_path}"'
    print(f"执行命令: {cmd}")
    
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        print(result.stdout)
        if result.stderr:
            print(f"警告: {result.stderr}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"生成摘要失败: {e}")
        print(f"错误输出: {e.stderr}")
        return False

def main():
    """主函数"""
    parser = argparse.ArgumentParser(description='为所有PDF文件生成摘要')
    parser.add_argument('--force', action='store_true', help='强制重新生成所有摘要，即使已存在')
    parser.add_argument('--limit', type=int, default=0, help='限制处理的PDF文件数量，0表示不限制')
    args = parser.parse_args()
    
    # 获取所有PDF文件
    pdf_files = get_pdf_files()
    print(f"找到 {len(pdf_files)} 个PDF文件")
    
    # 获取已存在的摘要
    existing_abstracts = get_existing_abstracts() if not args.force else set()
    print(f"找到 {len(existing_abstracts)} 个已存在的摘要")
    
    # 处理每个PDF文件
    processed_count = 0
    skipped_count = 0
    success_count = 0
    
    for pdf_path in pdf_files:
        if args.limit > 0 and processed_count >= args.limit:
            print(f"已达到处理限制 ({args.limit})，停止处理")
            break
        
        if should_skip_abstract(pdf_path, existing_abstracts) and not args.force:
            print(f"跳过已存在摘要的PDF: {os.path.basename(pdf_path)}")
            skipped_count += 1
            continue
        
        print(f"\n处理PDF文件 ({processed_count + 1}/{len(pdf_files)}): {pdf_path}")
        if generate_abstract(pdf_path):
            success_count += 1
        
        processed_count += 1
    
    print(f"\n摘要生成完成!")
    print(f"总共处理: {processed_count} 个PDF文件")
    print(f"跳过已存在: {skipped_count} 个PDF文件")
    print(f"成功生成: {success_count} 个摘要")

if __name__ == "__main__":
    main() 