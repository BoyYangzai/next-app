"use client";

import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

const ClientInitializer: FC = observer(() => {
  const { global } = useStore();

  useEffect(() => {
    console.log("ClientInitializer: Component mounted");
    console.log("ClientInitializer: Current theme before init:", global.theme);

    // 在客户端挂载后初始化主题
    global.initialize();

    console.log("ClientInitializer: Theme after init:", global.theme);

    // 添加实时 HTML 类名监控
    const updateHtmlClasses = () => {
      const htmlElement = document.documentElement;
      const htmlClassesElement = document.getElementById("html-classes");
      if (htmlClassesElement) {
        htmlClassesElement.textContent = htmlElement.className || "无类名";
      }
    };

    // 立即更新一次
    updateHtmlClasses();

    // 监听类名变化
    const observer = new MutationObserver(updateHtmlClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [global]);

  // 这个组件不渲染任何内容，只负责初始化
  return null;
});

export default ClientInitializer;
