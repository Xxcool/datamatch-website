# 多语言（简体 / 繁體 / English）实施方案

> 制定日期：2026-08-06 | 计划实施：2026-08-07

---

## 一、原网站分析

原站 data-match.cn 基于凡科建站（webzhan）平台，其多语言功能特点：

| 维度 | 原站做法 |
|------|---------|
| 语言版本 | 简体中文、繁體中文、English |
| 切换器位置 | 页面顶部，「简体中文 \| 繁體中文 \| English」链接组 |
| 内容管理 | 每种语言是**独立内容版本**（人工编辑，非机器翻译） |
| URL 规则 | 同一 URL，通过平台内部语言标识切换（非 /en/ 子目录） |
| 渲染方式 | JS 动态渲染，语言切换后整页重载 |

**关键结论**：原站三种语言的内容是各自独立编辑的，繁体不是简体的自动转换，英文也是人工翻译。新站应保持这一策略——准备独立翻译文本，不做自动简繁转换。

---

## 二、当前项目现状

```
datamatch-website/
├── src/
│   ├── components/     # 11 个组件，文案硬编码在 JSX 中
│   │   ├── Navbar.tsx      # 导航项、logo alt
│   │   ├── Hero.tsx        # 标题、副标题、4 个数据指标
│   │   ├── Mission.tsx     # 使命宣言
│   │   ├── Services.tsx    # 4 项服务卡片
│   │   ├── Solutions.tsx   # 解决方案卡片（标题来自 data/solutions.ts）
│   │   ├── Industries.tsx  # 8 个行业标签
│   │   ├── WhyChooseUs.tsx # 优势列表
│   │   ├── News.tsx        # 新闻卡片（标题来自 data/news.ts）
│   │   ├── Contact.tsx     # 联系信息、二维码说明
│   │   ├── Footer.tsx      # 导航、联系、方案、备案
│   │   └── ScrollToTop.tsx # 无文案
│   ├── pages/          # 3 个详情页
│   │   ├── NewsDetail.tsx
│   │   ├── SolutionDetail.tsx
│   │   └── LegalPage.tsx
│   ├── data/           # 业务数据，全中文硬编码
│   │   ├── solutions.ts    # 4 方案 × 2 案例 = 8 条
│   │   ├── news.ts         # 4 篇新闻（含正文）
│   │   └── legal.ts        # 隐私政策 + 免责声明
│   ├── App.tsx         # 路由：/ /news/:id /solutions/:id /legal/:type
│   └── main.tsx        # BrowserRouter 入口
└── public/             # 静态资源（logo、图片、二维码）
```

**文案分布统计**（需翻译的文本量）：

| 类型 | 估算条目数 | 示例 |
|------|-----------|------|
| UI 文案（导航、按钮、标题、标签） | ~80 条 | "首页"、"了解详情"、"我们的使命" |
| 解决方案数据（标题、描述、特性、案例） | ~60 条 | "食材供应链"、"从田间到餐桌" |
| 新闻数据（标题、摘要、正文） | ~16 条 | 4 篇 × 4 段 |
| 法律文档（隐私、免责） | ~24 条 | 12 节 × 标题+正文 |
| **合计** | **~180 条** | 三语言 = ~540 条翻译 |

---

## 三、三种方案详细对比

### 方案 A：react-i18next（推荐）

```
安装：npm install react-i18next i18next
```

**核心思路**：用 i18next 管理所有 UI 文案，业务数据按 locale 索引。

**文件结构**：
```
src/
├── i18n/
│   ├── config.ts              # i18next 初始化配置
│   └── locales/
│       ├── zh-CN.json         # 简体 UI 文案
│       ├── zh-TW.json         # 繁体 UI 文案
│       └── en.json            # 英文 UI 文案
├── data/
│   ├── solutions.ts           # 改为 { [locale]: Solution[] } 结构
│   ├── news.ts                # 同上
│   └── legal.ts               # 同上
├── components/
│   └── LanguageSwitcher.tsx   # 新增：语言切换器组件
└── ...
```

**组件中使用**：
```tsx
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return <Link>{t("nav.home")}</Link>;  // 取自 locales/zh-CN.json
}
```

**业务数据按 locale 索引**：
```ts
// data/solutions.ts
export const solutions = {
  "zh-CN": [/* 简体数据 */],
  "zh-TW": [/* 繁体数据 */],
  "en":    [/* 英文数据 */],
};

// 组件中使用
const { i18n } = useTranslation();
const data = solutions[i18n.language];  // 按当前语言取数据
```

| 优点 | 缺点 |
|------|------|
| React 生态最成熟的 i18n 方案 | 引入 2 个 npm 依赖（~40KB gzipped） |
| 语言包懒加载，按需加载繁体/英文 | 需要学习 i18next 配置 API |
| TypeScript 类型推导（i18next 5.x） | 业务数据需重构为 locale 索引结构 |
| 无刷新切换语言（Context 驱动） | — |
| 插值、复数、嵌套 key 原生支持 | — |
| 后续迁移 Next.js 可复用 | — |

---

### 方案 B：自建 Context i18n

**核心思路**：用 React Context 提供 `t()` 函数和 `locale` 状态，语言包用 TS 对象。

```tsx
// i18n/context.tsx
const I18nContext = createContext<{ t: (k: string) => string; locale: string; setLocale: (l: string) => void }>();

// 语言包
const messages = {
  "zh-CN": { "nav.home": "首页", ... },
  "zh-TW": { "nav.home": "首頁", ... },
  "en":    { "nav.home": "Home", ... },
};
```

| 优点 | 缺点 |
|------|------|
| 零外部依赖 | 需自建懒加载逻辑（否则首屏加载全部语言包） |
| 完全可控，代码量小 | 复数、插值、嵌套需手写 |
| 实现简单，30 分钟可搭建 | 后期扩展性弱，无生态工具 |
| — | 类型安全需自行保证 |

---

### 方案 C：路由级多语言

**核心思路**：每种语言用独立路由前缀，每个语言版本是独立页面组件。

```
路由：
/zh/           → 首页（简体）
/zh/news/:id   → 新闻详情（简体）
/tw/           → 首页（繁体）
/en/           → 首页（英文）
```

| 优点 | 缺点 |
|------|------|
| SEO 最友好，搜索引擎可索引各语言版本 | 代码重复量极大（每语言一套组件） |
| URL 清晰，可分享特定语言链接 | 维护成本高，改一处需改三处 |
| 服务端可按语言返回不同内容 | 当前纯 SPA 无 SSR，SEO 优势无法发挥 |
| — | 与当前 react-router 路由结构差异大，重构量大 |

---

## 四、推荐方案：A（react-i18next）

### 选择理由

1. **与当前架构契合**：Vite + React SPA，i18next 是标准搭配，无需改路由结构
2. **文案量适中**（~180 条）：i18next 的 JSON 语言包 + 嵌套 key 完全够用
3. **业务数据灵活**：解决方案/新闻/法律文档用 locale 索引，每种语言可独立编辑（和原站一致）
4. **未来可扩展**：如果后续迁移 Next.js 做 SSR，i18next 配置可直接复用，方案 C 的路由前缀也能在此基础上加
5. **开发效率高**：`useTranslation()` 一个 hook 搞定，不需要手写 Context

### 不选 C 的原因

当前是纯 SPA（Vite），没有 SSR，搜索引擎本就看不全页面内容。SEO 优势无法发挥，而重构成本最高。等未来迁移 Next.js 时再考虑路由前缀方案。

### 不选 B 的原因

虽然零依赖很诱人，但 ~180 条文案 + 3 种语言，自建 i18n 的懒加载、类型安全、插值都要手写，投入产出比不高。i18next 的 40KB gzipped 对企业官网可以忽略。

---

## 五、实施步骤（明天执行）

### 第 1 步：安装依赖 + 初始化配置（~30min）

```bash
npm install react-i18next i18next
```

创建 `src/i18n/config.ts`：
- 初始化 i18next，配置 3 种语言
- 默认语言从 `localStorage.getItem("lang")` 读取，fallback `zh-CN`
- 语言切换后写入 localStorage + 更新 `document.documentElement.lang`
- 语言包用动态 import 懒加载（`import("./locales/en.json")`）

在 `main.tsx` 中引入配置，用 `I18nextProvider` 包裹 App。

### 第 2 步：提取 UI 文案到语言包（~2h）

创建 3 个 JSON 文件，按模块组织 key：

```json
// locales/zh-CN.json
{
  "nav": { "home": "首页", "mission": "使命", "services": "服务", ... },
  "hero": { "title": "AI数智化", "subtitle": "轻松赢在数字时代！", ... },
  "mission": { "title": "我们的使命", "body": "..." },
  "services": { "title": "我们的服务", "consulting": "方案咨询", ... },
  "solutions": { "title": "数智化转型解决方案", "viewDetail": "查看详情", ... },
  "industries": { "title": "行业覆盖", "auto": "汽车配件", ... },
  "news": { "title": "最新消息", "readMore": "阅读更多", ... },
  "contact": { "title": "联系我们", "phone": "400-1600-575", ... },
  "footer": { "quickNav": "快速导航", "contact": "联系我们", ... },
  "common": { "backToTop": "回到顶部", "learnMore": "了解更多", ... }
}
```

逐个组件改造：把硬编码文案替换为 `t("key")` 调用。

**涉及组件**（按改造顺序）：
1. Navbar.tsx — navItems 数组
2. Hero.tsx — 标题、副标题、4 个计数器标签
3. Mission.tsx — 使命标题和正文
4. Services.tsx — 4 张服务卡片
5. Solutions.tsx — 板块标题（卡片数据来自 data/solutions.ts）
6. Industries.tsx — 8 个行业标签
7. WhyChooseUs.tsx — 优势列表
8. News.tsx — 板块标题（卡片数据来自 data/news.ts）
9. Contact.tsx — 联系信息
10. Footer.tsx — 所有列标题和链接
11. SolutionDetail.tsx — 详情页模板文案
12. NewsDetail.tsx — 详情页模板文案
13. LegalPage.tsx — 法律页模板文案
14. ScrollToTop.tsx — aria-label

### 第 3 步：业务数据多语言化（~2h）

把 3 个数据文件改为 locale 索引结构：

```ts
// data/solutions.ts（改造后）
export type Locale = "zh-CN" | "zh-TW" | "en";

export const solutions: Record<Locale, Solution[]> = {
  "zh-CN": [/* 现有简体数据 */],
  "zh-TW": [/* 繁体翻译 */],
  "en":    [/* 英文翻译 */],
};
```

同样的方式改造 `news.ts` 和 `legal.ts`。

在组件中按当前 locale 取数据：
```tsx
const { i18n } = useTranslation();
const data = solutions[i18n.language as Locale];
```

### 第 4 步：语言切换器组件（~1h）

创建 `src/components/LanguageSwitcher.tsx`：

```
样式参考原站：「简体中文 | 繁體中文 | English」
- 桌面端：放在 Navbar 右侧（导航项之后、汉堡菜单之前）
- 移动端：放在汉堡菜单底部
- 当前语言高亮（brand 色或加粗）
- 点击切换：i18n.changeLanguage(locale)
```

在 Navbar.tsx 中引入 LanguageSwitcher。

### 第 5 步：翻译内容准备（~3h，可与开发并行）

三种语言的翻译来源：

| 语言 | 来源 | 备注 |
|------|------|------|
| 简体中文 | 现有内容 | 直接搬运 |
| 繁體中文 | 人工翻译 | 可参考原站繁体版，但原站是 JS 动态加载，需手动提取 |
| English | 人工翻译 | 可参考原站英文版，同上 |

**注意**：原站的多语言内容在 JS body 文件中（unicode 编码），提取方式参考之前法律文档的抓取方法——找到对应语言的 JS body URL，解码 unicode 获取 HTML 内容。

**建议**：如果原站繁体/英文内容质量OK，直接复用；否则用 AI 辅助翻译后人工校对。不要用 OpenCC 做简繁自动转换（质量不稳定，尤其专业术语）。

### 第 6 步：测试 + 收尾（~1h）

- [ ] 三种语言切换无刷新，文案正确
- [ ] 语言偏好持久化（刷新页面后保持）
- [ ] 详情页（新闻/方案/法律）也正确切换语言
- [ ] 移动端语言切换器可用
- [ ] `document.documentElement.lang` 正确更新
- [ ] 无 console 报错
- [ ] 无遗漏的硬编码文案

---

## 六、文件变更清单

| 操作 | 文件 | 说明 |
|------|------|------|
| 新增 | `src/i18n/config.ts` | i18next 初始化 |
| 新增 | `src/i18n/locales/zh-CN.json` | 简体 UI 文案 |
| 新增 | `src/i18n/locales/zh-TW.json` | 繁体 UI 文案 |
| 新增 | `src/i18n/locales/en.json` | 英文 UI 文案 |
| 新增 | `src/components/LanguageSwitcher.tsx` | 语言切换器 |
| 修改 | `src/main.tsx` | 引入 i18n 配置 |
| 修改 | `src/App.tsx` | 无需改路由 |
| 修改 | `src/components/Navbar.tsx` | 引入切换器 + t() |
| 修改 | `src/components/Hero.tsx` | t() |
| 修改 | `src/components/Mission.tsx` | t() |
| 修改 | `src/components/Services.tsx` | t() |
| 修改 | `src/components/Solutions.tsx` | t() + locale 索引 |
| 修改 | `src/components/Industries.tsx` | t() |
| 修改 | `src/components/WhyChooseUs.tsx` | t() |
| 修改 | `src/components/News.tsx` | t() + locale 索引 |
| 修改 | `src/components/Contact.tsx` | t() |
| 修改 | `src/components/Footer.tsx` | t() |
| 修改 | `src/components/ScrollToTop.tsx` | t() aria-label |
| 修改 | `src/pages/SolutionDetail.tsx` | t() + locale 索引 |
| 修改 | `src/pages/NewsDetail.tsx` | t() + locale 索引 |
| 修改 | `src/pages/LegalPage.tsx` | t() + locale 索引 |
| 修改 | `src/data/solutions.ts` | 改为 Record<Locale, ...> |
| 修改 | `src/data/news.ts` | 改为 Record<Locale, ...> |
| 修改 | `src/data/legal.ts` | 改为 Record<Locale, ...> |

**预计总工时**：约 8-9 小时（含翻译内容准备）

---

## 七、注意事项

1. **不要用 OpenCC 自动简繁转换**：专业术语（如"数智化"、"供应链"）的繁体表达需要人工确认
2. **英文版的公司名**：建议保持 "DataMatch" 或 "DataMatch Technology"，不翻译
3. **电话和地址**：三语言共用，不翻译（地址可加英文版用于国际展示）
4. **备案信息**：三语言共用，不翻译
5. **路由 path 不翻译**：`/solutions/food-supply-chain` 保持英文 slug
6. **语言包 key 命名**：用点号分层 `module.key`，如 `nav.home`、`hero.title`
7. **懒加载**：繁体和英文语言包用动态 import，首屏只加载简体
8. **HTML lang 属性**：切换语言时同步更新 `<html lang="zh-CN|zh-TW|en">`
