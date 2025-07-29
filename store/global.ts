import { makeAutoObservable } from "mobx";

export type Theme =
  | "light"
  | "dark"
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red";
export type Language = "zh" | "en";

export const THEMES = {
  light: { nameKey: "themes.light.name", color: "#3B82F6", className: "" },
  dark: {
    nameKey: "themes.dark.name",
    color: "#1E293B",
    className: "theme-dark",
  },
  blue: {
    nameKey: "themes.blue.name",
    color: "#2563EB",
    className: "theme-blue",
  },
  green: {
    nameKey: "themes.green.name",
    color: "#22C55E",
    className: "theme-green",
  },
  purple: {
    nameKey: "themes.purple.name",
    color: "#9333EA",
    className: "theme-purple",
  },
  orange: {
    nameKey: "themes.orange.name",
    color: "#F97316",
    className: "theme-orange",
  },
  red: { nameKey: "themes.red.name", color: "#EF4444", className: "theme-red" },
};

export const LANGUAGES = {
  zh: { name: "中文", nativeName: "中文", flag: "🇨🇳" },
  en: { name: "English", nativeName: "English", flag: "🇺🇸" },
};

// 计数器历史条目接口
interface CounterHistoryEntry {
  timestamp: number;
  actionKey?: string; // 翻译键而不是硬编码文本
  action?: string; // 兼容旧数据
  value: number;
  actionValue?: number; // 用于addValue操作的数值
}

// 页面历史条目接口
interface PageHistoryEntry {
  page: string;
  timestamp: number;
}

class Global {
  // 主题相关状态
  theme: Theme = "light";
  themeHistory: Theme[] = ["light"];

  // 语言相关状态
  language: Language = "zh";
  languageHistory: Language[] = ["zh"];

  // 计数器相关状态
  counter = 0;
  counterHistory: CounterHistoryEntry[] = [];

  // 页面导航状态
  currentPage = "home";
  pageHistory: PageHistoryEntry[] = [];

  // 初始化标志
  private isInitialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  // 初始化方法 - 从 localStorage 读取状态
  initializeFromStorage = () => {
    if (this.isInitialized) return;

    try {
      // 读取主题
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && THEMES[savedTheme]) {
        this.theme = savedTheme;
      }

      // 读取语言
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && LANGUAGES[savedLanguage]) {
        this.language = savedLanguage;
      }

      // 读取计数器
      const savedCounter = localStorage.getItem("counter");
      if (savedCounter) {
        this.counter = parseInt(savedCounter, 10);
      }

      // 读取计数器历史
      const savedCounterHistory = localStorage.getItem("counterHistory");
      if (savedCounterHistory) {
        const parsedHistory = JSON.parse(savedCounterHistory);
        // 检查是否有旧格式的数据，如果有则清空
        const hasOldFormat = parsedHistory.some(
          (entry: any) => entry.action && !entry.actionKey,
        );
        if (hasOldFormat) {
          console.log("Detected old format counter history, clearing...");
          this.counterHistory = [];
          localStorage.removeItem("counterHistory");
        } else {
          this.counterHistory = parsedHistory;
        }
      }

      // 读取页面历史
      const savedPageHistory = localStorage.getItem("pageHistory");
      if (savedPageHistory) {
        this.pageHistory = JSON.parse(savedPageHistory);
      }

      // 读取主题历史
      const savedThemeHistory = localStorage.getItem("themeHistory");
      if (savedThemeHistory) {
        this.themeHistory = JSON.parse(savedThemeHistory);
      }

      // 读取语言历史
      const savedLanguageHistory = localStorage.getItem("languageHistory");
      if (savedLanguageHistory) {
        this.languageHistory = JSON.parse(savedLanguageHistory);
      }

      this.isInitialized = true;
      console.log("Global state initialized from localStorage");
    } catch (error) {
      console.error("Error initializing from localStorage:", error);
    }
  };

  // 设置主题
  setTheme = (theme: Theme) => {
    this.theme = theme;
    this.themeHistory.push(theme);

    try {
      localStorage.setItem("theme", theme);
      localStorage.setItem("themeHistory", JSON.stringify(this.themeHistory));
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  };

  // 切换主题（在亮色和暗色之间）
  toggleTheme = () => {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  };

  // 设置语言
  setLanguage = (language: Language) => {
    this.language = language;
    this.languageHistory.push(language);

    try {
      localStorage.setItem("language", language);
      localStorage.setItem(
        "languageHistory",
        JSON.stringify(this.languageHistory),
      );
    } catch (error) {
      console.error("Error saving language to localStorage:", error);
    }
  };

  // 计数器操作
  increment = () => {
    this.counter += 1;
    this.addCounterHistory("actions.increment", this.counter);
    this.saveCounterState();
  };

  decrement = () => {
    this.counter -= 1;
    this.addCounterHistory("actions.decrement", this.counter);
    this.saveCounterState();
  };

  reset = () => {
    this.counter = 0;
    this.addCounterHistory("actions.reset", this.counter);
    this.saveCounterState();
  };

  // 添加指定数值
  addValue = (value: number) => {
    this.counter += value;
    const actionKey = value > 0 ? "actions.addValue" : "actions.subtractValue";
    this.addCounterHistory(actionKey, this.counter, Math.abs(value));
    this.saveCounterState();
  };

  // 添加计数器历史
  private addCounterHistory = (
    actionKey: string,
    value: number,
    actionValue?: number,
  ) => {
    this.counterHistory.push({
      timestamp: Date.now(),
      actionKey,
      value,
      actionValue,
    });

    // 只保留最近 50 条历史
    if (this.counterHistory.length > 50) {
      this.counterHistory = this.counterHistory.slice(-50);
    }

    try {
      localStorage.setItem(
        "counterHistory",
        JSON.stringify(this.counterHistory),
      );
    } catch (error) {
      console.error("Error saving counter history:", error);
    }
  };

  // 保存计数器状态
  private saveCounterState = () => {
    try {
      localStorage.setItem("counter", this.counter.toString());
    } catch (error) {
      console.error("Error saving counter state:", error);
    }
  };

  // 清空计数器历史（用于测试）
  clearCounterHistory = () => {
    this.counterHistory = [];
    try {
      localStorage.removeItem("counterHistory");
    } catch (error) {
      console.error("Error clearing counter history:", error);
    }
  };

  // 设置当前页面
  setCurrentPage = (page: string) => {
    this.currentPage = page;
    this.pageHistory.push({
      page,
      timestamp: Date.now(),
    });

    // 只保留最近 20 条页面历史
    if (this.pageHistory.length > 20) {
      this.pageHistory = this.pageHistory.slice(-20);
    }

    try {
      localStorage.setItem("pageHistory", JSON.stringify(this.pageHistory));
    } catch (error) {
      console.error("Error saving page history:", error);
    }
  };

  // 计算属性：当前主题信息
  get currentTheme() {
    return THEMES[this.theme];
  }

  // 计算属性：当前语言信息
  get currentLanguage() {
    return LANGUAGES[this.language];
  }

  // 计算属性：计数器统计
  get counterStats() {
    const values = this.counterHistory.map((entry) => entry.value);
    return {
      totalOperations: this.counterHistory.length,
      maxValue: values.length > 0 ? Math.max(...values) : 0,
      minValue: values.length > 0 ? Math.min(...values) : 0,
      averageValue:
        values.length > 0
          ? values.reduce((a, b) => a + b, 0) / values.length
          : 0,
    };
  }

  // 计算属性：主题统计
  get themeStats() {
    const themeCounts = this.themeHistory.reduce(
      (acc, theme) => {
        acc[theme] = (acc[theme] || 0) + 1;
        return acc;
      },
      {} as Record<Theme, number>,
    );

    const mostUsed = Object.entries(themeCounts).reduce((a, b) =>
      themeCounts[a[0] as Theme] > themeCounts[b[0] as Theme] ? a : b,
    )[0] as Theme;

    return {
      totalSwitches: this.themeHistory.length - 1, // 减去初始主题
      mostUsed,
      themeCounts,
    };
  }

  // 计算属性：语言统计
  get languageStats() {
    const languageCounts = this.languageHistory.reduce(
      (acc, lang) => {
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
      },
      {} as Record<Language, number>,
    );

    return {
      totalSwitches: this.languageHistory.length - 1,
      languageCounts,
    };
  }

  // 计算属性：全局统计（用于页面底部显示）
  get stats() {
    return {
      currentTheme: this.currentTheme.nameKey,
      currentLanguage: this.currentLanguage.name,
      counterValue: this.counter,
      themeChanges: this.themeStats.totalSwitches,
      languageChanges: this.languageStats.totalSwitches,
      pageNavigations: this.pageHistory.length,
      availableThemes: Object.keys(THEMES).length,
    };
  }
}

export default Global;
