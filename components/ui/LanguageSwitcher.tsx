import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "@/store";
import { useTranslation } from "@/i18n/client";
import { useLang } from "@/i18n/i18n-context";
import { Language, LANGUAGES } from "@/store/global";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = observer(
  ({ className = "" }) => {
    const { global } = useStore();
    const router = useRouter();
    const pathname = usePathname();
    const currentLang = useLang();
    const { t } = useTranslation("common");

    const handleLanguageChange = async (lang: Language) => {
      console.log("Language switch clicked:", lang);
      console.log("Current language:", currentLang);

      try {
        // 更新 MobX 状态
        global.setLanguage(lang);

        // 构建新的路径
        const segments = pathname.split("/");
        segments[1] = lang; // 替换语言段
        const newPath = segments.join("/");

        // 路由跳转
        router.push(newPath);

        console.log("Language switched successfully to:", lang);
      } catch (error) {
        console.error("Error switching language:", error);
      }
    };

    return (
      <div className={`${className}`}>
        <div className="flex items-center bg-muted/50 rounded-lg p-1">
          {Object.entries(LANGUAGES).map(([key, lang]) => (
            <button
              key={key}
              onClick={() => handleLanguageChange(key as Language)}
              className={`
              flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md text-sm font-medium
              transition-all duration-200 hover:scale-105 min-w-[60px] justify-center
              ${
                currentLang === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }
            `}
              type="button"
            >
              <span className="text-sm">{lang.flag}</span>
              <span className="text-xs font-medium whitespace-nowrap">
                {key === "zh" ? t("language.chinese") : t("language.english")}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  },
);

export default LanguageSwitcher;
