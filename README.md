# 数配技术官网

数配技术有限公司官网——AI 数智化供应链解决方案展示站点。基于 Vite + React + TypeScript + Tailwind CSS 构建，部署于 Cloudflare Pages。

> 线上地址：https://datamatch-website.pages.dev

## ✨ 功能特性

- 🏠 **单页首页**：Hero 动画、公司使命、核心服务、解决方案、行业覆盖、选择理由、新闻动态、联系方式
- 🧩 **解决方案二级页**：每个解决方案独立详情页（`/solutions/:id`），支持多案例展示
- 📰 **新闻详情页**：独立文章页（`/news/:id`），含"更多文章"推荐
- ⚖️ **法律文档页**：隐私政策、免责声明站内实现（`/legal/:type`）
- 🧭 **智能导航**：固定导航栏，滚动透明背景，hash 锚点平滑跳转（首页区块 / 二级页返回）
- 🔝 **回到顶部**：滚动 300px 后显示悬浮按钮；前进滚动到顶部、后退保持原位置
- 📱 **响应式**：mobile-first，手机 / 平板 / 桌面全适配
- 🌐 **SPA 路由**：BrowserRouter + `_redirects` SPA fallback，深链接刷新不 404

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript 5.7（strict） |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| 路由 | React Router 7（BrowserRouter） |
| 设计 | 自研设计变量（brand/accent/growth 三色系）、shadcn 风格组件 |
| 部署 | Cloudflare Pages + wrangler CLI |

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:3000）
npm run dev

# 生产构建（tsc 类型检查 + vite build，输出到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## 📁 项目结构

```
datamatch-website/
├── public/                    # 静态资源（图片、favicon、二维码）
│   ├── logo-header.png        # 顶部 logo
│   ├── logo-footer.png        # 底部 logo
│   ├── qrcode.png             # 联系方式二维码
│   ├── case-*.jpg             # 案例图片（食材/生果/快销/仓库）
│   ├── favicon-logo.png       # 站点图标
│   └── _redirects             # SPA fallback 配置
├── src/
│   ├── main.tsx               # 入口（BrowserRouter）
│   ├── App.tsx                # 路由定义 + 首页组合
│   ├── index.css              # Tailwind 指令 + 全局样式
│   ├── components/            # 首页区块组件
│   │   ├── Navbar.tsx         # 固定导航（hash 锚点跳转）
│   │   ├── Hero.tsx           # 首屏 + 数据计数动画
│   │   ├── Mission.tsx        # 公司使命
│   │   ├── Services.tsx       # 核心服务
│   │   ├── Solutions.tsx      # 解决方案卡片
│   │   ├── Industries.tsx     # 行业覆盖
│   │   ├── WhyChooseUs.tsx    # 选择理由
│   │   ├── News.tsx           # 新闻动态
│   │   ├── Contact.tsx        # 联系方式（含二维码）
│   │   ├── Footer.tsx         # 页脚（ICP/公安备案链接）
│   │   └── ScrollToTop.tsx    # 回到顶部 + 路由滚动管理
│   ├── pages/                 # 二级页面
│   │   ├── NewsDetail.tsx     # 新闻详情
│   │   ├── SolutionDetail.tsx # 解决方案详情（案例展示）
│   │   └── LegalPage.tsx      # 通用法律文档页
│   ├── data/                  # 内容数据（纯 TS 文件，无后端）
│   │   ├── solutions.ts       # 解决方案 + 案例数据
│   │   ├── news.ts            # 新闻文章数据
│   │   └── legal.ts           # 隐私政策 / 免责声明
│   └── lib/utils.ts           # 工具函数
├── I18N_PLAN.md               # 多语言实施方案（待实施）
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 📝 内容维护

站点为**纯前端静态站**，所有内容集中在 `src/data/` 下的 TypeScript 文件，改完 `npm run build` 重新部署即可（或直接 push 触发自动构建）。

### 添加解决方案 / 案例

编辑 `src/data/solutions.ts`，在 `solutions` 数组中新增对象：

```ts
{
  id: "your-id",               // 路由标识 → /solutions/your-id
  tag: "方案标签",
  title: "方案标题",
  desc: "方案描述",
  features: ["特性1", "特性2"],
  color: "brand",              // brand | accent | growth
  iconPath: "SVG path 数据",
  cases: [                     // 案例列表（可多个）
    { title: "案例名", date: "2025-01-01", desc: "案例描述", image: "/case-xxx.jpg" },
  ],
}
```

### 添加新闻文章

编辑 `src/data/news.ts`，新增 `NewsArticle` 对象（`id` 唯一，`content` 为段落数组）。

### 修改法律文档

编辑 `src/data/legal.ts`，按 `LegalSection` 结构组织章节。

## 🌐 部署

### 自动部署（推荐）

代码推送到 GitHub `main` 分支后，Cloudflare Pages 自动构建部署：

1. 仓库：`Xxcool/datamatch-website`
2. Cloudflare Pages 项目：`datamatch-website`
3. 构建配置：框架预设 **React (Vite)**，构建命令 `npm run build`，输出目录 `dist`

```bash
git add -A && git commit -m "your message" && git push
```

### 手动部署（wrangler CLI）

```bash
npm run build
npx wrangler pages deploy dist --project-name=datamatch-website --branch=main
```

> 注意：`public/_redirects` 提供 `/* /index.html 200` 的 SPA fallback，保证深链接（如 `/news/8014620`）直接访问不 404。

## 📌 路由一览

| 路径 | 页面 |
|------|------|
| `/` | 首页（Hero / 使命 / 服务 / 解决方案 / 行业 / 新闻 / 联系） |
| `/solutions/:id` | 解决方案详情（含案例展示） |
| `/news/:id` | 新闻详情 |
| `/legal/privacy-policy` | 隐私政策 |
| `/legal/disclaimer` | 免责声明 |

## 🗺 路线图

- [ ] 多语言支持（简体 / 繁體 / English）——方案见 `I18N_PLAN.md`
- [ ] 深色模式切换
- [ ] 接入后端 API（表单提交、新闻动态管理）
- [ ] SEO 优化（sitemap、结构化数据）
- [ ] 绑定自定义域名 `data-match.cn`

## 📄 License

版权所有 © 数配技术有限公司。仅供公司内部与授权方使用。
