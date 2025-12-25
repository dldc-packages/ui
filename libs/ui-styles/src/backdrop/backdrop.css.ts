import { colorsVars, opacity } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const backdropClass = style({
  position: "fixed",
  inset: 0,
  backgroundColor: opacity(colorsVars.black, 30),
  backdropFilter: `blur(${sizeToRemString(1)})`,
});
