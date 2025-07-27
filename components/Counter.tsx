import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

interface CounterProps {
  className?: string;
}

const Counter: FC<CounterProps> = observer(({ className = "" }) => {
  const { global } = useStore();

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-3">
          🔢 MobX 计数器测试
        </h2>
        <p className="text-muted-foreground text-lg">
          测试 MobX 状态管理的响应式更新和数据持久化
        </p>
      </div>

      {/* 计数器显示 */}
      <div className="theme-card p-12 text-center animate-theme-transition">
        <div className="relative">
          <div className="text-8xl font-bold text-primary mb-4 animate-pulse">
            {global.counter}
          </div>
          <div className="text-xl text-muted-foreground">当前计数值</div>

          {/* 计数器变化指示器 */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xs font-bold text-accent-foreground">
              {global.counter >= 0 ? "+" : "-"}
            </span>
          </div>
        </div>
      </div>

      {/* 主要操作按钮 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={global.increment}
          className="theme-button py-4 px-8 text-lg font-semibold rounded-xl 
                   hover:scale-105 active:scale-95 transform transition-all duration-200
                   shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center gap-3">
            <span className="text-2xl">➕</span>
            <span>增加 (+1)</span>
          </span>
        </button>

        <button
          onClick={global.decrement}
          className="theme-button py-4 px-8 text-lg font-semibold rounded-xl 
                   hover:scale-105 active:scale-95 transform transition-all duration-200
                   shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center gap-3">
            <span className="text-2xl">➖</span>
            <span>减少 (-1)</span>
          </span>
        </button>
      </div>

      {/* 快速操作按钮 */}
      <div className="theme-card p-6">
        <h3 className="font-semibold text-card-foreground mb-4 text-center">
          ⚡ 快速操作
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => global.addValue(10)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80
                     px-4 py-3 rounded-lg font-medium transition-all duration-200
                     hover:scale-105 shadow-sm hover:shadow-md"
          >
            +10
          </button>

          <button
            onClick={() => global.addValue(100)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80
                     px-4 py-3 rounded-lg font-medium transition-all duration-200
                     hover:scale-105 shadow-sm hover:shadow-md"
          >
            +100
          </button>

          <button
            onClick={() => global.addValue(-10)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80
                     px-4 py-3 rounded-lg font-medium transition-all duration-200
                     hover:scale-105 shadow-sm hover:shadow-md"
          >
            -10
          </button>

          <button
            onClick={global.reset}
            className="bg-red-500 hover:bg-red-600 text-white
                     px-4 py-3 rounded-lg font-medium transition-all duration-200
                     hover:scale-105 shadow-sm hover:shadow-md"
          >
            🔄 重置
          </button>
        </div>
      </div>

      {/* MobX 状态信息 */}
      <div className="theme-card p-6 space-y-4">
        <h3 className="font-bold text-card-foreground flex items-center gap-2">
          📊 MobX 状态信息
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">计数器值:</span>
              <span className="font-bold text-primary text-lg">
                {global.stats.counterValue}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">当前主题:</span>
              <span className="font-medium text-card-foreground">
                {global.stats.currentTheme}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">主题切换:</span>
              <span className="font-medium text-card-foreground">
                {global.stats.themeChanges} 次
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">当前页面:</span>
              <span className="font-medium text-card-foreground">
                {global.stats.currentPage}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">可用主题:</span>
              <span className="font-medium text-card-foreground">
                {global.stats.availableThemes} 种
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">数据持久化:</span>
              <span className="text-green-600 font-medium">✅ 已启用</span>
            </div>
          </div>
        </div>
      </div>

      {/* 测试说明 */}
      <div className="theme-card p-6">
        <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
          🧪 测试指南
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-card-foreground mb-2">
              基础功能测试:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• 点击 +/- 按钮测试计数器响应</li>
              <li>• 使用快速操作按钮测试批量更新</li>
              <li>• 观察数值变化的实时反馈</li>
              <li>• 重置按钮测试状态重置功能</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-2">
              状态管理测试:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• 切换到主题页面再返回，数据保持</li>
              <li>• 刷新浏览器页面，数据从 localStorage 恢复</li>
              <li>• 切换主题，计数器状态不受影响</li>
              <li>• 所有操作都是响应式的，UI 立即更新</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Counter;
