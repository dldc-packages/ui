import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { designContentSizeVar } from "../common/index";

export const layer = "dldc.ui-styles.frame-content";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export const spacingGapVar = createVar("spacing-gap");

export const frameContentLayoutClass = style(
  withLayer({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    gap: `calc(min(${spacingGapVar}, ${designContentSizeVar}))`,
    paddingLeft: spacingGapVar,
    paddingRight: spacingGapVar,
  }),
);

export const frameContentStartPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingLeft: calc.multiply(spacingGapVar, 1.5) }),
  none: withLayer({ paddingLeft: 0 }),
});

export const frameContentEndPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingRight: calc.multiply(spacingGapVar, 1.5) }),
  none: withLayer({ paddingRight: 0 }),
});
