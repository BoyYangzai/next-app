// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

// 直接定义颜色常量，避免导入问题
const PRIMARY_COLOR = "#3B82F6";

const theme: ThemeConfig = {
  token: {},
  components: {
    Button: {
      colorPrimary: PRIMARY_COLOR,
      colorPrimaryHover: PRIMARY_COLOR,
      colorPrimaryActive: PRIMARY_COLOR,
    },
    Steps: {
      colorPrimary: PRIMARY_COLOR,
    },
  },
};

export default theme;
