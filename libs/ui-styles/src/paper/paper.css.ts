import { colorsVars, NEUTRAL_COLOR_SHADES, opacity, TNeutralColorShade } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const paperBaseClass = style({
  overflow: "hidden",
  borderWidth: sizeToRemString("0__x"),
  borderColor: opacity(colorsVars.white, 10),
});

export const paperClass = Object.fromEntries(
  NEUTRAL_COLOR_SHADES.map((key) => {
    return [key, style([paperBaseClass, { backgroundColor: colorsVars.neutral[key] }])];
  }),
) as Record<TNeutralColorShade, string>;
