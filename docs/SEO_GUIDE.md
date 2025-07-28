# 📊 SEO 配置指南

这是一个脚手架项目，专为开发者快速搭建具备完整 SEO 优化的 Next.js 15 应用而设计。

## 🎯 一次配置，全局生效

所有 SEO 相关配置都集中在 `config/` 目录下，开发者只需要修改两个配置文件即可完成整个网站的 SEO 设置。

## 📁 配置文件结构

```
📁 SEO 配置架构
├── types/
│   └── seo.types.ts      # 🔧 类型定义（无需修改）
├── config/
│   ├── seo.config.ts     # 🔥 站点级配置（必须修改）
│   └── pages.config.ts   # 🔥 页面级配置（经常修改）
├── lib/
│   └── metadata.ts       # ✅ 自动读取配置（无需修改）
├── app/
│   ├── sitemap.ts        # ✅ 自动生成（无需修改）
│   └── robots.ts         # ✅ 自动生成（无需修改）
└── docs/
    └── SEO_GUIDE.md      # 📖 使用指南
```

## 🔧 配置文件详细说明

### 📊 两个配置文件的区别

| 配置文件              | 功能定位       | 主要内容         | 修改频率     | 影响范围     |
| --------------------- | -------------- | ---------------- | ------------ | ------------ |
| **`seo.config.ts`**   | **站点级配置** | 整个网站基础信息 | **一次配置** | **全站生效** |
| **`pages.config.ts`** | **页面级配置** | 每个页面具体内容 | **经常修改** | **单页面**   |

#### 🏢 `config/seo.config.ts` - 站点级配置

**功能**：整个网站的基础设置，一次配置全站生效

**包含内容**：

- 🌐 **域名和 URL**：`site.url`, `site.domain`
- 👤 **作者信息**：`site.author`, `site.email`
- 📱 **社交账号**：`social.twitter`, `social.github`
- 🎯 **默认 SEO**：标题模板、默认描述、关键词
- 🤖 **搜索引擎**：robots 配置、sitemap 设置
- 🖼️ **分享优化**：Open Graph、Twitter Card 配置
- 🌍 **多语言**：locale 映射、hreflang 设置

#### 📄 `config/pages.config.ts` - 页面级配置

**功能**：每个页面的具体 SEO 信息和路由管理

**包含内容**：

- 🛣️ **路由设置**：每个页面的 URL 路径
- 🔘 **功能开关**：`enabled` 控制页面启用/禁用
- 🏷️ **页面 SEO**：每个页面的标题、描述、关键词
- 🌐 **多语言内容**：中英文版本的不同 metadata

## 🛠️ 使用步骤

### 1. 配置站点信息 (`config/seo.config.ts`)

这是**最重要的配置文件**，包含整个网站的基础信息：

```typescript
export const seoConfig: SeoConfig = {
  site: {
    name: "你的网站名称", // 🔥 必改：网站名称
    url: "https://your-domain.com", // 🔥 必改：网站域名
    domain: "your-domain.com", // 🔥 必改：域名
    author: "你的名字", // 🔥 必改：作者
    email: "contact@your-domain.com", // 📧 联系邮箱
    social: {
      twitter: "@your_twitter", // 🔥 必改：Twitter 账号
      github: "https://github.com/you", // GitHub 链接
      linkedin: "https://linkedin.com/in/you", // LinkedIn 链接
    },
  },

  defaults: {
    titleTemplate: "%s | 你的网站名称", // 🔥 必改：标题模板
    defaultTitle: "你的网站 - 简短描述", // 🔥 必改：默认标题
    description: "你的网站描述...", // 🔥 必改：默认描述
    keywords: [
      // 🔥 必改：关键词
      "你的关键词1",
      "你的关键词2",
      // ...更多关键词
    ],
  },

  // 其他配置（robots、sitemap、openGraph等）通常不需要修改
};
```

### 2. 配置页面信息 (`config/pages.config.ts`)

为每个页面配置独立的 SEO 信息：

```typescript
export const pagesConfig: Record<PageType, PageConfig> = {
  home: {
    route: "/", // 🛣️ 路由路径
    enabled: true, // 🔘 是否启用该页面
    seo: {
      zh: {
        title: "首页标题", // 🔥 必改：中文标题
        description: "首页描述...", // 🔥 必改：中文描述
        keywords: ["关键词1", "关键词2"], // 🔥 必改：中文关键词
      },
      en: {
        title: "Home Page Title", // 🔥 必改：英文标题
        description: "Home page description...", // 🔥 必改：英文描述
        keywords: ["keyword1", "keyword2"], // 🔥 必改：英文关键词
      },
    },
  },

  // 添加新页面示例
  newPage: {
    route: "/new-page",
    enabled: true, // 设为 false 可禁用页面
    seo: {
      zh: {
        title: "新页面标题",
        description: "新页面描述...",
        keywords: ["新页面", "关键词"],
      },
      en: {
        title: "New Page Title",
        description: "New page description...",
        keywords: ["new page", "keywords"],
      },
    },
  },
};
```

### 3. 环境变量配置

在 `.env.local` 中设置：

```bash
# 🔥 生产环境必须配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## ✅ Next.js 15 SEO 最佳实践检查清单

本脚手架已经实现了所有 Next.js 15 SEO 最佳实践：

### 🎯 基础 SEO

- ✅ **动态 Metadata API** - 使用 Next.js 15 最新的 metadata API
- ✅ **SSG 静态生成** - 所有页面预渲染，SEO 友好
- ✅ **TypeScript 类型安全** - 完整的类型定义
- ✅ **响应式 Viewport** - 移动端优化

### 🌐 多语言 SEO

- ✅ **hreflang 属性** - 语言版本关联
- ✅ **规范化 URL** - canonical 链接
- ✅ **语言特定域名** - 支持不同语言的 URL 结构
- ✅ **本地化内容** - 每种语言独立的 metadata

### 📊 结构化数据

- ✅ **完整的 meta 标签** - title, description, keywords 等
- ✅ **Open Graph** - Facebook/LinkedIn 分享优化
- ✅ **Twitter Card** - Twitter 分享优化
- ✅ **作者信息** - creator, publisher 标签
- ✅ **分类标签** - category, classification

### 🤖 搜索引擎优化

- ✅ **Robots.txt** - 搜索引擎爬虫指令
- ✅ **Sitemap.xml** - 站点地图自动生成
- ✅ **Google Bot 优化** - 特定的 googlebot 配置
- ✅ **索引控制** - index/noindex 控制

### 🚀 性能优化

- ✅ **静态生成** - 构建时预渲染
- ✅ **动态导入** - 代码分割优化
- ✅ **图片优化** - Next.js 图片组件
- ✅ **缓存策略** - 合理的缓存配置

### 📱 现代 Web 标准

- ✅ **PWA 支持** - 渐进式 Web 应用
- ✅ **Core Web Vitals** - 性能指标优化
- ✅ **Accessibility** - 无障碍访问
- ✅ **Schema.org** - 结构化数据标准

## 🚀 快速开始

1. **克隆项目**
2. **修改 `config/seo.config.ts`** - 更新站点信息
3. **修改 `config/pages.config.ts`** - 更新页面信息
4. **设置环境变量** - 配置 `NEXT_PUBLIC_SITE_URL`
5. **构建部署** - `pnpm build`

## 🔧 高级配置

### 添加新页面

1. **在 `types/seo.types.ts` 中添加页面类型**：

   ```typescript
   export type PageType = "home" | "theme" | "counter" | "newPage";
   ```

2. **在 `config/pages.config.ts` 中添加页面配置**：

   ```typescript
   newPage: {
     route: "/new-page",
     enabled: true,
     seo: { /* 中英文SEO配置 */ }
   }
   ```

3. **创建页面文件**：
   - `app/[lang]/new-page/page.tsx`
   - `app/[lang]/new-page/layout.tsx`（参考现有页面）

### 禁用页面

在 `pages.config.ts` 中设置：

```typescript
somePage: {
  enabled: false,  // 禁用该页面
  // ...其他配置
}
```

### 自定义 OG 图片

1. **静态图片**：

   ```typescript
   // 在 seo.config.ts 中
   openGraph: {
     enableDynamicImages: false,  // 禁用动态图片
   }
   ```

   然后在 `public/` 目录放置 `og-default.png`

2. **动态图片**：实现 `/api/og` 端点生成动态图片

### 添加更多语言

1. **在 `i18n/settings.ts` 中添加新语言**
2. **在 `config/seo.config.ts` 中添加 locale 配置**
3. **在 `config/pages.config.ts` 中为每个页面添加新语言的 SEO 数据**

## 📈 SEO 效果验证

使用以下工具验证 SEO 配置：

- **Google Search Console** - 索引状态
- **PageSpeed Insights** - 性能评分
- **Schema Markup Validator** - 结构化数据验证
- **Facebook Debugger** - Open Graph 验证
- **Twitter Card Validator** - Twitter Card 验证

## 🎯 最佳实践建议

1. **标题优化**：每个页面的标题都应该独特且描述性强
2. **描述优化**：控制在 150-160 字符内
3. **关键词策略**：每个页面 5-10 个相关关键词
4. **内容质量**：高质量、原创的内容最重要
5. **加载速度**：使用 SSG 确保最佳性能
6. **移动优先**：确保移动端体验优秀

## 🆘 常见问题

**Q: 修改配置后没有生效？**
A: 重新运行 `pnpm build` 重新生成静态文件

**Q: 如何验证 SEO 配置是否正确？**
A: 查看构建后的 `.next/server/app/` 目录中的 HTML 文件

**Q: 可以禁用某个页面吗？**
A: 在 `pages.config.ts` 中设置 `enabled: false`

**Q: 如何添加自定义 meta 标签？**
A: 在各页面的 `layout.tsx` 中使用 Next.js metadata API 添加

**Q: 类型定义在哪里？**
A: 所有类型定义在 `types/seo.types.ts` 中，通常不需要修改
