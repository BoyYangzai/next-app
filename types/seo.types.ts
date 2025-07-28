import { Languages } from "@/i18n/settings";

// 页面类型
export type PageType = "home" | "theme" | "counter";

// SEO 基础配置接口
export interface SeoConfig {
  // 站点基础信息
  site: {
    name: string;
    url: string;
    domain: string;
    author: string;
    email?: string;
    social: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };

  // 默认 SEO 设置
  defaults: {
    titleTemplate: string; // 如: "%s | Site Name"
    defaultTitle: string;
    description: string;
    keywords: string[];
    category: string;
    classification: string;
    robots: {
      index: boolean;
      follow: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
        "max-video-preview": number;
        "max-image-preview": "none" | "standard" | "large";
        "max-snippet": number;
      };
    };
  };

  // Open Graph 默认配置
  openGraph: {
    type: string;
    imageWidth: number;
    imageHeight: number;
    enableDynamicImages: boolean; // 是否启用动态 OG 图片
  };

  // Twitter Card 配置
  twitter: {
    card: string;
    site?: string;
    creator?: string;
  };

  // Sitemap 配置
  sitemap: {
    changeFreq: {
      home: "weekly" | "daily" | "monthly" | "yearly";
      pages: "weekly" | "daily" | "monthly" | "yearly";
    };
    priority: {
      home: number;
      pages: number;
    };
  };

  // 多语言配置
  i18n: {
    locales: {
      [key in Languages]: {
        locale: string; // 如: zh_CN, en_US
        hreflang: string; // 如: zh-CN, en-US
      };
    };
  };
}

// 页面配置接口
export interface PageConfig {
  route: string; // 路由路径
  enabled: boolean; // 是否启用该页面
  seo: {
    [key in Languages]: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
}

// 页面 SEO 数据类型
export interface PageSeoData {
  title: string;
  description: string;
  keywords: string[];
}

// 路由信息类型
export interface RouteInfo {
  page: PageType;
  url: string;
}
