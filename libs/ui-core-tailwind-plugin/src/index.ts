import { colors } from "@dldc/ui-core/colors";
import createPlugin from "tailwindcss/plugin";
import { sizes, spacing } from "./size";

const plugin: any = createPlugin(
  (_api) => {
    return;
  },
  {
    theme: {
      colors,
      spacing,
      sizes,
    },
  }
);

export default plugin;
