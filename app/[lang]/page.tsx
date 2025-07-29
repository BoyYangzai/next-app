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
  const { t } = useTranslation();
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
                  现代前端技术栈演示
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
                功能测试实验室
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                基于 Next.js 15 + Tailwind CSS 4.x + MobX 的现代前端技术测试平台
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Next.js 15</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>Tailwind CSS 4.x</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>MobX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>国际化 (i18n)</span>
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
                        主题测试
                      </h3>
                      <p className="text-muted-foreground">
                        Tailwind CSS 4.x 主题切换
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      体验 Tailwind CSS 4.x 的多主题切换功能，支持 7
                      种精美主题，零闪烁切换。
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-card-foreground">
                        主要特性:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>7 种内置主题 + 自定义主题</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>CSS-First 配置方式</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>无闪烁主题切换动画</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>完整的设计令牌系统</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      点击体验 →
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
                        状态管理
                      </h3>
                      <p className="text-muted-foreground">
                        MobX 跨组件状态管理
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      通过多个独立组件验证 MobX 的跨组件响应式状态管理能力。
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-card-foreground">
                        测试功能:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>跨组件状态同步</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>计算属性实时更新</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>状态持久化到本地存储</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span>跨页面状态保持</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      点击测试 →
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
                🚨 ErrorBoundary 错误边界演示
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                演示 React ErrorBoundary
                如何优雅地捕获和处理组件错误，点击按钮触发错误或查看完整功能
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ErrorBoundary>
                <ErrorTrigger />
              </ErrorBoundary>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  📖 了解更多
                </h4>
                <p className="text-sm text-muted-foreground">
                  ErrorBoundary 是现代 React
                  应用中重要的错误处理机制，可以防止单个组件的错误影响整个应用。
                </p>
                <Link
                  href={`/${lang}/error-boundary`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  查看完整演示 →
                </Link>
              </div>
            </div>
          </section>

          {/* 技术架构说明 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              🏗️ 技术架构特色
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold text-card-foreground">
                  Tailwind CSS 4.x
                </h4>
                <p className="text-sm text-muted-foreground">
                  基于 Rust 引擎，构建速度提升 10 倍，支持 CSS-First 配置
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🔄</div>
                <h4 className="font-semibold text-card-foreground">
                  MobX 状态管理
                </h4>
                <p className="text-sm text-muted-foreground">
                  简单直观的响应式状态管理，自动依赖追踪，最小化重渲染
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🌍</div>
                <h4 className="font-semibold text-card-foreground">
                  完整国际化
                </h4>
                <p className="text-sm text-muted-foreground">
                  基于 i18next 的完整 i18n 方案，支持路径级语言切换
                </p>
              </div>
            </div>
          </section>

          {/* 项目特点 */}
          <section className="theme-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              ✨ 项目亮点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  🎯 开发体验优化
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>TypeScript 完整类型安全</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>统一的代码规范和格式化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>模块化组件架构设计</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                    <span>完整的开发工具链配置</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  🚀 性能与体验
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Next.js 15 App Router 最新特性</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>无闪烁主题切换动画</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>响应式设计完美适配</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>状态持久化与恢复机制</span>
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
                    {global.stats.currentTheme}
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
                  页面导航:{" "}
                  <strong className="text-card-foreground">
                    {global.stats.pageNavigations} 次
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
