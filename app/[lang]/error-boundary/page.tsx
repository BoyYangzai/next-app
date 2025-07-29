"use client";

import { FC, use } from "react";
import { observer } from "mobx-react-lite";
import {
  Navigation,
  LanguageSwitcher,
  ErrorTrigger,
  SimpleErrorTrigger,
} from "@/components/ui";
import ErrorBoundary from "@/components/ErrorBoundary";
import Providers from "@/components/providers/Providers";
import { Languages } from "@/i18n/settings";

interface ErrorBoundaryPageProps {
  params: Promise<{ lang: Languages }>;
}

const ErrorBoundaryPage: FC<ErrorBoundaryPageProps> = observer(({ params }) => {
  const { lang } = use(params);
  return (
    <Providers lang={lang}>
      <div className="min-h-screen bg-background text-foreground animate-theme-transition">
        {/* 顶部导航栏 */}
        <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* 左侧品牌区域 */}
              <div className="flex items-center gap-3">
                <div className="text-2xl lg:text-3xl">🚨</div>
                <div className="hidden sm:block">
                  <h1 className="text-lg lg:text-xl font-bold text-foreground">
                    错误边界测试
                  </h1>
                  <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                    ErrorBoundary 错误处理演示
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
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-8">
            {/* 页面标题和描述 */}
            <section className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                ErrorBoundary 错误边界测试
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                演示 React ErrorBoundary
                如何优雅地捕获和处理组件错误，提供用户友好的错误界面
              </p>
            </section>

            {/* 基本错误边界演示 */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                🔥 基本错误捕获
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ErrorBoundary>
                  <ErrorTrigger />
                </ErrorBoundary>

                <div className="theme-card p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">
                    📝 功能说明
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>ErrorBoundary 是 React 16 引入的错误处理机制：</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        <span>捕获子组件树中的 JavaScript 错误</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        <span>记录错误信息用于调试</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        <span>显示备用 UI 而不是崩溃整个应用</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        <span>提供错误重试机制</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 嵌套错误边界演示 */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                🏗️ 嵌套错误边界
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  演示嵌套的 ErrorBoundary，展示错误隔离能力：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ErrorBoundary>
                    <div className="theme-card p-4 min-h-[200px]">
                      <h4 className="font-semibold mb-3 text-center">区域 A</h4>
                      <SimpleErrorTrigger areaName="区域 A" />
                    </div>
                  </ErrorBoundary>

                  <ErrorBoundary>
                    <div className="theme-card p-4 min-h-[200px]">
                      <h4 className="font-semibold mb-3 text-center">区域 B</h4>
                      <SimpleErrorTrigger areaName="区域 B" />
                    </div>
                  </ErrorBoundary>

                  <ErrorBoundary>
                    <div className="theme-card p-4 min-h-[200px]">
                      <h4 className="font-semibold mb-3 text-center">区域 C</h4>
                      <SimpleErrorTrigger areaName="区域 C" />
                    </div>
                  </ErrorBoundary>
                </div>
                <p className="text-sm text-muted-foreground">
                  ⭐ 触发任意区域的错误，其他区域不受影响
                </p>
              </div>
            </section>

            {/* 最佳实践说明 */}
            <section className="theme-card p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                💡 ErrorBoundary 最佳实践
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-card-foreground mb-3">
                    ✅ 适用场景
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 第三方组件包裹</li>
                    <li>• 复杂功能模块隔离</li>
                    <li>• 关键业务流程保护</li>
                    <li>• 生产环境错误降级</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-3">
                    ❌ 无法捕获的错误
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 事件处理器中的错误</li>
                    <li>• 异步代码 (setTimeout, Promise)</li>
                    <li>• SSR 渲染期间的错误</li>
                    <li>• ErrorBoundary 自身的错误</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Providers>
  );
});

export default ErrorBoundaryPage;
