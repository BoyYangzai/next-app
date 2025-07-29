"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import { Navigation, LanguageSwitcher } from "@/components/ui";
import {
  CounterDisplay,
  CounterControls,
  CounterHistory,
  CounterStats,
  CrossPageStateTest,
  MobXFeaturesDemo,
} from "@/components/counter";

const CounterPage: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation("counter");

  return (
    <div className="min-h-screen bg-background text-foreground animate-theme-transition">
      {/* 顶部导航栏 */}
      <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 左侧品牌区域 - 简化设计 */}
            <div className="flex items-center gap-3">
              <div className="text-2xl lg:text-3xl">🔢</div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-foreground">
                  {t("title")}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  {t("subtitle")}
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
          {/* 功能: MobX 跨组件状态管理测试 */}
          <section className="space-y-8">
            {/* 页面标题 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                🔢 {t("title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </div>

            {/* 计数器显示组件 */}
            <div className="flex justify-center">
              <CounterDisplay />
            </div>

            {/* 主要测试区域 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 左侧：控制和历史 */}
              <div className="space-y-6">
                <CounterControls />
                <CounterHistory />
              </div>

              {/* 右侧：统计和状态测试 */}
              <div className="space-y-6">
                <CounterStats />
                <CrossPageStateTest />
              </div>
            </div>

            {/* MobX 特性展示 */}
            <MobXFeaturesDemo />
          </section>
        </div>
      </main>
    </div>
  );
});

export default CounterPage;
