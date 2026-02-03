import { globalStyle, style } from "@vanilla-extract/css";
import { designContentSizeVar } from "../common/index";

export const layer = "dldc.ui-styles.icon";

export const iconClass = style({
  "@layer": {
    [layer]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: designContentSizeVar,
      height: designContentSizeVar,
    },
  },
});

globalStyle(`${iconClass} > *`, {
  "@layer": {
    [layer]: {
      width: "100%",
      height: "100%",
    },
  },
});
