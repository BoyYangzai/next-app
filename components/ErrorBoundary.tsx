// import Image from "next/image"; // 暂时不使用Image组件
import React, { Component, ReactNode } from "react";
import { useTranslation } from "@/i18n/client";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronDown, ChevronRight } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorFallbackProps {
  error: Error;
  errorInfo: React.ErrorInfo | null;
  resetError: () => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error captured in ErrorBoundary:", { error, errorInfo });
    this.setState({ errorInfo });
  }

  resetError() {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorContent;
      return (
        <FallbackComponent
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          resetError={this.resetError}
        />
      );
    }

    // 没有错误时，渲染子组件
    return this.props.children;
  }
}

function DefaultErrorContent({
  error,
  errorInfo,
  resetError,
}: ErrorFallbackProps) {
  const { t } = useTranslation("error");
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 min-h-[200px]">
      {/* 错误图标和标题 */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-destructive mb-2">
          {t("boundary.title")}
        </h2>
        <p className="text-sm text-muted-foreground max-w-md">
          {error.message}
        </p>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3 mb-6">
        <Button
          onClick={resetError}
          size="sm"
          variant="default"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {t("boundary.retry")}
        </Button>
        <Button
          onClick={() => window.location.reload()}
          size="sm"
          variant="outline"
        >
          {t("boundary.reload")}
        </Button>
      </div>

      {/* 开发环境下显示详细错误信息 */}
      {process.env.NODE_ENV === "development" && errorInfo && (
        <div className="w-full max-w-xl">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
          >
            {showDetails ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            {t("boundary.details")}
          </button>

          {showDetails && (
            <div className="theme-card p-0 overflow-hidden">
              <div className="bg-muted px-4 py-2 border-b">
                <span className="text-sm font-medium">组件堆栈跟踪</span>
              </div>
              <pre className="p-4 text-xs overflow-auto max-h-48 font-mono leading-relaxed bg-background">
                {errorInfo.componentStack}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ErrorBoundary;
