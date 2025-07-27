import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { Theme, THEMES } from "@/store/global";

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector: FC<ThemeSelectorProps> = observer(({ className = "" }) => {
  const { global } = useStore();

  const handleThemeClick = (themeKey: string) => {
    console.log("Theme button clicked:", themeKey);
    console.log("Current theme:", global.theme);
    console.log("Available themes:", Object.keys(THEMES));

    try {
      global.setTheme(themeKey as Theme);
      console.log("Theme set successfully to:", themeKey);
    } catch (error) {
      console.error("Error setting theme:", error);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          🎨 主题色彩选择
        </h3>
        <p className="text-muted-foreground">
          选择你喜欢的界面主题，支持 {global.stats.availableThemes} 种不同风格
        </p>
      </div>

      {/* 主题网格 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(THEMES).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => handleThemeClick(key)}
            className={`
              theme-card group relative p-6 transition-all duration-300 animate-theme-transition
              hover:scale-105 hover:shadow-lg cursor-pointer
              ${
                global.theme === key
                  ? "ring-2 ring-primary shadow-lg scale-105"
                  : "hover:shadow-md"
              }
            `}
            type="button"
          >
            {/* 主题预览色块 */}
            <div className="flex items-center justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full shadow-md transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: theme.color }}
              />
            </div>

            {/* 主题信息 */}
            <div className="text-center space-y-2">
              <div className="text-2xl">{theme.icon}</div>
              <h4 className="font-semibold text-card-foreground">
                {theme.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {theme.description}
              </p>
            </div>

            {/* 选中状态指示器 */}
            {global.theme === key && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  className="w-3 h-3 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* 调试信息 */}
      <div className="theme-card p-4 bg-red-100 border border-red-300">
        <h4 className="font-semibold text-red-800 mb-2">🐛 调试信息</h4>
        <div className="text-sm text-red-700 space-y-1">
          <div>
            当前主题: <strong>{global.theme}</strong>
          </div>
          <div>
            主题类名:{" "}
            <strong>{THEMES[global.theme]?.className || "默认"}</strong>
          </div>
          <div>
            HTML类名: <strong id="html-classes">检查中...</strong>
          </div>
          <div>
            是否已初始化: <strong>{global.stats ? "是" : "否"}</strong>
          </div>
        </div>
      </div>

      {/* 主题统计信息 */}
      <div className="theme-card p-4 space-y-3">
        <h4 className="font-semibold text-card-foreground flex items-center gap-2">
          📊 主题使用统计
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">当前主题:</span>
            <span className="font-medium text-card-foreground">
              {global.currentTheme.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">切换次数:</span>
            <span className="font-medium text-card-foreground">
              {global.stats.themeChanges} 次
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">最常用:</span>
            <span className="font-medium text-card-foreground">
              {THEMES[global.themeStats.mostUsed]?.name || "暂无"}
            </span>
          </div>
        </div>
      </div>

      {/* 主题特性说明 */}
      <div className="theme-card p-4">
        <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
          ✨ 主题系统特性
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Tailwind CSS 4.x 原生支持</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>CSS 变量动态切换</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>localStorage 持久化</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>流畅的过渡动画</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>响应式设计适配</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>易于维护扩展</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ThemeSelector;
