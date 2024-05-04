// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import { PRIMARY_COLOR } from "../tailwind.config";

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
