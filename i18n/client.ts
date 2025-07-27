"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName, fallbackLng } from "./settings";
import { useLang } from "./i18n-context";

const runsOnServerSide = typeof window === "undefined";

const translations = JSON.parse(process.env.NEXT_PUBLIC_TRANSLATIONS || "{}");

const isDev = process.env.NODE_ENV === "development";

const i18n = i18next.use(initReactI18next).use(LanguageDetector);

if (isDev) {
  i18n.use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`).then((module) => {
        callback(null, module.default);
      });
    }),
  );
}

i18n.init({
  ...getOptions(),
  lng: undefined, // let detect the language on client side
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"],
  },
  preload: runsOnServerSide ? languages : [],
  resources: isDev ? undefined : translations,
});

export function useTranslation(ns?: string) {
  const lng = useLang() ?? fallbackLng;
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  // 在服务端直接改变语言
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  // 客户端的语言同步逻辑
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n, mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (cookies.i18next === lng) return;
    setCookie(cookieName, lng, { path: "/" });
  }, [lng, cookies.i18next, setCookie, mounted]);

  // 在客户端首次渲染之前，返回服务端的翻译
  if (!mounted) {
    return ret;
  }

  return ret;
}
