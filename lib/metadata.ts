import { Metadata } from "next";
import { Languages } from "@/i18n/settings";
import {
  seoConfig,
  getFullUrl,
  getOgImageUrl,
  formatTitle,
} from "@/config/seo.config";
import { getPageSeo } from "@/config/pages.config";
import { PageType } from "@/types/seo.types";

// 生成完整的 Next.js Metadata 对象
export function generateMetadata(lang: Languages, page?: PageType): Metadata {
  // 获取页面 SEO 数据，如果没有页面则使用默认配置
  const pageSeo = page ? getPageSeo(page, lang) : null;

  const title = pageSeo?.title || seoConfig.defaults.defaultTitle;
  const description = pageSeo?.description || seoConfig.defaults.description;
  const keywords = pageSeo?.keywords || seoConfig.defaults.keywords;

  // 构建完整的 URL
  const url = page ? getFullUrl(`/${lang}`) : getFullUrl(`/${lang}`);

  // 构建图片 URL
  const ogImage = getOgImageUrl(lang, page);

  return {
    title: formatTitle(title),
    description,
    keywords: keywords.join(", "),
    authors: [{ name: seoConfig.site.author }],
    creator: seoConfig.site.author,
    publisher: seoConfig.site.author,

    // Open Graph
    openGraph: {
      type: seoConfig.openGraph.type as "website",
      locale: seoConfig.i18n.locales[lang].locale,
      url,
      title,
      description,
      siteName: seoConfig.site.name,
      images: [
        {
          url: ogImage,
          width: seoConfig.openGraph.imageWidth,
          height: seoConfig.openGraph.imageHeight,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: seoConfig.twitter.card as "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site,
    },

    // 其他 meta 标签
    robots: seoConfig.defaults.robots,

    // 语言和地区设置
    alternates: {
      canonical: url,
      languages: Object.entries(seoConfig.i18n.locales).reduce(
        (acc, [langKey, localeConfig]) => {
          acc[localeConfig.hreflang] = getFullUrl(
            `/${langKey}${page ? "" : ""}`,
          );
          return acc;
        },
        {} as Record<string, string>,
      ),
    },

    // 其他有用的标签
    category: seoConfig.defaults.category,
    classification: seoConfig.defaults.classification,
    referrer: "origin-when-cross-origin",

    // 应用特定信息
    applicationName: seoConfig.site.name,
    generator: "Next.js",

    // 格式检测
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// 根据当前页面状态生成动态 metadata
export function generatePageMetadata(
  lang: Languages,
  pathname: string,
): Metadata {
  // 从路径名推断页面类型
  let page: PageType | undefined = undefined;

  if (pathname.includes("theme")) {
    page = "theme";
  } else if (pathname.includes("counter")) {
    page = "counter";
  } else if (pathname.includes("seo")) {
    page = "seo";
  } else {
    page = "home";
  }

  return generateMetadata(lang, page);
}

// 为特定路由生成 metadata 的辅助函数
export const metadataGenerators = {
  // 首页（功能概览）
  home: (lang: Languages) => generateMetadata(lang, "home"),

  // 主题页面
  theme: (lang: Languages) => generateMetadata(lang, "theme"),

  // 计数器/MobX 页面
  counter: (lang: Languages) => generateMetadata(lang, "counter"),

  // SEO 测试页面
  seo: (lang: Languages) => generateMetadata(lang, "seo"),

  // 根页面（站点级别）
  root: (lang: Languages) => generateMetadata(lang),
};

// 导出类型定义
export type { PageType } from "@/types/seo.types";
