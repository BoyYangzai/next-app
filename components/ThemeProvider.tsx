"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark", "blue", "green", "purple", "orange", "red"]}
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
