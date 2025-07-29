"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "@/i18n/client";
import {
  Navigation,
  LanguageSwitcher,
  ErrorTrigger,
  SimpleErrorTrigger,
} from "@/components/ui";
import ErrorBoundary from "@/components/ErrorBoundary";

const ErrorBoundaryPage: FC = observer(() => {
  const { t } = useTranslation("error");
  return (
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
                  {t("page.headerTitle")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  {t("page.headerSubtitle")}
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
              {t("page.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("page.subtitle")}
            </p>
          </section>

          {/* 基本错误边界演示 */}
          <section className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("page.basicErrorCapture")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ErrorBoundary>
                <ErrorTrigger />
              </ErrorBoundary>

              <div className="theme-card p-6">
                <h4 className="text-lg font-semibold text-card-foreground mb-4">
                  {t("page.functionDescription")}
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t("page.description.intro")}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>{t("page.description.captureErrors")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>{t("page.description.logErrors")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>{t("page.description.fallbackUI")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>{t("page.description.retryMechanism")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 嵌套错误边界演示 */}
          <section className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("page.nestedErrorBoundary")}
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {t("page.description.nestedDemo")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ErrorBoundary>
                  <div className="theme-card p-4 min-h-[200px]">
                    <h4 className="font-semibold mb-3 text-center">
                      {t("page.areaA")}
                    </h4>
                    <SimpleErrorTrigger areaName={t("page.areaA")} />
                  </div>
                </ErrorBoundary>

                <ErrorBoundary>
                  <div className="theme-card p-4 min-h-[200px]">
                    <h4 className="font-semibold mb-3 text-center">
                      {t("page.areaB")}
                    </h4>
                    <SimpleErrorTrigger areaName={t("page.areaB")} />
                  </div>
                </ErrorBoundary>

                <ErrorBoundary>
                  <div className="theme-card p-4 min-h-[200px]">
                    <h4 className="font-semibold mb-3 text-center">
                      {t("page.areaC")}
                    </h4>
                    <SimpleErrorTrigger areaName={t("page.areaC")} />
                  </div>
                </ErrorBoundary>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("page.description.isolatedError")}
              </p>
            </div>
          </section>

          {/* 最佳实践说明 */}
          <section className="theme-card p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              {t("page.bestPractices")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-card-foreground mb-3">
                  {t("page.applicableScenarios")}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t("page.scenarios.thirdParty")}</li>
                  <li>{t("page.scenarios.complexModules")}</li>
                  <li>{t("page.scenarios.businessProcess")}</li>
                  <li>{t("page.scenarios.productionDegradation")}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground mb-3">
                  {t("page.uncaughtErrors")}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t("page.uncaught.eventHandlers")}</li>
                  <li>{t("page.uncaught.asyncCode")}</li>
                  <li>{t("page.uncaught.ssrErrors")}</li>
                  <li>{t("page.uncaught.boundaryErrors")}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
});

export default ErrorBoundaryPage;
