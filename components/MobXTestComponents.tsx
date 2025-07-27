import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";

// 计数器显示组件 - 只负责显示
export const CounterDisplay: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6 text-center">
      <h3 className="text-2xl font-bold text-card-foreground mb-4">
        📊 {t("counter.display.title")}
      </h3>
      <div className="text-6xl font-bold text-primary mb-4">
        {global.counter}
      </div>
      <p className="text-muted-foreground">
        {t("counter.display.description")}
      </p>
    </div>
  );
});

// 计数器控制组件 - 只负责操作
export const CounterControls: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6">
      <h3 className="text-lg font-bold text-card-foreground mb-4">
        🎮 {t("counter.controls.title")}
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => global.increment()}
          className="theme-button flex-1"
        >
          ➕ {t("counter.controls.increment")}
        </button>
        <button
          onClick={() => global.decrement()}
          className="theme-button flex-1"
        >
          ➖ {t("counter.controls.decrement")}
        </button>
        <button
          onClick={() => global.reset()}
          className="theme-button flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          🔄 {t("counter.controls.reset")}
        </button>
      </div>
    </div>
  );
});

// 计数器历史组件 - 显示操作历史
export const CounterHistory: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6">
      <h3 className="text-lg font-bold text-card-foreground mb-4">
        📜 {t("counter.history.title")}
      </h3>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {global.counterHistory
          .slice(-10)
          .reverse()
          .map((entry, index) => (
            <div
              key={`${entry.timestamp}-${index}`}
              className="flex justify-between items-center p-2 bg-muted/50 rounded text-sm"
            >
              <span className="text-muted-foreground">
                {new Date(entry.timestamp).toLocaleTimeString()}
              </span>
              <span className="font-medium text-card-foreground">
                {entry.action} → {entry.value}
              </span>
            </div>
          ))}
        {global.counterHistory.length === 0 && (
          <p className="text-muted-foreground text-center py-4">
            {t("counter.history.empty")}
          </p>
        )}
      </div>
    </div>
  );
});

// 实时统计组件 - 显示计算属性
export const CounterStats: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6">
      <h3 className="text-lg font-bold text-card-foreground mb-4">
        📈 {t("counter.stats.title")}
      </h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-muted/50 p-4 rounded">
          <div className="text-2xl font-bold text-primary">
            {global.counterStats.totalOperations}
          </div>
          <div className="text-xs text-muted-foreground">
            {t("counter.stats.totalOps")}
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded">
          <div className="text-2xl font-bold text-secondary">
            {global.counterStats.maxValue}
          </div>
          <div className="text-xs text-muted-foreground">
            {t("counter.stats.maxValue")}
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded">
          <div className="text-2xl font-bold text-accent">
            {global.counterStats.minValue}
          </div>
          <div className="text-xs text-muted-foreground">
            {t("counter.stats.minValue")}
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded">
          <div className="text-2xl font-bold text-ring">
            {global.counterStats.averageValue.toFixed(1)}
          </div>
          <div className="text-xs text-muted-foreground">
            {t("counter.stats.avgValue")}
          </div>
        </div>
      </div>
    </div>
  );
});

// 跨页面状态测试组件
export const CrossPageStateTest: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6">
      <h3 className="text-lg font-bold text-card-foreground mb-4">
        🔄 {t("counter.crossPage.title")}
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">
            {t("counter.crossPage.currentPage")}:
          </span>
          <span className="font-medium text-card-foreground">
            {global.currentPage}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">
            {t("counter.crossPage.pageChanges")}:
          </span>
          <span className="font-medium text-card-foreground">
            {global.pageHistory.length}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => global.setCurrentPage("home")}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              global.currentPage === "home"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {t("navigation.themeTest")}
          </button>
          <button
            onClick={() => global.setCurrentPage("counter")}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              global.currentPage === "counter"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {t("navigation.mobxTest")}
          </button>
        </div>
      </div>
    </div>
  );
});

// MobX 特性演示组件
export const MobXFeaturesDemo: FC = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="theme-card p-6">
      <h3 className="text-lg font-bold text-card-foreground mb-4">
        ⚡ {t("counter.mobx.title")}
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-muted-foreground">
            {t("counter.mobx.reactive")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-muted-foreground">
            {t("counter.mobx.computed")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-muted-foreground">
            {t("counter.mobx.persistent")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-muted-foreground">
            {t("counter.mobx.crossComponent")}
          </span>
        </div>
      </div>

      <div className="mt-4 p-4 bg-muted/50 rounded">
        <h4 className="font-medium text-card-foreground mb-2">
          {t("counter.mobx.testGuide.title")}
        </h4>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li>1. {t("counter.mobx.testGuide.step1")}</li>
          <li>2. {t("counter.mobx.testGuide.step2")}</li>
          <li>3. {t("counter.mobx.testGuide.step3")}</li>
          <li>4. {t("counter.mobx.testGuide.step4")}</li>
        </ol>
      </div>
    </div>
  );
});
