import { Languages } from "@/i18n/settings";
import { PageType, PageConfig } from "@/types/seo.types";

// 🎯 页面级 SEO 配置 - 开发者可以在这里添加/修改页面
export const pagesConfig: Record<PageType, PageConfig> = {
  // 主页配置
  home: {
    route: "/",
    enabled: true,
    seo: {
      zh: {
        title: "功能测试实验室 - 现代前端技术演示平台",
        description:
          "基于 Next.js 15 + Tailwind CSS 4.x + MobX 的现代前端技术测试平台，专注于最新技术的实践与验证",
        keywords: [
          "Next.js 15",
          "Tailwind CSS 4.x",
          "MobX",
          "TypeScript",
          "前端技术",
          "现代化",
          "演示平台",
        ],
      },
      en: {
        title: "Feature Testing Lab - Modern Frontend Technology Platform",
        description:
          "A modern frontend technology testing platform based on Next.js 15 + Tailwind CSS 4.x + MobX, focusing on the practice and verification of the latest technologies",
        keywords: [
          "Next.js 15",
          "Tailwind CSS 4.x",
          "MobX",
          "TypeScript",
          "Frontend Technology",
          "Modern",
          "Demo Platform",
        ],
      },
    },
  },

  // 主题页面配置
  theme: {
    route: "/theme",
    enabled: true,
    seo: {
      zh: {
        title: "主题测试 - Tailwind CSS 4.x 多主题系统",
        description:
          "体验 Tailwind CSS 4.x 的多主题切换功能，支持 7 种精美主题，零闪烁切换，完美的用户体验",
        keywords: [
          "主题切换",
          "Tailwind CSS 4.x",
          "暗色模式",
          "CSS 变量",
          "响应式设计",
        ],
      },
      en: {
        title: "Theme Testing - Tailwind CSS 4.x Multi-Theme System",
        description:
          "Experience Tailwind CSS 4.x multi-theme switching functionality with 7 beautiful themes, zero-flicker switching, and perfect user experience",
        keywords: [
          "Theme Switch",
          "Tailwind CSS 4.x",
          "Dark Mode",
          "CSS Variables",
          "Responsive Design",
        ],
      },
    },
  },

  // 计数器页面配置
  counter: {
    route: "/counter",
    enabled: true,
    seo: {
      zh: {
        title: "MobX 状态管理测试 - 跨组件响应式状态管理",
        description:
          "通过多个独立组件验证 MobX 的跨组件响应式状态管理能力，包括计算属性、状态持久化和跨页面状态保持",
        keywords: [
          "MobX",
          "状态管理",
          "响应式",
          "计算属性",
          "状态持久化",
          "跨组件通信",
        ],
      },
      en: {
        title:
          "MobX State Management Testing - Cross-Component Reactive State Management",
        description:
          "Verify MobX's cross-component reactive state management capabilities through multiple independent components, including computed properties, state persistence, and cross-page state retention",
        keywords: [
          "MobX",
          "State Management",
          "Reactive",
          "Computed Properties",
          "State Persistence",
          "Cross-Component Communication",
        ],
      },
    },
  },
};

// 辅助函数：获取启用的页面
export function getEnabledPages(): PageType[] {
  return Object.entries(pagesConfig)
    .filter(([_, config]) => config.enabled)
    .map(([page]) => page as PageType);
}

// 辅助函数：获取页面配置
export function getPageConfig(page: PageType): PageConfig {
  return pagesConfig[page];
}

// 辅助函数：获取页面 SEO 数据
export function getPageSeo(page: PageType, lang: Languages) {
  return pagesConfig[page].seo[lang];
}

// 辅助函数：获取所有路由
export function getAllRoutes(
  lang: Languages,
): Array<{ page: PageType; url: string }> {
  return getEnabledPages().map((page) => ({
    page,
    url: `/${lang}${pagesConfig[page].route === "/" ? "" : pagesConfig[page].route}`,
  }));
}
