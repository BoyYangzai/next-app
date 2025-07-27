"use client";

import { FC, useEffect } from "react";
import { useStore } from "@/store";
import { useLang } from "@/i18n/i18n-context";

const MobXInitializer: FC = () => {
  const { global } = useStore();
  const currentLang = useLang();

  useEffect(() => {
    console.log("MobXInitializer: Initializing from storage");

    // 初始化 MobX 状态
    global.initializeFromStorage();

    // 同步路由语言状态
    if (currentLang && currentLang !== global.language) {
      console.log("MobXInitializer: Syncing language from route:", currentLang);
      global.setLanguage(currentLang);
    }

    console.log("MobXInitializer: Initialization complete");
  }, [global, currentLang]);

  return null;
};

export default MobXInitializer;
