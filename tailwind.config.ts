import type { Config } from "tailwindcss";

export const PRIMARY_COLOR = "#3B82F6";
export const SECONDARY_COLOR = "#10B981";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 启用 class 模式的暗色主题
  plugins: [],
};
export default config;
