import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = observer(({ className = "" }) => {
  const { global } = useStore();

  const pages = [
    {
      key: "home",
      name: "主题测试",
      icon: "🎨",
      description: "Tailwind 多主题切换",
    },
    {
      key: "counter",
      name: "MobX测试",
      icon: "🔢",
      description: "状态管理响应式",
    },
  ];

  return (
    <nav className={`${className}`}>
      <div className="flex space-x-2 p-2 bg-muted rounded-xl shadow-inner">
        {pages.map((page) => (
          <button
            key={page.key}
            onClick={() => global.setCurrentPage(page.key)}
            className={`
              group relative flex items-center space-x-3 px-6 py-3 rounded-lg 
              font-medium transition-all duration-300 animate-theme-transition
              ${
                global.currentPage === page.key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50 hover:scale-102"
              }
            `}
          >
            <span className="text-xl">{page.icon}</span>
            <div className="text-left">
              <div className="font-semibold">{page.name}</div>
              <div
                className={`text-xs transition-colors duration-200 ${
                  global.currentPage === page.key
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground/80"
                }`}
              >
                {page.description}
              </div>
            </div>

            {/* 活跃指示器 */}
            {global.currentPage === page.key && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
});

export default Navigation;
