import { style } from "@vanilla-extract/css";
import { designContentSizeVar } from "../common";

export const layer = "dldc.ui-styles.checkbox";

export const checkboxClass = style({
  "@layer": {
    [layer]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: designContentSizeVar,
      height: designContentSizeVar,
    },
  },
});
