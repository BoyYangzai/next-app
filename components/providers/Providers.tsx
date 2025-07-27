"use client";

import { FC, ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider as AntdConfigProvider } from "antd";
import antdTheme from "../../theme/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreContext, Store } from "../../store";
import { I18nProvider } from "@/i18n/i18n-context";
import { CookiesProvider } from "react-cookie";
import { Languages } from "@/i18n/settings";
import ThemeProvider from "../theme/ThemeProvider";
import MobXInitializer from "../counter/MobXInitializer";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
  lang: Languages;
}

const Providers: FC<ProvidersProps> = ({ children, lang }) => {
  return (
    <CookiesProvider>
      <I18nProvider value={{ lang }}>
        <ThemeProvider>
          <StoreContext.Provider value={Store}>
            <MobXInitializer />
            <AntdRegistry>
              <AntdConfigProvider theme={antdTheme}>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </AntdConfigProvider>
            </AntdRegistry>
          </StoreContext.Provider>
        </ThemeProvider>
      </I18nProvider>
    </CookiesProvider>
  );
};

export default Providers;
