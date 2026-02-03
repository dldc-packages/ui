import { colorsVars } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.label";

export const labelClass = style({
  "@layer": {
    [layer]: {
      // TODO
      // textStyle: "4",
      fontWeight: "semibold",
      color: colorsVars.neutral[400],
      marginBottom: sizeToRemString("0x"),
      marginLeft: sizeToRemString("0x"),
    },
  },
});

export const labelDisabledClass = style({
  "@layer": {
    [layer]: {
      color: colorsVars.neutral[500],
    },
  },
});
