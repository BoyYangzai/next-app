"use client";

import { FC, useEffect, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { Navigation, LanguageSwitcher } from "@/components/ui";

interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterSite: string;
  canonical: string;
  alternateCount: number;
  robots: string;
}

const SeoTestPage: FC = () => {
  const { t } = useTranslation();
  const [metaData, setMetaData] = useState<MetaData>({
    title: "",
    description: "",
    keywords: "",
    ogTitle: "",
    ogDescription: "",
    ogUrl: "",
    twitterCard: "",
    twitterTitle: "",
    twitterSite: "",
    canonical: "",
    alternateCount: 0,
    robots: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof document !== "undefined") {
      const getMetaContent = (selector: string): string => {
        const element = document.querySelector(selector);
        return element?.getAttribute("content") || "N/A";
      };

      const getHref = (selector: string): string => {
        const element = document.querySelector(selector);
        return element?.getAttribute("href") || "N/A";
      };

      setMetaData({
        title: document.title,
        description: getMetaContent('meta[name="description"]'),
        keywords: getMetaContent('meta[name="keywords"]'),
        ogTitle: getMetaContent('meta[property="og:title"]'),
        ogDescription: getMetaContent('meta[property="og:description"]'),
        ogUrl: getMetaContent('meta[property="og:url"]'),
        twitterCard: getMetaContent('meta[name="twitter:card"]'),
        twitterTitle: getMetaContent('meta[name="twitter:title"]'),
        twitterSite: getMetaContent('meta[name="twitter:site"]'),
        canonical: getHref('link[rel="canonical"]'),
        alternateCount: document.querySelectorAll(
          'link[rel="alternate"][hreflang]'
        ).length,
        robots: getMetaContent('meta[name="robots"]'),
      });
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground animate-theme-transition">
        {/* 顶部导航栏 */}
        <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  📊 {t("seo.title")}
                </h1>
                <p className="text-muted-foreground">{t("seo.description")}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <LanguageSwitcher />
                <Navigation className="flex-shrink-0" />
              </div>
            </div>
          </div>
        </header>

        {/* 加载状态 */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-xl text-muted-foreground">Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background text-foreground animate-theme-transition">
      {/* 顶部导航栏 */}
      <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 左侧品牌区域 - 简化设计 */}
            <div className="flex items-center gap-3">
              <div className="text-2xl lg:text-3xl">📊</div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-foreground">
                  {t("seo.title")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  搜索引擎优化验证
                </p>
              </div>
            </div>

            {/* 右侧操作区域 */}
            <div className="flex items-center gap-3 lg:gap-4">
              <LanguageSwitcher />
              <div className="hidden lg:block">
                <Navigation variant="compact" />
              </div>
            </div>
          </div>

          {/* 移动端导航 */}
          <div className="lg:hidden pb-4">
            <Navigation />
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* SEO 功能测试区域 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meta 标签测试 */}
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                🏷️ {t("seo.metaTags")}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Title:</strong>
                  <div className="text-muted-foreground break-all">
                    {metaData.title}
                  </div>
                </div>
                <div>
                  <strong>Description:</strong>
                  <div className="text-muted-foreground">
                    {metaData.description}
                  </div>
                </div>
                <div>
                  <strong>Keywords:</strong>
                  <div className="text-muted-foreground">
                    {metaData.keywords}
                  </div>
                </div>
              </div>
            </div>

            {/* Open Graph 测试 */}
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                📱 Open Graph
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>og:title:</strong>
                  <div className="text-muted-foreground break-all">
                    {metaData.ogTitle}
                  </div>
                </div>
                <div>
                  <strong>og:description:</strong>
                  <div className="text-muted-foreground">
                    {metaData.ogDescription}
                  </div>
                </div>
                <div>
                  <strong>og:url:</strong>
                  <div className="text-muted-foreground break-all">
                    {metaData.ogUrl}
                  </div>
                </div>
              </div>
            </div>

            {/* Twitter Card 测试 */}
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                🐦 Twitter Card
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>twitter:card:</strong>
                  <div className="text-muted-foreground">
                    {metaData.twitterCard}
                  </div>
                </div>
                <div>
                  <strong>twitter:title:</strong>
                  <div className="text-muted-foreground break-all">
                    {metaData.twitterTitle}
                  </div>
                </div>
                <div>
                  <strong>twitter:site:</strong>
                  <div className="text-muted-foreground">
                    {metaData.twitterSite}
                  </div>
                </div>
              </div>
            </div>

            {/* 结构化数据测试 */}
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                🔗 {t("seo.structuredData")}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Canonical URL:</strong>
                  <div className="text-muted-foreground break-all">
                    {metaData.canonical}
                  </div>
                </div>
                <div>
                  <strong>Language Alternates:</strong>
                  <div className="text-muted-foreground">
                    {metaData.alternateCount} found
                  </div>
                </div>
                <div>
                  <strong>Robots:</strong>
                  <div className="text-muted-foreground">{metaData.robots}</div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO 工具链接 */}
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              🛠️ {t("seo.tools")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">PageSpeed Insights</div>
                <div className="text-sm text-muted-foreground">
                  Google 性能测试
                </div>
              </a>

              <a
                href={`https://validator.w3.org/nu/?doc=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">HTML Validator</div>
                <div className="text-sm text-muted-foreground">
                  W3C 标记验证
                </div>
              </a>

              <a
                href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Facebook Debugger</div>
                <div className="text-sm text-muted-foreground">
                  Open Graph 测试
                </div>
              </a>

              <a
                href={`https://cards-dev.twitter.com/validator`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Twitter Card Validator</div>
                <div className="text-sm text-muted-foreground">
                  Twitter 卡片验证
                </div>
              </a>

              <a
                href={`https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Rich Results Test</div>
                <div className="text-sm text-muted-foreground">
                  Google 富媒体测试
                </div>
              </a>

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Sitemap.xml</div>
                <div className="text-sm text-muted-foreground">站点地图</div>
              </a>

              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-medium">Robots.txt</div>
                <div className="text-sm text-muted-foreground">爬虫指令</div>
              </a>
            </div>
          </div>

          {/* 配置说明 */}
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              📖 {t("seo.configuration")}
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <strong>📊 站点配置：</strong>
                <code className="ml-2 px-2 py-1 bg-muted rounded">
                  config/seo.config.ts
                </code>
              </div>
              <div>
                <strong>📄 页面配置：</strong>
                <code className="ml-2 px-2 py-1 bg-muted rounded">
                  config/pages.config.ts
                </code>
              </div>
              <div>
                <strong>📚 完整指南：</strong>
                <a
                  href="https://github.com/BoyYangzai/next-app/blob/master/docs/SEO_GUIDE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary hover:underline"
                >
                  SEO_GUIDE.md
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeoTestPage;
