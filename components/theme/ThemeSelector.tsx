import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "next-themes";
import { useTranslation } from "@/i18n/client";

interface ThemeSelectorProps {
  className?: string;
}

// 主题配置
const THEME_CONFIG = {
  light: {
    name: "theme.themes.light.name",
    description: "theme.themes.light.description",
    color: "#3B82F6",
    icon: "☀️",
  },
  dark: {
    name: "theme.themes.dark.name",
    description: "theme.themes.dark.description",
    color: "#1E293B",
    icon: "🌙",
  },
  blue: {
    name: "theme.themes.blue.name",
    description: "theme.themes.blue.description",
    color: "#2563EB",
    icon: "💙",
  },
  green: {
    name: "theme.themes.green.name",
    description: "theme.themes.green.description",
    color: "#22C55E",
    icon: "💚",
  },
  purple: {
    name: "theme.themes.purple.name",
    description: "theme.themes.purple.description",
    color: "#9333EA",
    icon: "💜",
  },
  orange: {
    name: "theme.themes.orange.name",
    description: "theme.themes.orange.description",
    color: "#F97316",
    icon: "🧡",
  },
  red: {
    name: "theme.themes.red.name",
    description: "theme.themes.red.description",
    color: "#EF4444",
    icon: "❤️",
  },
};

const ThemeSelector: FC<ThemeSelectorProps> = observer(({ className = "" }) => {
  const { theme, setTheme, themes } = useTheme();
  const { t } = useTranslation("theme");
  const [mounted, setMounted] = useState(false);

  // 确保组件在客户端挂载后才渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeClick = (themeKey: string) => {
    console.log("Theme button clicked:", themeKey);
    console.log("Current theme:", theme);

    try {
      setTheme(themeKey);
      console.log("Theme set successfully to:", themeKey);
    } catch (error) {
      console.error("Error setting theme:", error);
    }
  };

  // 防止 hydration 错误 - 在客户端挂载前显示加载状态
  if (!mounted) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">
            🎨 加载主题选择器...
          </h3>
          <p className="text-muted-foreground">正在初始化主题系统</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.entries(THEME_CONFIG).map(([key, themeConfig]) => (
            <div
              key={key}
              className="group relative flex flex-col items-center p-4 rounded-xl border-2 border-border animate-pulse"
            >
              <div className="w-12 h-12 rounded-full mb-3 shadow-md border-2 border-white/20 bg-gray-300" />
              <div className="text-2xl mb-2">{themeConfig.icon}</div>
              <div className="text-center">
                <div className="font-medium text-card-foreground text-sm">
                  加载中...
                </div>
                <div className="text-xs text-muted-foreground mt-1">请稍候</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* 主题选择标题 */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          🎨 {t("theme.colorSelection")}
        </h3>
        <p className="text-muted-foreground">
          {t("theme.colorSelectionDesc", { count: themes?.length || 7 })}
        </p>
      </div>

      {/* 主题选择网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {Object.entries(THEME_CONFIG).map(([key, themeConfig]) => (
          <button
            key={key}
            onClick={() => handleThemeClick(key)}
            className={`
              group relative flex flex-col items-center p-4 rounded-xl border-2 
              transition-all duration-300 hover:scale-105 active:scale-95
              ${
                theme === key
                  ? "border-primary shadow-lg shadow-primary/25 bg-primary/5"
                  : "border-border hover:border-primary/50 hover:shadow-md"
              }
            `}
            type="button"
          >
            {/* 主题色彩预览 */}
            <div
              className="w-12 h-12 rounded-full mb-3 shadow-md border-2 border-white/20"
              style={{ backgroundColor: themeConfig.color }}
            />

            {/* 主题图标 */}
            <div className="text-2xl mb-2">{themeConfig.icon}</div>

            {/* 主题名称 */}
            <div className="text-center">
              <div className="font-medium text-card-foreground text-sm">
                {t(themeConfig.name)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {t(themeConfig.description)}
              </div>
            </div>

            {/* 当前主题指示器 */}
            {theme === key && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs text-primary-foreground">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* 主题统计 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="theme-card p-6">
          <h4 className="font-semibold text-card-foreground mb-4">
            📊 {t("theme.stats.title")}
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t("theme.stats.currentTheme")}:
              </span>
              <span className="font-medium text-card-foreground">
                {theme
                  ? t(THEME_CONFIG[theme as keyof typeof THEME_CONFIG]?.name)
                  : "Loading..."}
              </span>
            </div>
          </div>
        </div>

        <div className="theme-card p-6">
          <h4 className="font-semibold text-card-foreground mb-4">
            ⚡ {t("theme.features.title")}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-muted-foreground">next-themes 优化</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-muted-foreground">零闪烁切换</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-muted-foreground">自动持久化</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-muted-foreground">SSR 兼容</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ThemeSelector;
