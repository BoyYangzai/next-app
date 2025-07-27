import "./globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "功能测试实验室 - Feature Testing Lab",
  description: "基于 Tailwind CSS 4.x 的现代主题系统 & MobX 状态管理演示",
  keywords: ["Next.js", "Tailwind CSS", "MobX", "TypeScript", "i18n"],
  authors: [{ name: "Development Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full min-h-screen">{children}</body>
    </html>
  );
}
