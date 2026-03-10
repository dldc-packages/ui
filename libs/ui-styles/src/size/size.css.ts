import { sizeVar } from "@dldc/ui-core/variables";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const sizeMinSizeClass = style(
  withLayer({
    minWidth: sizeVar,
    minHeight: sizeVar,
  }),
);

export const sizeMinHeightClass = style(
  withLayer({
    minHeight: sizeVar,
  }),
);
