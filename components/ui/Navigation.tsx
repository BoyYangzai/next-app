import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/i18n/i18n-context";

interface NavigationProps {
  className?: string;
  variant?: "default" | "compact";
}

const Navigation: FC<NavigationProps> = observer(
  ({ className = "", variant = "default" }) => {
    const { global } = useStore();
    const { t } = useTranslation();
    const pathname = usePathname();
    const lang = useLang();

    const navItems = [
      {
        key: "home",
        href: `/${lang}`,
        label: "功能概览",
        description: "项目功能总览",
        shortLabel: "首页",
        icon: "🏠",
        color: "bg-purple-500/10 text-purple-600 border-purple-200",
      },
      {
        key: "theme",
        href: `/${lang}/theme`,
        label: t("navigation.themeTest"),
        description: t("navigation.themeTestDesc"),
        shortLabel: "主题",
        icon: "🎨",
        color: "bg-blue-500/10 text-blue-600 border-blue-200",
      },
      {
        key: "counter",
        href: `/${lang}/counter`,
        label: t("navigation.mobxTest"),
        description: t("navigation.mobxTestDesc"),
        shortLabel: "MobX",
        icon: "🔢",
        color: "bg-green-500/10 text-green-600 border-green-200",
      },
      {
        key: "seo",
        href: `/${lang}/seo`,
        label: t("navigation.seoTest"),
        description: t("navigation.seoTestDesc"),
        shortLabel: "SEO",
        icon: "📊",
        color: "bg-orange-500/10 text-orange-600 border-orange-200",
      },
      {
        key: "error-boundary",
        href: `/${lang}/error-boundary`,
        label: "错误边界",
        description: "ErrorBoundary 错误处理测试",
        shortLabel: "错误",
        icon: "🚨",
        color: "bg-red-500/10 text-red-600 border-red-200",
      },
    ];

    // 根据当前路径判断激活状态
    const isActive = (href: string) => {
      if (href === `/${lang}`) {
        return pathname === `/${lang}`;
      }
      return pathname.startsWith(href);
    };

    if (variant === "compact") {
      return (
        <nav className={`${className}`}>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`
                relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                hover:scale-105 active:scale-95
                ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }
              `}
                title={item.description}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="hidden xl:block">{item.shortLabel}</span>
                </div>

                {isActive(item.href) && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      );
    }

    return (
      <nav className={`${className}`}>
        {/* 桌面端布局 - 水平滚动 */}
        <div className="hidden md:block">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`
                group relative px-4 py-3 rounded-lg border transition-all duration-300
                hover:scale-105 hover:shadow-md active:scale-95 
                flex-shrink-0 min-w-[160px] block
                ${
                  isActive(item.href)
                    ? `${item.color} shadow-md font-medium`
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                }
              `}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <span className="text-sm font-medium text-left w-full">
                      {item.label}
                    </span>
                    <span className="text-xs opacity-75 text-left w-full">
                      {item.description}
                    </span>
                  </div>

                  {isActive(item.href) && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 移动端布局 - 网格布局 */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`
                group relative px-3 py-3 rounded-lg border transition-all duration-300
                hover:scale-105 hover:shadow-md active:scale-95 block
                ${
                  isActive(item.href)
                    ? `${item.color} shadow-md font-medium`
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                }
              `}
              >
                <div className="flex flex-col items-center space-y-1 text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium leading-tight">
                      {item.label}
                    </span>
                    <span className="text-xs opacity-75 leading-tight">
                      {item.description}
                    </span>
                  </div>

                  {isActive(item.href) && (
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  },
);

export default Navigation;
