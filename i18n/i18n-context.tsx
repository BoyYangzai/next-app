"use client";

import { createContext, useContext } from "react";
import { Languages } from "./settings";

export const i18nContext = createContext<{
  lang: Languages;
}>({
  lang: "zh",
}); // 正确的 context 创建

export const I18nProvider = i18nContext.Provider;

export const useLang = () => {
  const lang = useContext(i18nContext);
  return lang.lang;
};
