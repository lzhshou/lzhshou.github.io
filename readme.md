# APAAM Lab Website

这是APAAM Lab（应用过程分析与模拟实验室）的官方网站。网站使用[Docusaurus](https://docusaurus.io/)构建，支持多语言（中文/英文）和现代化的用户体验。

## 技术栈

- **框架**: Docusaurus v3 (React-based)
- **语言**: TypeScript
- **样式**: CSS Modules
- **数学公式**: KaTeX
- **多语言**: Docusaurus i18n
- **部署**: GitHub Pages

## 环境配置

### 前置要求
- Node.js (版本 18 或更高)
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
# 启动开发服务器（中文版）
npm start

# 启动英文版开发服务器
npm run start -- --locale en
```

### 构建和部署
```bash
# 构建生产版本
npm run build

# 本地预览构建结果
npm run serve

# 部署到 GitHub Pages
npm run deploy
```

## 目录结构

```
.
├── docs/                    # 中文文档内容
│   ├── people/             # 人员页面
│   ├── research/           # 研究方向
│   ├── publications/       # 学术发表
│   ├── resources/          # 资源页面
│   ├── teaching/           # 教学页面
│   └── about/              # 关于页面
├── i18n/                   # 多语言配置
│   ├── zh/                 # 中文翻译
│   └── en/                 # 英文翻译
├── src/                    # React 组件和页面
│   ├── components/         # 自定义组件
│   ├── css/               # 全局样式
│   └── pages/             # 自定义页面
├── static/                 # 静态资源
│   └── img/               # 图片资源
├── docusaurus.config.ts    # Docusaurus 配置
├── sidebars.ts            # 侧边栏配置
└── package.json           # 项目依赖
```

## 内容更新

### 添加新页面
1. 在 `docs/` 目录下创建新的 Markdown 文件
2. 在 `sidebars.ts` 中添加相应的导航配置
3. 如需英文版本，在 `i18n/en/docusaurus-plugin-content-docs/current/` 下创建对应文件

### 更新多语言内容
1. 中文内容直接在 `docs/` 目录下编辑
2. 英文内容在 `i18n/en/docusaurus-plugin-content-docs/current/` 目录下编辑
3. UI 翻译在 `i18n/zh/code.json` 和 `i18n/en/code.json` 中配置

### 添加图片资源
将图片文件放在 `static/img/` 目录下，然后在 Markdown 中使用相对路径引用：
```markdown
![描述](/img/your-image.png)
```

## 功能特性

- ✅ 多语言支持（中文/英文）
- ✅ 响应式设计
- ✅ 暗色/亮色主题切换
- ✅ 数学公式支持（KaTeX）
- ✅ 搜索功能
- ✅ SEO 优化
- ✅ 移动端适配

## 部署

网站自动部署到 GitHub Pages：
- 主站点：https://lzhshou.github.io
- 开发分支会自动触发构建和部署

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系我们

- 邮箱：laizhengsh@mail.sysu.edu.cn
- GitHub：https://github.com/lzhshou/lzhshou.github.io

---

*本网站由 AI 智能助手协助构建与维护*
