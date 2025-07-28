import { Languages } from "@/i18n/settings";
import { SeoConfig } from "@/types/seo.types";

// 🎯 站点级 SEO 配置 - 开发者只需要修改这个配置！
export const seoConfig: SeoConfig = {
  site: {
    name: "功能测试实验室",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    domain: "localhost:3000", // 生产环境改为实际域名
    author: "开发团队",
    email: "contact@example.com",
    social: {
      twitter: "@feature_testing_lab",
      github: "https://github.com/your-org/project",
      linkedin: "https://linkedin.com/company/your-company",
    },
  },

  defaults: {
    titleTemplate: "%s | 功能测试实验室",
    defaultTitle: "功能测试实验室 - 现代前端技术演示平台",
    description:
      "基于 Next.js 15 + Tailwind CSS 4.x + MobX 的现代前端技术测试平台",
    keywords: [
      "Next.js 15",
      "Tailwind CSS 4.x",
      "MobX",
      "TypeScript",
      "React",
      "前端开发",
      "脚手架",
      "模板项目",
    ],
    category: "Technology",
    classification: "Web Development",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },

  openGraph: {
    type: "website",
    imageWidth: 1200,
    imageHeight: 630,
    enableDynamicImages: true,
  },

  twitter: {
    card: "summary_large_image",
    site: "@feature_testing_lab",
    creator: "@feature_testing_lab",
  },

  sitemap: {
    changeFreq: {
      home: "weekly",
      pages: "monthly",
    },
    priority: {
      home: 1.0,
      pages: 0.8,
    },
  },

  i18n: {
    locales: {
      zh: {
        locale: "zh_CN",
        hreflang: "zh-CN",
      },
      en: {
        locale: "en_US",
        hreflang: "en-US",
      },
    },
  },
};

// 辅助函数：获取完整 URL
export function getFullUrl(path: string = ""): string {
  return `${seoConfig.site.url}${path}`;
}

// 辅助函数：获取 OG 图片 URL
export function getOgImageUrl(lang: Languages, page?: string): string {
  if (!seoConfig.openGraph.enableDynamicImages) {
    return `${seoConfig.site.url}/og-default.png`;
  }
  return `${seoConfig.site.url}/api/og?lang=${lang}&page=${page || "home"}`;
}

// 辅助函数：格式化标题
export function formatTitle(title: string): string {
  if (title === seoConfig.defaults.defaultTitle) {
    return title;
  }
  return seoConfig.defaults.titleTemplate.replace("%s", title);
}
