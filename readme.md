# APAAM Lab 知识库

这是APAAM Lab的课题组网站。网站使用[MkDocs](https://www.mkdocs.org/)构建，采用[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)主题。

## 环境配置

1. 安装Python包管理工具[pip](https://pip.pypa.io/en/stable/installing/)或[pip3](https://pip.pypa.io/en/stable/installing/)。

2. 安装必要的Python包：
```bash
# 基础包
pip3 install mkdocs
pip3 install mkdocs-material

# 扩展包
pip3 install mkdocs-bootswatch
pip3 install pymdown-extensions
pip3 install attr
pip3 install mkdocs-bibtex
pip3 install mkdocs-video

# 论文摘要生成工具依赖
pip3 install requests
pip3 install pyyaml
pip3 install urllib3
pip3 install beautifulsoup4  # 用于解析HTML
pip3 install PyMuPDF  # 用于处理PDF文件
pip3 install pdf2image

# macOS用户需要安装
brew install poppler  # 用于从PDF提取图片
```

## 目录结构

```
.
├── docs/                    # 网站内容目录
│   ├── images/             # 图片资源
│   │   ├── publications/       # 论文相关
│   │   │   ├── abstracts/     # 论文摘要
│   │   │   ├── index.en.md    # 英文论文列表
│   │   │   └── index.zh.md    # 中文论文列表
│   │   └── ...                # 其他内容
│   ├── scripts/                # 工具脚本
│   │   ├── generate_abstracts.py  # 生成论文摘要
│   │   ├── generate_all_abstracts.py  # 批量生成论文摘要
│   │   └── format_abstract.py     # 格式化摘要文件
│   ├── mkdocs.yml             # MkDocs配置文件
│   └── README.md              # 本文件
```

## 网站更新流程

1. 内容修改
   - 所有内容都在`docs/`目录下
   - 新增页面时需要在`mkdocs.yml`的`nav`部分添加索引
   - 支持中英双语，分别编辑`.zh.md`和`.en.md`文件
   - 图片资源统一放在`docs/images`目录下

2. 本地预览
   ```bash
   # 启动本地服务器
   mkdocs serve

   # 如果8000端口被占用，可以指定其他端口
   mkdocs serve -a localhost:8001
   ```
   然后在浏览器访问 http://127.0.0.1:8000 或指定的其他地址

3. 部署到GitHub Pages
   ```bash
   # 构建并部署
   mkdocs gh-deploy

   # 如果需要清理缓存重新构建
   mkdocs gh-deploy --clean
   ```

4. 提交源代码更改
   ```bash
   git add .
   git commit -m "更新说明"
   git push
   ```

## 论文摘要生成工具

本仓库包含了自动生成论文摘要的工具脚本，位于`scripts/`目录下：

1. `generate_abstracts.py`: 生成单篇论文摘要
   - 从publications页面提取论文信息
   - 使用AI（Deepseek）生成中文摘要
   - 自动创建摘要文件
   - 更新论文链接

2. `generate_all_abstracts.py`: 批量生成论文摘要
   - 自动扫描publications/pdf目录下的所有PDF文件
   - 从publications页面获取完整论文信息
   - 跳过已存在摘要的论文
   - 支持限制处理数量和强制重新生成

3. `format_abstract.py`: 格式化摘要文件
   - 统一摘要文件的格式
   - 优化研究亮点的展示
   - 保持文档结构的一致性
   - 自动删除备份文件

使用方法：
```bash
# 初始化环境并获取API密钥（每次使用前都需要运行）
zsh -i -c "init_gpt && python3 scripts/generate_abstracts.py papers/example.pdf"

# 批量生成论文摘要
zsh -i -c "init_gpt && python3 scripts/generate_all_abstracts.py"

# 限制处理的PDF文件数量
zsh -i -c "init_gpt && python3 scripts/generate_all_abstracts.py --limit 5"

# 强制重新生成所有摘要
zsh -i -c "init_gpt && python3 scripts/generate_all_abstracts.py --force"

# 格式化摘要文件
python3 scripts/format_abstract.py

# 格式化摘要文件并保留备份
python3 scripts/format_abstract.py --keep-backup
```

## 项目规则

项目相关规则（包括init_gpt相关规则、论文摘要生成工作流等）已移至`.cursorrules`文件，请参考该文件获取详细信息。
