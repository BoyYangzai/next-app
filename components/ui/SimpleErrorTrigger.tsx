import { FC, useState } from "react";
import { Button } from "./button";

interface SimpleErrorTriggerProps {
  areaName: string;
  className?: string;
}

const SimpleErrorTrigger: FC<SimpleErrorTriggerProps> = ({
  areaName,
  className = "",
}) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error(`这是${areaName}的演示错误！ErrorBoundary 将捕获此错误。`);
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm text-muted-foreground text-center">
        点击下面的按钮触发错误，观察 ErrorBoundary
        如何优雅地处理错误并显示错误界面。
      </p>
      <Button
        onClick={() => setShouldThrow(true)}
        variant="destructive"
        size="sm"
        className="w-full"
      >
        触发错误
      </Button>
    </div>
  );
};

export default SimpleErrorTrigger;
