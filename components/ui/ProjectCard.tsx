import { FC } from "react";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: "completed" | "in-progress" | "planning";
  progress: number;
}

interface ProjectCardProps {
  project: Project;
  onProgressUpdate?: (id: number, progress: number) => void;
}

const ProjectCard: FC<ProjectCardProps> = observer(
  ({ project, onProgressUpdate }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case "completed":
          return "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200";
        case "in-progress":
          return "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200";
        case "planning":
          return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
        default:
          return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case "completed":
          return "已完成";
        case "in-progress":
          return "进行中";
        case "planning":
          return "计划中";
        default:
          return "未知";
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-card dark:shadow-card-dark p-6 hover:shadow-lg transition-shadow duration-300"
      >
        {/* 项目标题和状态 */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
          >
            {getStatusText(project.status)}
          </span>
        </div>

        {/* 项目描述 */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 技术栈 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 进度条 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              进度
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {project.progress}%
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full ${
                project.status === "completed"
                  ? "bg-secondary-500"
                  : project.status === "in-progress"
                    ? "bg-primary-500"
                    : "bg-gray-400"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* 进度调整按钮 */}
          {onProgressUpdate && project.status !== "completed" && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() =>
                  onProgressUpdate(
                    project.id,
                    Math.max(0, project.progress - 10),
                  )
                }
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                -10%
              </button>
              <button
                onClick={() =>
                  onProgressUpdate(
                    project.id,
                    Math.min(100, project.progress + 10),
                  )
                }
                className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
              >
                +10%
              </button>
            </div>
          )}
        </div>
      </motion.div>
    );
  },
);

export default ProjectCard;
