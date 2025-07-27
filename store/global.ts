import { makeAutoObservable } from "mobx";

export type Theme = 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange' | 'red';
export type Language = 'zh' | 'en';

export const THEMES = {
  light: {
    name: '亮色主题',
    description: '经典的亮色界面',
    color: '#3B82F6',
    icon: '☀️',
    className: '' // 默认主题不需要类名
  },
  dark: {
    name: '暗色主题',
    description: '护眼的暗色界面',
    color: '#1E293B',
    icon: '🌙',
    className: 'theme-dark'
  },
  blue: {
    name: '蓝色主题',
    description: '专业的蓝色调',
    color: '#2563EB',
    icon: '💙',
    className: 'theme-blue'
  },
  green: {
    name: '绿色主题',
    description: '清新的绿色调',
    color: '#22C55E',
    icon: '💚',
    className: 'theme-green'
  },
  purple: {
    name: '紫色主题',
    description: '优雅的紫色调',
    color: '#9333EA',
    icon: '💜',
    className: 'theme-purple'
  },
  orange: {
    name: '橙色主题',
    description: '温暖的橙色调',
    color: '#F97316',
    icon: '🧡',
    className: 'theme-orange'
  },
  red: {
    name: '红色主题',
    description: '活力的红色调',
    color: '#EF4444',
    icon: '❤️',
    className: 'theme-red'
  }
};

export const LANGUAGES = {
  zh: {
    name: '中文',
    nativeName: '中文',
    flag: '🇨🇳'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  }
};

class Global {
  // 主题状态
  theme: Theme = 'light';

  // 语言状态
  language: Language = 'zh';

  // 计数器测试 MobX 状态管理
  counter = 0;

  // 页面状态
  currentPage = 'home'; // 'home' | 'counter'

  // 主题切换历史
  themeHistory: Theme[] = ['light'];

  // 语言切换历史
  languageHistory: Language[] = ['zh'];

  // 标记是否已经初始化（避免 hydration 错误）
  private isInitialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  // 新的初始化方法 - 只从存储读取状态，不应用主题（主题已预加载）
  initializeFromStorage = () => {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      // 从 localStorage 读取设置
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedLanguage = localStorage.getItem('language') as Language;
      const savedCounter = localStorage.getItem('counter');

      if (savedTheme && THEMES[savedTheme]) {
        this.theme = savedTheme;
      }

      if (savedLanguage && LANGUAGES[savedLanguage]) {
        this.language = savedLanguage;
      }

      if (savedCounter) {
        this.counter = parseInt(savedCounter, 10) || 0;
      }

      // 不需要应用主题，因为已经通过预加载脚本应用了
      this.isInitialized = true;
    } catch (error) {
      console.warn('Failed to initialize from localStorage:', error);
      this.isInitialized = true;
    }
  };

  // 原有的初始化方法，保持向后兼容
  initialize = () => {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      // 从 localStorage 读取设置
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedLanguage = localStorage.getItem('language') as Language;
      const savedCounter = localStorage.getItem('counter');

      if (savedTheme && THEMES[savedTheme]) {
        this.theme = savedTheme;
      }

      if (savedLanguage && LANGUAGES[savedLanguage]) {
        this.language = savedLanguage;
      }

      if (savedCounter) {
        this.counter = parseInt(savedCounter, 10) || 0;
      }

      // 应用主题到 DOM
      this.applyTheme(this.theme);
      this.isInitialized = true;
    } catch (error) {
      console.warn('Failed to initialize from localStorage:', error);
      // 如果出错，使用默认设置
      this.applyTheme('light');
      this.isInitialized = true;
    }
  };

  // 应用主题到 DOM - 使用类名方式
  private applyTheme = (theme: Theme) => {
    if (typeof window === 'undefined') return;

    try {
      const root = document.documentElement;

      // 移除所有主题类名
      Object.values(THEMES).forEach(themeConfig => {
        if (themeConfig.className) {
          root.classList.remove(themeConfig.className);
        }
      });

      // 应用新主题类名
      const themeConfig = THEMES[theme];
      if (themeConfig.className) {
        root.classList.add(themeConfig.className);
      }

      console.log(`Applied theme: ${theme}`, {
        className: themeConfig.className,
        currentClasses: root.className
      });

    } catch (error) {
      console.warn('Failed to apply theme:', error);
    }
  };

  // 切换主题
  setTheme = (theme: Theme) => {
    if (!THEMES[theme]) return;

    console.log(`Switching theme from ${this.theme} to ${theme}`);

    this.theme = theme;
    this.themeHistory.push(theme);
    this.applyTheme(theme);

    // 保存到 localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  };

  // 切换语言
  setLanguage = (language: Language) => {
    if (!LANGUAGES[language]) return;

    console.log(`Switching language from ${this.language} to ${language}`);

    this.language = language;
    this.languageHistory.push(language);

    // 保存到 localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', language);
      } catch (error) {
        console.warn('Failed to save language to localStorage:', error);
      }
    }
  };

  // 获取当前主题配置
  get currentTheme() {
    return THEMES[this.theme];
  }

  // 获取当前语言配置
  get currentLanguage() {
    return LANGUAGES[this.language];
  }

  // 计数器操作
  increment = () => {
    this.counter += 1;
    this.saveCounter();
  };

  decrement = () => {
    this.counter -= 1;
    this.saveCounter();
  };

  reset = () => {
    this.counter = 0;
    this.saveCounter();
  };

  addValue = (value: number) => {
    this.counter += value;
    this.saveCounter();
  };

  // 保存计数器到 localStorage
  private saveCounter = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('counter', this.counter.toString());
      } catch (error) {
        console.warn('Failed to save counter to localStorage:', error);
      }
    }
  };

  // 页面切换
  setCurrentPage = (page: string) => {
    this.currentPage = page;
  };

  // 获取统计信息
  get stats() {
    return {
      currentTheme: this.currentTheme.name,
      currentLanguage: this.currentLanguage.name,
      themeChanges: this.themeHistory.length - 1,
      languageChanges: this.languageHistory.length - 1,
      counterValue: this.counter,
      currentPage: this.currentPage,
      availableThemes: Object.keys(THEMES).length,
      availableLanguages: Object.keys(LANGUAGES).length
    };
  }

  // 获取主题使用统计
  get themeStats() {
    const themeCount = this.themeHistory.reduce((acc, theme) => {
      acc[theme] = (acc[theme] || 0) + 1;
      return acc;
    }, {} as Record<Theme, number>);

    return {
      totalSwitches: this.themeHistory.length - 1,
      mostUsed: Object.entries(themeCount)
        .sort(([, a], [, b]) => b - a)[0]?.[0] as Theme || 'light',
      usage: themeCount
    };
  }

  // 获取语言使用统计
  get languageStats() {
    const languageCount = this.languageHistory.reduce((acc, language) => {
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {} as Record<Language, number>);

    return {
      totalSwitches: this.languageHistory.length - 1,
      mostUsed: Object.entries(languageCount)
        .sort(([, a], [, b]) => b - a)[0]?.[0] as Language || 'zh',
      usage: languageCount
    };
  }
}

export default Global;
