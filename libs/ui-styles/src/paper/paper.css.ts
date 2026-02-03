import { colorsVars, NEUTRAL_COLOR_SHADES, opacity, TNeutralColorShade } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.paper";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export const paperBaseClass = style(
  withLayer({
    overflow: "hidden",
    borderWidth: sizeToRemString("0__x"),
    borderColor: opacity(colorsVars.white, 10),
  }),
);

export const paperClass = Object.fromEntries(
  NEUTRAL_COLOR_SHADES.map((key) => {
    return [key, style([paperBaseClass, withLayer({ backgroundColor: colorsVars.neutral[key] })])];
  }),
) as Record<TNeutralColorShade, string>;
