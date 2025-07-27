"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import ThemeSelector from "@/components/ThemeSelector";
import Counter from "@/components/Counter";
import Navigation from "@/components/Navigation";
import ClientInitializer from "@/components/ClientInitializer";

const HomePage: FC = observer(() => {
  const { global } = useStore();

  return (
    <>
      {/* 客户端初始化组件 */}
      <ClientInitializer />

      <div className="min-h-screen bg-background text-foreground animate-theme-transition">
        {/* 顶部导航栏 */}
        <header className="theme-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  🚀 功能测试实验室
                </h1>
                <p className="text-muted-foreground">
                  基于 Tailwind CSS 4.x 的现代主题系统 & MobX 状态管理演示
                </p>
              </div>

              <Navigation className="flex-shrink-0" />
            </div>
          </div>
        </header>

        {/* 主要内容区域 */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          {global.currentPage === "home" && (
            <div className="space-y-10">
              {/* 功能1: Tailwind 主题切换测试 */}
              <section className="theme-card p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    🎨 Tailwind CSS 4.x 多主题系统
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                    体验最新的 Tailwind CSS 4.x 主题切换技术，支持 7
                    种精美主题， 使用原生 CSS 变量和 @theme
                    指令，实现流畅的颜色过渡效果
                  </p>
                </div>

                <ThemeSelector />
              </section>

              {/* 技术特性展示 */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="theme-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    性能优化
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    基于 Rust 引擎的 Tailwind CSS 4.x，构建速度提升 10 倍
                  </p>
                </div>

                <div className="theme-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    CSS-First
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    无需 JavaScript 配置文件，直接在 CSS 中定义主题
                  </p>
                </div>

                <div className="theme-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    易维护
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    统一的设计令牌管理，开发者友好的架构设计
                  </p>
                </div>
              </section>

              {/* 实现对比 */}
              <section className="theme-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  📊 Tailwind CSS 版本对比
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-card-foreground">
                          特性
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                          v3.x
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-primary">
                          v4.x (新)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-card-foreground">
                          配置方式
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          tailwind.config.js
                        </td>
                        <td className="py-3 px-4 text-center text-primary font-medium">
                          @theme 指令
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-card-foreground">
                          主题切换
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          复杂设置
                        </td>
                        <td className="py-3 px-4 text-center text-primary font-medium">
                          原生 CSS 变量
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-card-foreground">
                          透明度支持
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          需要特殊处理
                        </td>
                        <td className="py-3 px-4 text-center text-primary font-medium">
                          自动支持
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-card-foreground">
                          构建性能
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          Node.js
                        </td>
                        <td className="py-3 px-4 text-center text-primary font-medium">
                          Rust 引擎
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {global.currentPage === "counter" && (
            <div className="space-y-8">
              {/* 功能2: MobX 状态管理测试 */}
              <section className="theme-card p-8 lg:p-12">
                <Counter />
              </section>
            </div>
          )}
        </main>

        {/* 底部状态栏 */}
        <footer className="theme-card border-t mt-12 bg-card/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm">
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>
                    当前主题:{" "}
                    <strong className="text-card-foreground">
                      {global.stats.currentTheme}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>
                    计数器:{" "}
                    <strong className="text-card-foreground">
                      {global.stats.counterValue}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>
                    主题切换:{" "}
                    <strong className="text-card-foreground">
                      {global.stats.themeChanges} 次
                    </strong>
                  </span>
                </div>
              </div>
              <div className="text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>Tailwind CSS 4.x + MobX + TypeScript</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
});

export default HomePage;
