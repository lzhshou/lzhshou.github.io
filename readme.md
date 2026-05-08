# APAAM Lab Website

这是 APAAM Lab（应用过程分析与模拟实验室）的官方网站，同时展示 Zhengshou Lai（中山大学土木工程学院副教授）的个人学术主页。网站使用 [Docusaurus](https://docusaurus.io/) 构建，支持多语言（中文/英文）和现代化的用户体验。

## 技术栈

- **框架**: Docusaurus v3.8.1 (React 19)
- **语言**: TypeScript
- **样式**: CSS Modules + 全局自定义 CSS
- **动画**: Framer Motion
- **数学公式**: KaTeX
- **多语言**: Docusaurus i18n（中文/英文）
- **部署**: GitHub Pages

## 环境配置

### 前置要求
- Node.js >= 18.0
- npm

### 安装依赖
```bash
npm install
```

## 本地开发与预览

### 快速预览（推荐）

`npm start` 会先执行生产构建（包含中文、英文两个语言包），再启动静态预览服务。同一端口下可同时访问默认语言与英文路径，例如 `/docs/...` 与 `/en/docs/...`，避免与 Docusaurus 开发模式「单语言 SPA」的行为混淆。

```bash
npm start
```

预览服务默认地址为 [http://localhost:3000](http://localhost:3000)。

### 热更新开发（可选）

若需要 Webpack 开发服务器与热重载，可直接调用 CLI，并指定语言（每次只跑一种语言）：

```bash
npx docusaurus start --locale zh
npx docusaurus start --locale en
```

## 构建

```bash
# 仅构建（不启动服务）
npm run build

# 在已有 build 输出时，仅启动预览服务
npm run serve
```

## 目录结构

```
.
├── blog/                         # 博客文章
├── docs/                         # 中文文档内容
│   ├── about/                    # 关于页面
│   ├── people/                   # 人员页面
│   ├── publications/             # 学术发表
│   ├── research/                 # 研究方向
│   ├── resources/                # 资源页面
│   └── teaching/                 # 教学页面
├── i18n/                         # 多语言配置
│   ├── zh/                       # 中文 UI 翻译
│   └── en/                       # 英文翻译（文档 + UI）
├── src/                          # React 组件和页面
│   ├── css/                      # 全局样式（custom.css）
│   ├── pages/                    # 自定义页面（首页 index.tsx）
│   └── theme/                    # 主题组件覆盖（Footer、NavbarItem）
├── static/                       # 静态资源
│   ├── img/                      # 图片资源
│   └── pdf/                      # PDF 文件
├── docusaurus.config.ts          # Docusaurus 配置
├── sidebars.ts                   # 侧边栏配置
├── Makefile                      # CLI 安装/卸载
└── package.json
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

### 添加博客文章
1. 在 `blog/` 目录下创建 `YYYY-MM-DD-title.md` 格式的文件
2. 在 `blog/authors.yml` 中配置作者信息
3. 在 `blog/tags.yml` 中配置标签（如需新标签）
4. 英文标签翻译在 `i18n/en/docusaurus-plugin-content-blog/tags.yml` 中配置

### 添加图片/PDF 资源
- 图片放在 `static/img/` 目录下，Markdown 中引用：`![描述](/img/your-image.png)`
- PDF 放在 `static/pdf/` 目录下，引用路径为 `/pdf/...`

## 功能特性

- 多语言支持（中文/英文）
- 响应式设计
- 暗色/亮色主题切换
- 数学公式支持（KaTeX）
- 搜索功能
- 博客系统
- SEO 优化
- 移动端适配
- Shell 自动补全

## 部署

push 到 `main` 分支后由 GitHub Actions 自动构建并部署到 GitHub Pages。

- 主站点：https://lzhshou.github.io

## 联系我们

- 邮箱：laizhengsh@mail.sysu.edu.cn
- GitHub：https://github.com/apaam

---

*本网站由 AI 智能助手协助构建与维护*
