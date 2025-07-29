# 🚀 功能测试实验室 - Feature Testing Lab

基于 Next.js 15 + Tailwind CSS 4.x + MobX 的现代前端技术脚手架，专注于最新技术的实践与验证。

## 🎯 项目概述

这是一个功能齐全的前端脚手架，集成了现代前端开发的最佳实践：

- **🎨 多主题系统**：支持自定义主题，无闪烁切换
- **📊 状态管理**：MobX 响应式状态持久化
- **🌍 国际化**：中英文双语支持，路径级 i18n
- **📈 SEO 优化**：完整的 SEO 配置，SSG 静态生成
- **⚡ 性能优化**：基于最新技术栈的性能最佳实践

## 🛠️ 技术栈

### 核心框架

- **Next.js 15** - React 全栈框架（App Router）
- **React 18** - 用户界面库
- **TypeScript** - 类型安全

### 状态管理

- **MobX 6** - 响应式状态管理
- **localStorage** - 状态持久化

### 样式系统

- **Tailwind CSS 4** - CSS-First 原子化框架
- **next-themes** - 专业主题管理

### 国际化

- **i18next** - 国际化框架
- **react-i18next** - React 集成

### 开发工具

- **ESLint** - 代码质量检查
- **pnpm** - 高效包管理器

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

## ✨ 核心功能使用

### 🎨 多主题系统

**功能特点**：

- 支持无限自定义主题（内置 light、dark、blue、green、purple、orange、red）
- 基于 CSS 变量，支持完全自定义颜色方案
- 零闪烁切换，完美 SSR 支持
- 自动持久化到 localStorage

**使用方式**：

```typescript
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map(theme => (
        <option key={theme} value={theme}>{theme}</option>
      ))}
    </select>
  )
}
```

**自定义主题**：

```css
/* 在 globals.css 中添加自定义主题 */
.my-theme {
  --background: #f0f9ff;
  --foreground: #0c4a6e;
  --primary: #0ea5e9;
  --secondary: #64748b;
  /* ...更多 CSS 变量 */
}
```

```typescript
// 在 ThemeProvider 中注册主题
<ThemeProvider themes={['light', 'dark', 'blue', 'my-theme']}>
```

### 📊 MobX 状态管理

**功能特点**：

- 响应式状态更新
- 自动持久化到 localStorage
- 跨组件、跨页面状态共享

**使用方式**：

```typescript
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const Counter = observer(() => {
  const { global } = useStore()

  return (
    <div>
      <span>计数: {global.counter}</span>
      <button onClick={() => global.increment()}>+1</button>
      <button onClick={() => global.decrement()}>-1</button>
    </div>
  )
})
```

### 🌍 国际化 (i18n)

**功能特点**：

- 路径级 i18n（/zh/、/en/）
- 自动语言检测
- 与状态管理系统集成

**使用方式**：

```typescript
import { useTranslation } from '@/i18n/client'

function MyComponent() {
  const { t } = useTranslation()

  return (
    <h1>{t('welcome')}</h1>
  )
}
```

**添加翻译**：

```json
// i18n/locales/zh/common.json
{
  "welcome": "欢迎"
}

// i18n/locales/en/common.json
{
  "welcome": "Welcome"
}
```

### 📈 SEO 优化配置

**功能特点**：

- SSG 静态生成，SEO 友好
- 自动生成 sitemap.xml 和 robots.txt
- 完整的 Open Graph 和 Twitter Card 支持
- 中央化配置管理

**📖 完整 SEO 配置指南**：[SEO_GUIDE.md](docs/SEO_GUIDE.md)

**快速配置**：

1. 修改 `config/seo.config.ts` - 站点基础信息
2. 修改 `config/pages.config.ts` - 页面具体内容
3. 设置环境变量 `NEXT_PUBLIC_SITE_URL`

## 📁 项目结构

```
next-app/
├── app/                     # Next.js App Router
│   ├── [lang]/             # 国际化路由
│   ├── sitemap.ts          # 自动生成 sitemap
│   └── robots.ts           # 自动生成 robots.txt
├── components/             # 可复用组件
├── config/                 # 配置文件
│   ├── seo.config.ts      # SEO 站点配置
│   └── pages.config.ts    # SEO 页面配置
├── i18n/                  # 国际化配置
│   ├── locales/           # 翻译文件
│   └── settings.ts        # i18n 设置
├── store/                 # MobX 状态管理
├── types/                 # TypeScript 类型定义
└── docs/                  # 文档
```

## 🔧 开发命令

```bash
# 开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

## 🧪 功能测试

### 主题系统测试

1. 切换不同主题，观察颜色变化
2. 刷新页面，验证主题持久化

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
2. 访问 `/sitemap.xml` 和 `/robots.txt` 验证自动生成
3. 使用 Google PageSpeed Insights 测试 SEO 评分

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发规范

- 使用 TypeScript 编写所有代码
- 遵循 ESLint 规则
- 组件使用 FC 接口定义
- 状态管理优先使用 MobX

## 📄 许可证

MIT License

---

**🎉 享受现代前端开发的乐趣！**
