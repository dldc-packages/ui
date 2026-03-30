import { contentSizeVar } from "@dldc/ui-core/variables";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const iconClass = style(
  withLayer({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: contentSizeVar,
    height: contentSizeVar,
  }),
);

export const iconDisplayVariantClass = styleVariants({
  flex: withLayer({ display: "flex" }),
  inlineFlex: withLayer({
    display: "inline-flex",
    verticalAlign: "text-bottom",
  }),
});

globalStyle(
  `${iconClass} > *`,
  withLayer({
    width: "100%",
    height: "100%",
  }),
);
