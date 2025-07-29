import { FC, useState } from "react";
import { Button } from "./button";
import { useTranslation } from "@/i18n/client";

interface ErrorTriggerProps {
  className?: string;
}

const ErrorTrigger: FC<ErrorTriggerProps> = ({ className = "" }) => {
  const { t } = useTranslation("error");
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error(t("trigger.errorMessage"));
  }

  return (
    <div className={`theme-card p-4 ${className}`}>
      <h3 className="text-lg font-semibold text-card-foreground mb-3">
        {t("trigger.title")}
      </h3>
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {t("trigger.description")}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-card-foreground">
            {t("trigger.features.title")}
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>{t("trigger.features.items.0")}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>{t("trigger.features.items.1")}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>{t("trigger.features.items.2")}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>{t("trigger.features.items.3")}</span>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => setShouldThrow(true)}
          variant="destructive"
          size="sm"
          className="w-full"
        >
          {t("trigger.button")}
        </Button>
      </div>
    </div>
  );
};

export default ErrorTrigger;
