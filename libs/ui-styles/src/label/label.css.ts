import { colorsVars } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const labelClass = style({
  // textStyle: "4",
  fontWeight: "semibold",
  color: colorsVars.neutral[400],
  marginBottom: sizeToRemString("0x"),
  marginLeft: sizeToRemString("0x"),
});

export const labelDisabledClass = style({
  color: colorsVars.neutral[500],
});
