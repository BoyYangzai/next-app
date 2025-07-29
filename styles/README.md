# 样式文件结构说明

本项目的CSS文件已经按功能模块化拆分，便于维护和管理。

## 📁 文件结构

```
styles/
├── README.md           # 本说明文档
├── theme.css           # 主题配置文件
├── base.css            # 基础样式文件
├── components.css      # 组件样式文件
└── utilities.css       # 工具类样式文件
```

## 📋 各文件功能说明

### 🎨 theme.css

**主题配置文件** - 包含所有主题相关的CSS变量定义

- **@theme 配置**: Tailwind CSS 4.x 的颜色映射
- **主题变量**: 7种预设主题的颜色定义
  - light (默认亮色)
  - dark (暗色)
  - blue (蓝色)
  - green (绿色)
  - purple (紫色)
  - orange (橙色)
  - red (红色)
- **兼容性配置**: 与shadcn/ui的兼容设置

### 🏗️ base.css

**基础样式文件** - 全局的基础样式定义

- 全局元素重置
- HTML和body的基础样式
- 字体特性设置
- 色彩方案配置

### 🧩 components.css

**组件样式文件** - 自定义组件的样式类

- `.theme-card`: 主题卡片样式
- `.theme-button`: 主题按钮样式
- `.theme-input`: 主题输入框样式

### 🛠️ utilities.css

**工具类样式文件** - 实用的工具类定义

- `.animate-theme-transition`: 主题切换动画
- `.scrollbar-hide`: 隐藏滚动条
- 其他实用工具类

## 🔧 维护指南

### 添加新主题

1. 在 `theme.css` 中添加新的主题变量定义
2. 在 `components/theme/ThemeProvider.tsx` 中添加主题名称
3. 测试所有组件在新主题下的显示效果

### 添加新组件样式

1. 在 `components.css` 中添加新的组件样式类
2. 使用语义化的类名，如 `.theme-*`
3. 确保使用CSS变量，支持主题切换

### 添加新工具类

1. 在 `utilities.css` 中添加新的工具类
2. 使用 `@layer utilities` 确保正确的CSS层级
3. 添加详细的注释说明用途

## 📖 使用示例

### 在组件中使用主题样式

```tsx
// 使用预定义的主题样式类
<div className="theme-card">
  <button className="theme-button">
    点击我
  </button>
</div>

// 直接使用Tailwind的颜色变量
<div className="bg-primary text-primary-foreground">
  主题色背景
</div>
```

### 添加自定义主题

```css
/* 在 theme.css 中添加 */
.custom {
  --background: #your-bg-color;
  --foreground: #your-text-color;
  --primary: #your-primary-color;
  /* ... 其他颜色变量 */
}
```

## 🎯 最佳实践

1. **保持一致性**: 所有主题都应该定义相同的CSS变量
2. **语义化命名**: 使用有意义的变量名，如 `--primary` 而不是 `--blue`
3. **层级管理**: 正确使用 `@layer` 指令管理CSS优先级
4. **注释完整**: 为复杂的样式添加详细注释
5. **测试覆盖**: 每次修改后测试所有主题的显示效果
