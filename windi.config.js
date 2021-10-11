import colors from "windicss/colors";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        dark: colors.dark,
      },
    },
  },
});
