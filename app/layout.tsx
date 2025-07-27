"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider as AntdConfigProvider } from "antd";
import antdTheme from "../theme/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreContext, Store } from "../store";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen">
        <StoreContext.Provider value={Store}>
          <AntdRegistry>
            <AntdConfigProvider theme={antdTheme}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </AntdConfigProvider>
          </AntdRegistry>
        </StoreContext.Provider>
      </body>
    </html>
  );
}
