import { FC, useState } from "react";
import { Button } from "./button";

interface ErrorTriggerProps {
  className?: string;
}

const ErrorTrigger: FC<ErrorTriggerProps> = ({ className = "" }) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("这是一个演示错误！ErrorBoundary 将捕获此错误。");
  }

  return (
    <div className={`theme-card p-4 ${className}`}>
      <h3 className="text-lg font-semibold text-card-foreground mb-3">
        🚨 错误边界测试
      </h3>
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          点击下面的按钮触发一个错误，观察 ErrorBoundary
          如何优雅地处理错误并显示错误界面。
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-card-foreground">
            测试功能:
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>错误捕获和显示</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>错误重试机制</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>开发环境详细错误信息</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>用户友好的错误界面</span>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => setShouldThrow(true)}
          variant="destructive"
          size="sm"
          className="w-full"
        >
          触发错误
        </Button>
      </div>
    </div>
  );
};

export default ErrorTrigger;
