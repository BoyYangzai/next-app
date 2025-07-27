import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";

interface CounterProps {}

const Counter: FC<CounterProps> = observer(() => {
  const { global } = useStore();
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* 标题部分 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          🔢 {t("counter.title")}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t("counter.subtitle")}
        </p>
      </div>

      {/* 计数器显示 */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4">
          <span className="text-muted-foreground font-medium">
            {t("counter.currentValue")}:
          </span>
          <div className="text-6xl font-bold text-primary bg-primary/10 px-8 py-4 rounded-2xl border-2 border-primary/20">
            {global.counter}
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={global.decrement}
          className="theme-button bg-red-500 text-white hover:bg-red-600 px-8 py-3 text-lg font-semibold"
          type="button"
        >
          ➖ {t("counter.decrement")}
        </button>

        <button
          onClick={global.increment}
          className="theme-button bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg font-semibold"
          type="button"
        >
          ➕ {t("counter.increment")}
        </button>

        <button
          onClick={global.reset}
          className="theme-button bg-gray-500 text-white hover:bg-gray-600 px-8 py-3 text-lg font-semibold"
          type="button"
        >
          🔄 {t("counter.reset")}
        </button>
      </div>

      {/* 快速操作 */}
      <div className="theme-card p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4 text-center">
          ⚡ {t("counter.quickActions")}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[+10, +5, +1, -1, -5, -10].map((value) => (
            <button
              key={value}
              onClick={() => global.addValue(value)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95
                ${
                  value > 0
                    ? "bg-green-100 text-green-700 hover:bg-green-200 border border-green-300"
                    : "bg-red-100 text-red-700 hover:bg-red-200 border border-red-300"
                }
              `}
              type="button"
            >
              {value > 0 ? `+${value}` : value}
            </button>
          ))}
        </div>
      </div>

      {/* MobX 状态信息 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="theme-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            📊 {t("counter.stateInfo")}
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("counter.counterValue")}:
              </span>
              <span className="font-medium text-card-foreground">
                {global.counter}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("counter.currentTheme")}:
              </span>
              <span className="font-medium text-card-foreground">
                {global.currentTheme.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("counter.themeSwitch")}:
              </span>
              <span className="font-medium text-card-foreground">
                {global.stats.themeChanges} {t("counter.times")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("counter.currentPage")}:
              </span>
              <span className="font-medium text-card-foreground">
                {global.currentPage}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("counter.availableThemes")}:
              </span>
              <span className="font-medium text-card-foreground">
                {global.stats.availableThemes}
              </span>
            </div>
          </div>
        </div>

        <div className="theme-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            💾 {t("counter.dataPersistence")}
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">localStorage:</span>
              <span className="text-green-600 font-medium">
                ✅ {t("counter.enabled")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">MobX 响应式:</span>
              <span className="text-green-600 font-medium">
                ✅ {t("counter.enabled")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">主题同步:</span>
              <span className="text-green-600 font-medium">
                ✅ {t("counter.enabled")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 测试指南 */}
      <div className="theme-card p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">
          📋 {t("counter.testGuide")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-card-foreground mb-3">
              🔧 {t("counter.basicTests")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t("counter.testPoints.clickButtons")}</li>
              <li>• {t("counter.testPoints.quickActions")}</li>
              <li>• {t("counter.testPoints.observeChanges")}</li>
              <li>• {t("counter.testPoints.testReset")}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-card-foreground mb-3">
              🔄 {t("counter.stateTests")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t("counter.testPoints.switchPages")}</li>
              <li>• {t("counter.testPoints.refreshPage")}</li>
              <li>• {t("counter.testPoints.switchTheme")}</li>
              <li>• {t("counter.testPoints.reactiveUpdate")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Counter;
