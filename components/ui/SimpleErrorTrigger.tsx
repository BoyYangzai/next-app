import { FC, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { Button } from "./button";

interface SimpleErrorTriggerProps {
  areaName: string;
  className?: string;
}

const SimpleErrorTrigger: FC<SimpleErrorTriggerProps> = ({
  areaName,
  className = "",
}) => {
  const { t } = useTranslation("error");
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error(
      t("trigger.errorMessage").replace("ErrorBoundary", "ErrorBoundary"),
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm text-muted-foreground text-center">
        {t("trigger.description")}
      </p>
      <Button
        onClick={() => setShouldThrow(true)}
        variant="destructive"
        size="sm"
        className="w-full"
      >
        {t("trigger.button")}
      </Button>
    </div>
  );
};

export default SimpleErrorTrigger;
