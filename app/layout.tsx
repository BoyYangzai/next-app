import "./globals.css";
import { Viewport } from "next";
import { metadataGenerators } from "@/lib/metadata";

// 默认使用中文 metadata
export const metadata = metadataGenerators.root("zh");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,

  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="w-full min-h-screen">{children}</body>
    </html>
  );
}
