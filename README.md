# 🚀 功能测试实验室 - Feature Testing Lab

基于 Next.js 15 + Tailwind CSS 4.x + MobX 的现代前端技术测试平台，专注于最新技术的实践与验证。

## 🎯 项目概述

这是一个功能测试平台，用于验证和展示现代前端技术的最佳实践，包括：

- **多主题系统**：7 种颜色主题的无闪烁切换
- **状态管理**：MobX 响应式状态持久化
- **国际化**：中英文双语支持，路径级 i18n
- **性能优化**：基于最新技术栈的性能最佳实践

## 🛠️ 技术栈

### 核心框架

- **Next.js 15.1** - React 全栈框架（App Router）
- **React 18.3** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### 状态管理

- **MobX 6.13** - 响应式状态管理
- **localStorage** - 状态持久化

### 样式系统

- **Tailwind CSS 4.1** - CSS-First 原子化框架
- **next-themes** - 专业主题管理库
- **PostCSS** - CSS 后处理器

### 国际化

- **i18next** - 国际化框架
- **react-i18next** - React 集成
- **i18next-browser-languagedetector** - 语言检测
- **react-cookie** - Cookie 管理

### UI 组件

- **Ant Design 5** - 企业级 UI 组件库
- **@ant-design/nextjs-registry** - Next.js 集成

### 开发工具

- **React Query** - 数据获取和缓存
- **ESLint** - 代码质量检查
- **pnpm** - 高效包管理器

## ✨ 核心功能

### 🎨 多主题系统

- **7 种主题**：亮色、暗色、蓝色、绿色、紫色、橙色、红色
- **零闪烁切换**：基于 next-themes 的专业实现
- **CSS-First 架构**：Tailwind CSS 4.x 原生 CSS 变量
- **自动持久化**：主题选择自动保存到 localStorage
- **SSR 兼容**：完美支持服务端渲染

### 🔢 MobX 状态管理测试

- **响应式计数器**：展示 MobX 的响应式特性
- **页面导航持久化**：状态在页面切换间保持
- **localStorage 同步**：状态自动同步到本地存储
- **实时统计**：主题切换次数、计数器值等实时统计

### 🌍 国际化 (i18n)

- **双语支持**：中文 (zh) 和英文 (en)
- **路径级 i18n**：`/zh/` 和 `/en/` 路由
- **智能语言检测**：自动检测用户语言偏好
- **同步状态管理**：语言状态与 MobX 同步
- **完整翻译**：所有界面文本支持双语

### 📱 响应式设计

- **移动优先**：完全响应式布局
- **自适应导航**：移动端优化的导航体验
- **一致性设计**：跨语言的 UI 一致性保证

## 🚀 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- pnpm 8.0 或更高版本

### 安装步骤

1. **克隆项目**

```bash
git clone <repository-url>
cd next-app
```

2. **安装依赖**

```bash
pnpm install
```

3. **启动开发服务器**

```bash
pnpm dev
```

4. **访问应用**

- 开发环境：[http://localhost:3000](http://localhost:3000)
- 自动重定向到：[http://localhost:3000/zh](http://localhost:3000/zh)

## 📁 项目结构

```
next-app/
├── app/                          # Next.js App Router
│   ├── [lang]/                   # 国际化路由
│   │   ├── layout.tsx           # 语言布局
│   │   └── page.tsx             # 主测试页面
│   ├── globals.css              # 全局样式 (Tailwind 4.x)
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 根重定向页面
├── components/                   # 可复用组件
│   ├── ThemeProvider.tsx        # next-themes 主题提供者
│   ├── ThemeSelector.tsx        # 主题选择器
│   ├── Counter.tsx              # MobX 计数器
│   ├── Navigation.tsx           # 页面导航
│   ├── LanguageSwitcher.tsx     # 语言切换器
│   └── Providers.tsx            # 全局提供者组件
├── i18n/                        # 国际化配置
│   ├── client.ts                # 客户端 i18n
│   ├── i18n-context.tsx         # i18n Context
│   ├── settings.ts              # i18n 设置
│   └── locales/                 # 翻译文件
│       ├── zh/common.json       # 中文翻译
│       └── en/common.json       # 英文翻译
├── store/                       # MobX 状态管理
│   ├── global.ts                # 全局状态
│   └── index.ts                 # Store 导出
├── middleware.ts                # Next.js 中间件 (i18n 路由)
├── postcss.config.mjs           # PostCSS 配置
└── tailwind.config.ts           # Tailwind 配置
```

## 🎯 技术亮点

### Tailwind CSS 4.x 特性

```css
/* CSS-First 主题定义 */
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

/* 主题类样式 */
.dark {
  --background: #020817;
}
.blue {
  --background: #eff6ff;
}
```

### MobX 响应式状态

```typescript
// 自动响应式状态
class Global {
  theme: Theme = "light";
  counter = 0;
  language: Language = "zh";

  constructor() {
    makeAutoObservable(this);
  }
}
```

### next-themes 集成

```typescript
// 专业主题管理
<ThemeProvider
  attribute="class"
  defaultTheme="light"
  themes={['light', 'dark', 'blue', 'green', 'purple', 'orange', 'red']}
  enableSystem={false}
  disableTransitionOnChange={false}
/>
```

## 🔧 开发命令

```bash
# 开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 类型检查
pnpm type-check

# 代码检查
pnpm lint

# 安装新依赖
pnpm add <package-name>
```

## 📊 性能优化

### 主题系统优化

- ✅ **零闪烁切换**：使用 next-themes 专业实现
- ✅ **CSS 变量**：原生 CSS 变量支持
- ✅ **SSR 兼容**：完美的服务端渲染支持
- ✅ **自动持久化**：无需手动管理 localStorage

### 国际化优化

- ✅ **路径级 i18n**：SEO 友好的 URL 结构
- ✅ **自动重定向**：智能语言检测和重定向
- ✅ **按需加载**：翻译资源按需加载
- ✅ **类型安全**：完整的 TypeScript 支持

### 状态管理优化

- ✅ **响应式更新**：MobX 自动依赖跟踪
- ✅ **状态持久化**：自动同步到 localStorage
- ✅ **性能监控**：实时状态统计展示

## 🎨 设计系统

### 主题色彩

| 主题   | 主色      | 适用场景           |
| ------ | --------- | ------------------ |
| Light  | `#3B82F6` | 日间模式，默认主题 |
| Dark   | `#1E293B` | 夜间模式，护眼阅读 |
| Blue   | `#2563EB` | 商务场景，专业感   |
| Green  | `#22C55E` | 自然主题，健康应用 |
| Purple | `#9333EA` | 创意设计，个性化   |
| Orange | `#F97316` | 活力主题，橙色偏好 |
| Red    | `#EF4444` | 警告状态，红色强调 |

### 组件设计原则

- **一致性**：跨主题、跨语言的 UI 一致性
- **可访问性**：WCAG 标准的颜色对比度
- **响应式**：移动优先的设计原则
- **性能**：最小化重渲染和布局抖动

## 📊 SEO 优化配置

本项目采用了完整的 SEO 最佳实践，支持多语言、SSG 静态生成、动态 metadata 等功能。

**📖 完整 SEO 配置指南**：[SEO_GUIDE.md](docs/SEO_GUIDE.md)

### SEO 特性

- ✅ **SSG 静态生成** - 所有页面预渲染，SEO 友好
- ✅ **动态 Metadata** - 基于 Next.js 15 Metadata API
- ✅ **多语言 SEO** - 完整的 hreflang 和 canonical 配置
- ✅ **结构化数据** - Open Graph、Twitter Card 优化
- ✅ **搜索引擎优化** - 自动生成 sitemap.xml 和 robots.txt
- ✅ **中央化配置** - 一次配置，全站生效

### 配置文件

```
📁 SEO 配置架构
├── types/seo.types.ts       # 类型定义
├── config/
│   ├── seo.config.ts        # 站点级配置
│   └── pages.config.ts      # 页面级配置
└── docs/SEO_GUIDE.md        # 使用指南
```

## 🧪 测试功能

### 主题系统测试

1. 切换不同主题，观察颜色变化
2. 刷新页面，验证主题持久化
3. 检查控制台，确认无 hydration 错误

### MobX 状态测试

1. 增减计数器，观察状态响应
2. 切换页面，验证状态保持
3. 刷新页面，确认状态恢复

### 国际化测试

1. 切换语言，观察文本变化
2. 直接访问 `/en/` 路径
3. 验证语言状态同步

### SEO 测试

1. 运行 `pnpm build` 生成 SSG 静态文件
2. 检查 `.next/server/app/` 中的 HTML 文件 metadata
3. 访问 `/sitemap.xml` 和 `/robots.txt` 验证自动生成
4. 使用 Google PageSpeed Insights 测试 SEO 评分

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发规范

- 使用 TypeScript 编写所有代码
- 遵循 ESLint 规则
- 组件使用 FC 接口定义
- 状态管理优先使用 MobX

### 提交规范

```bash
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试相关
chore: 构建工具
```

## 📄 许可证

MIT License - 请查看 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/) - React 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [MobX](https://mobx.js.org/) - 状态管理
- [next-themes](https://github.com/pacocoursey/next-themes) - 主题管理
- [i18next](https://www.i18next.com/) - 国际化框架

---

**🎉 享受现代前端开发的乐趣！**
