import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: "primary" | "secondary" | "success" | "warning";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard: FC<StatsCardProps> = ({
  title,
  value,
  icon,
  color,
  trend,
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-50 dark:bg-primary-900/20",
          icon: "text-primary-600 dark:text-primary-400",
          text: "text-primary-900 dark:text-primary-100",
        };
      case "secondary":
        return {
          bg: "bg-secondary-50 dark:bg-secondary-900/20",
          icon: "text-secondary-600 dark:text-secondary-400",
          text: "text-secondary-900 dark:text-secondary-100",
        };
      case "success":
        return {
          bg: "bg-green-50 dark:bg-green-900/20",
          icon: "text-green-600 dark:text-green-400",
          text: "text-green-900 dark:text-green-100",
        };
      case "warning":
        return {
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          icon: "text-yellow-600 dark:text-yellow-400",
          text: "text-yellow-900 dark:text-yellow-100",
        };
      default:
        return {
          bg: "bg-gray-50 dark:bg-gray-900/20",
          icon: "text-gray-600 dark:text-gray-400",
          text: "text-gray-900 dark:text-gray-100",
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-card dark:shadow-card-dark p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className={`text-2xl font-bold ${colorClasses.text}`}>{value}</p>

          {trend && (
            <div className="flex items-center mt-2">
              <svg
                className={`w-4 h-4 mr-1 ${
                  trend.isPositive
                    ? "text-green-500 rotate-0"
                    : "text-red-500 rotate-180"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(trend.value)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs 上月</span>
            </div>
          )}
        </div>

        <div className={`p-3 rounded-full ${colorClasses.bg}`}>
          <div className={`w-6 h-6 ${colorClasses.icon}`}>{icon}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
