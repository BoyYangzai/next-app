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
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground animate-theme-transition">
      {/* 顶部导航栏 */}
      <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                🔢 {t("counter.title")}
              </h1>
              <p className="text-muted-foreground">{t("counter.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <LanguageSwitcher />
              <Navigation className="flex-shrink-0" />
            </div>
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
                🔢 {t("counter.title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {t("counter.subtitle")}
              </p>
            </div>

            {/* 主要计数器显示 - 独立组件 */}
            <CounterDisplay />

            {/* 控制面板和跨页面测试 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CounterControls />
              <CrossPageStateTest />
            </div>

            {/* 统计和历史 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CounterStats />
              <CounterHistory />
            </div>

            {/* MobX 特性说明 */}
            <MobXFeaturesDemo />

            {/* 测试说明 */}
            <div className="theme-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                🧪 MobX 跨组件测试验证
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    ✅ 已验证的 MobX 特性:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>多个组件使用 observer() 包裹</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>计数器显示与控制完全分离</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>状态变化自动同步到所有组件</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>计算属性实时更新统计数据</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>跨页面状态保持</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    🔬 测试方法:
                  </h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">1.</span>
                      <span>点击增加/减少按钮，观察所有组件同步更新</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">2.</span>
                      <span>切换到主题页面，再返回，状态依然保持</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">3.</span>
                      <span>刷新页面，状态从 localStorage 恢复</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">4.</span>
                      <span>查看历史记录自动增长</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-primary">5.</span>
                      <span>观察统计数据实时计算</span>
                    </li>
                  </ol>
                </div>
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

export default CounterPage;
