import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/i18n/i18n-context";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = observer(({ className = "" }) => {
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
      icon: "🏠",
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      key: "theme",
      href: `/${lang}/theme`,
      label: t("navigation.themeTest"),
      description: t("navigation.themeTestDesc"),
      icon: "🎨",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      key: "counter",
      href: `/${lang}/counter`,
      label: t("navigation.mobxTest"),
      description: t("navigation.mobxTestDesc"),
      icon: "🔢",
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
  ];

  // 根据当前路径判断激活状态
  const isActive = (href: string) => {
    if (href === `/${lang}`) {
      return pathname === `/${lang}`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`
              group relative px-4 py-3 rounded-lg border transition-all duration-300
              hover:scale-105 hover:shadow-md active:scale-95 min-w-[140px] block
              ${
                isActive(item.href)
                  ? `${item.color} shadow-md font-medium`
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              }
            `}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <div className="flex flex-col items-start min-w-0">
                <span className="text-sm font-medium whitespace-nowrap truncate max-w-[100px]">
                  {item.label}
                </span>
                <span className="text-xs opacity-75 whitespace-nowrap truncate max-w-[100px]">
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
    </nav>
  );
});

export default Navigation;
