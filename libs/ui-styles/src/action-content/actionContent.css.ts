import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { designContentSizeVar } from "../common/index";
import { withLayer } from "../utils/layer";

export const spacingGapVar = createVar("spacing-gap");

export const actionContentLayoutClass = style(
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

export const actionContentStartPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingLeft: calc.multiply(spacingGapVar, 1.5) }),
  none: withLayer({ paddingLeft: 0 }),
});

export const actionContentEndPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingRight: calc.multiply(spacingGapVar, 1.5) }),
  none: withLayer({ paddingRight: 0 }),
});
