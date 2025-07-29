"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import { ThemeSelector } from "@/components/theme";
import { Navigation, LanguageSwitcher } from "@/components/ui";

const ThemePage: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

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
                  {t("theme.title")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  Tailwind CSS 4.x 主题系统
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
                🎨 {t("theme.title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {t("theme.subtitle")}
              </p>
            </div>

            <ThemeSelector />
          </section>

          {/* 主题统计 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              📊 {t("theme.stats.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-primary mb-1">
                  {global.stats.currentTheme}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("theme.stats.currentTheme")}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-accent mb-1">
                  {global.stats.themeChanges}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("theme.stats.switchCount")}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {global.stats.availableThemes}
                </div>
                <p className="text-sm text-muted-foreground">可用主题</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-ring mb-1">
                  {global.stats.currentTheme}
                </div>
                <p className="text-sm text-muted-foreground">当前主题</p>
              </div>
            </div>
          </section>

          {/* 主题特性说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              ✨ {t("theme.features.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.tailwind4")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  基于 Tailwind CSS 4.x 的 CSS-First 配置，支持动态主题切换
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🎨</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.cssVariables")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  使用原生 CSS 变量，支持平滑的颜色过渡动画
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">💾</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.localStorage")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  主题选择自动保存到本地存储，页面刷新后恢复
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🔄</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.smoothTransition")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  所有颜色变化都有平滑的过渡效果，提升用户体验
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">📱</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.responsive")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  完全响应式设计，在所有设备上都有完美的显示效果
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🛠️</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("theme.features.maintainable")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  易于维护和扩展，支持添加自定义主题色彩
                </p>
              </div>
            </div>
          </section>

          {/* 使用说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              📖 使用指南
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    🎯 如何切换主题：
                  </h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">1.</span>
                      <span>点击上方的主题色彩选择器</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">2.</span>
                      <span>观察页面颜色的平滑过渡变化</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">3.</span>
                      <span>主题选择会自动保存</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">4.</span>
                      <span>刷新页面后主题设置保持不变</span>
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    ⚡ 技术特点：
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>基于 next-themes 的专业实现</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>零闪烁主题切换</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>完美的 SSR 兼容性</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>支持自定义主题扩展</span>
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
