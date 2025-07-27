import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = observer(({ className = "" }) => {
  const { global } = useStore();
  const { t } = useTranslation();

  const navItems = [
    {
      key: "home",
      label: t("navigation.themeTest"),
      description: t("navigation.themeTestDesc"),
      icon: "🎨",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      key: "counter",
      label: t("navigation.mobxTest"),
      description: t("navigation.mobxTestDesc"),
      icon: "🔢",
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
  ];

  return (
    <nav className={`${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => global.setCurrentPage(item.key)}
            className={`
              group relative px-4 py-3 rounded-lg border transition-all duration-300
              hover:scale-105 hover:shadow-md active:scale-95 min-w-[140px]
              ${
                global.currentPage === item.key
                  ? `${item.color} shadow-md font-medium`
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              }
            `}
            type="button"
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

              {global.currentPage === item.key && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
              )}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
});

export default Navigation;
