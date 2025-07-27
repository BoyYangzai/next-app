# 项目管理系统 - MobX & Tailwind CSS 示例

这是一个使用 Next.js、MobX 状态管理和 Tailwind CSS 4.1 构建的现代项目管理系统示例。

## 🚀 技术栈

- **Next.js 15.1** - React 全栈框架
- **React 18.3** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **MobX 6.13** - 状态管理
- **Tailwind CSS 4.1** - 原子化 CSS 框架
- **Framer Motion** - 动画库
- **Ant Design** - UI 组件库
- **React Query** - 数据获取和缓存

## ✨ 主要功能

### 🎨 主题切换

- 支持亮色/暗色主题切换
- 主题状态通过 MobX 管理
- 自动保存到 localStorage
- 平滑的主题过渡动画

### 📊 项目管理

- 项目列表展示
- 实时项目进度更新
- 项目状态管理（计划中、进行中、已完成）
- 统计数据可视化

### 🎭 动画效果

- 使用 Framer Motion 实现流畅动画
- 页面加载动画
- 悬停效果
- 状态切换动画

### 📱 响应式设计

- 完全响应式布局
- 移动端优化
- 现代化 UI 设计

## 🛠️ 安装和运行

### 1. 克隆项目

```bash
git clone <repository-url>
cd next-app
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 访问应用

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
next-app/
├── app/                    # Next.js App Router
│   ├── (home)/            # 主页路由组
│   │   ├── layout.tsx     # 主页布局
│   │   └── page.tsx       # 主页面
│   ├── globals.css        # 全局样式
│   └── layout.tsx         # 根布局
├── components/            # 可复用组件
│   ├── ThemeToggle.tsx   # 主题切换组件
│   ├── ProjectCard.tsx   # 项目卡片组件
│   └── StatsCard.tsx     # 统计卡片组件
├── store/                # MobX 状态管理
│   ├── global.ts         # 全局状态
│   └── index.ts          # Store 导出
├── theme/                # 主题配置
│   └── themeConfig.ts    # Ant Design 主题
└── tailwind.config.ts    # Tailwind 配置
```

## 🎯 核心功能详解

### MobX 状态管理

项目使用 MobX 管理全局状态，包括：

- **主题状态**: 亮色/暗色主题切换
- **用户信息**: 用户名、邮箱、头像
- **项目数据**: 项目列表、进度、状态
- **应用状态**: 侧边栏、加载状态等

```typescript
// 主题切换示例
const { global } = useStore();
global.toggleTheme(); // 切换主题
```

### Tailwind CSS 4.1 新特性

项目展示了 Tailwind CSS 4.1 的新功能：

- **文本阴影**: `text-shadow-*` 工具类
- **遮罩效果**: `mask-*` 工具类
- **3D 变换**: 新的 3D 变换工具类
- **改进的暗色模式**: 更好的浏览器兼容性
- **动态工具类**: 支持动态值

### 主题系统

支持完整的亮色/暗色主题切换：

```css
/* 亮色主题 */
.bg-white dark:bg-gray-800

/* 暗色主题 */
.text-gray-900 dark:text-white
```

## 🎨 设计系统

### 颜色系统

- **Primary**: 蓝色系 (#3B82F6)
- **Secondary**: 绿色系 (#10B981)
- **Gray**: 灰色系 (支持暗色模式)

### 组件样式

- **卡片**: 圆角、阴影、悬停效果
- **按钮**: 渐变背景、过渡动画
- **表单**: 现代化输入框样式

## 📈 项目特色

1. **现代化架构**: 使用最新的 React 和 Next.js 特性
2. **类型安全**: 完整的 TypeScript 支持
3. **状态管理**: MobX 提供响应式状态管理
4. **样式系统**: Tailwind CSS 4.1 最新特性
5. **动画效果**: Framer Motion 流畅动画
6. **响应式设计**: 完美适配各种设备

## 🔧 开发命令

```bash
# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📝 许可证

MIT License

## 👨‍💻 贡献

欢迎提交 Issue 和 Pull Request！

---

**享受编码的乐趣！** 🎉
