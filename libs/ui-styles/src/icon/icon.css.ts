import { contentSizeVar } from "@dldc/ui-core/variables";
import { globalStyle, style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const iconClass = style(
  withLayer({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: contentSizeVar,
    height: contentSizeVar,
  }),
);

globalStyle(
  `${iconClass} > *`,
  withLayer({
    width: "100%",
    height: "100%",
  }),
);
