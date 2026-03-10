import * as css from "@dldc/css-builder";
import { createVar, style, styleVariants } from "@vanilla-extract/css";

import { paddingVar } from "../padding";
import { withLayer } from "../utils/layer";

export const spacingGapVar = createVar("spacing-gap");

export const actionContentLayoutClass = style(
  withLayer({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    gap: paddingVar, // `calc(min(${spacingGapVar}, ${designContentSizeVar}))`,
    paddingLeft: paddingVar,
    paddingRight: paddingVar,
  }),
);

export const actionContentStartPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingLeft: css.serialize(css.multiply(paddingVar, 1.5)) }),
  none: withLayer({ paddingLeft: 0 }),
});

export const actionContentEndPaddingClass = styleVariants({
  icon: {},
  text: withLayer({ paddingRight: css.serialize(css.multiply(paddingVar, 1.5)) }),
  none: withLayer({ paddingRight: 0 }),
});
