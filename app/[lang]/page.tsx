"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useLang } from "@/i18n/i18n-context";
import { Navigation, LanguageSwitcher, ErrorTrigger } from "@/components/ui";
import ErrorBoundary from "@/components/ErrorBoundary";

const HomePage: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation("home");
  const { t: tTheme } = useTranslation("theme");
  const lang = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground animate-theme-transition">
      {/* 顶部导航栏 */}
      <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 左侧品牌区域 - 简化设计 */}
            <div className="flex items-center gap-3">
              <div className="text-2xl lg:text-3xl">🚀</div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-foreground">
                  {t("app.title")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  {t("app.subtitle")}
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
          {/* 欢迎区域 */}
          <section className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                {t("title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{t("technologies.nextjs")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>{t("technologies.tailwind")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>{t("technologies.mobx")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>{t("technologies.typescript")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{t("technologies.i18n")}</span>
              </div>
            </div>
          </section>

          {/* 功能卡片 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 主题测试卡片 */}
            <Link href={`/${lang}/theme`} className="group">
              <div className="theme-card p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🎨</div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {t("cards.theme.title")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("cards.theme.subtitle")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {t("cards.theme.description")}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-card-foreground">
                        {t("cards.theme.features.title")}
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.theme.features.items.0")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.theme.features.items.1")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.theme.features.items.2")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.theme.features.items.3")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {t("cards.theme.action")}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* MobX 状态管理卡片 */}
            <Link href={`/${lang}/counter`} className="group">
              <div className="theme-card p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🔢</div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {t("cards.state.title")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("cards.state.subtitle")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {t("cards.state.description")}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-card-foreground">
                        {t("cards.state.features.title")}
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.state.features.items.0")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.state.features.items.1")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.state.features.items.2")}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>{t("cards.state.features.items.3")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {t("cards.state.action")}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* ErrorBoundary 测试区域 */}
          <section className="theme-card p-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                🚨 {t("cards.errorBoundary.title")}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("cards.errorBoundary.description")}，
                {t("cards.errorBoundary.action")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ErrorBoundary>
                <ErrorTrigger />
              </ErrorBoundary>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  {t("cards.errorBoundary.learnMore")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("cards.errorBoundary.learnMoreDesc")}
                </p>
                <Link
                  href={`/${lang}/error-boundary`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  {t("cards.errorBoundary.viewDemo")}
                </Link>
              </div>
            </div>
          </section>

          {/* 技术架构说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t("architecture.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("architecture.features.tailwind.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.features.tailwind.description")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🔄</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("architecture.features.mobx.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.features.mobx.description")}
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🌍</div>
                <h4 className="font-semibold text-card-foreground">
                  {t("architecture.features.i18n.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.features.i18n.description")}
                </p>
              </div>
            </div>
          </section>

          {/* 项目特点 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t("highlights.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  {t("highlights.development.title")}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>{t("highlights.development.items.0")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>{t("highlights.development.items.1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>{t("highlights.development.items.2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>{t("highlights.development.items.3")}</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  {t("highlights.performance.title")}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>{t("highlights.performance.items.0")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>{t("highlights.performance.items.1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>{t("highlights.performance.items.2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>{t("highlights.performance.items.3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 底部状态栏 - 展示全局状态同步 */}
      <footer className="theme-card border-t mt-12 bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>
                  {t("footer.currentState")}:{" "}
                  <strong className="text-card-foreground">
                    {tTheme(global.currentTheme.nameKey)}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>
                  {t("footer.counter")}:{" "}
                  <strong className="text-card-foreground">
                    {global.stats.counterValue}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>
                  {t("footer.themeSwitch")}:{" "}
                  <strong className="text-card-foreground">
                    {global.stats.themeChanges} {t("footer.times")}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ring rounded-full"></div>
                <span>
                  {t("language.switch")}:{" "}
                  <strong className="text-card-foreground">
                    {global.stats.languageChanges} {t("footer.times")}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  {t("footer.pageNavigation")}:{" "}
                  <strong className="text-card-foreground">
                    {global.stats.pageNavigations} {t("footer.times")}
                  </strong>
                </span>
              </div>
            </div>
            <div className="text-muted-foreground">
              <span className="flex items-center gap-2">
                <span>⚡</span>
                <span>{t("footer.techStack")}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default HomePage;
