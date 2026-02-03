import { style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.ellipsis";

export const ellipsisClass = style({
  "@layer": {
    [layer]: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
});
