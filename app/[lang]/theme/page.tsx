"use client";

import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import { useTheme } from "next-themes";
import { ThemeSelector } from "@/components/theme";
import { Navigation, LanguageSwitcher } from "@/components/ui";

const ThemePage: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation("theme");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 确保组件在客户端挂载后才渲染主题相关内容
  useEffect(() => {
    setMounted(true);
  }, []);

  // 主题配置（与ThemeSelector保持一致）
  const THEME_CONFIG = {
    light: { name: "themes.light.name" },
    dark: { name: "themes.dark.name" },
    blue: { name: "themes.blue.name" },
    green: { name: "themes.green.name" },
    purple: { name: "themes.purple.name" },
    orange: { name: "themes.orange.name" },
    red: { name: "themes.red.name" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground animate-theme-transition">
      {/* 顶部导航栏 */}
      <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 左侧品牌区域 - 简化设计 */}
            <div className="flex items-center gap-3">
              <div className="text-2xl lg:text-3xl">🎨</div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-foreground">
                  {t("title")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  {t("headerSubtitle")}
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
        <div className="space-y-10">
          {/* 功能: Tailwind 主题切换测试 */}
          <section className="theme-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                🎨 {t("title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <ThemeSelector />
          </section>

          {/* 主题统计 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              📊 {t("stats.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-primary mb-1">
                  {mounted &&
                  theme &&
                  THEME_CONFIG[theme as keyof typeof THEME_CONFIG]
                    ? t(THEME_CONFIG[theme as keyof typeof THEME_CONFIG].name)
                    : t("loading.loadingText")}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("stats.currentTheme")}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-accent mb-1">
                  {global.stats.themeChanges}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("stats.switchCount")}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {global.stats.availableThemes}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("stats.availableThemes")}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-ring mb-1">4.x</div>
                <p className="text-sm text-muted-foreground">
                  {t("stats.currentVersion")}
                </p>
              </div>
            </div>
          </section>

          {/* 主题特性说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              ✨ {t("features.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.tailwind4")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description1")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🎨</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.cssVariables")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description2")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">💾</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.localStorage")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description3")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🔄</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.smoothTransition")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description4")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">📱</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.responsive")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description5")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🛠️</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("features.maintainable")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("features.description6")}
                </p>
              </div>
            </div>
          </section>

          {/* 使用说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              📖 {t("guide.title")}
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    🎯 {t("guide.howToSwitch")}
                  </h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">1.</span>
                      <span>{t("guide.step1")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">2.</span>
                      <span>{t("guide.step2")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">3.</span>
                      <span>{t("guide.step3")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">4.</span>
                      <span>{t("guide.step4")}</span>
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    ⚡ {t("guide.techFeatures")}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{t("guide.feature1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{t("guide.feature2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{t("guide.feature3")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{t("guide.feature4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
});

export default ThemePage;
