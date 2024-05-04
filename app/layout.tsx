"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider as AntdConfigProvider } from "antd";
import antdTheme from "../theme/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex justify-center items-center bg-bg">
        <AntdRegistry>
          <AntdConfigProvider theme={antdTheme}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </AntdConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
