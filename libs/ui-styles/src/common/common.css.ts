import { sizeToRemString } from "@dldc/ui-core/size";
import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withLayer } from "../utils/layer";

export const designHeightVar = createVar(
  { syntax: "<length>", inherits: false, initialValue: sizeToRemString(7) },
  "design-height",
);

export const designContentSizeVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: sizeToRemString(4) },
  "design-content-size",
);

export const designHeightClass = style(
  withLayer({
    minHeight: designHeightVar,
  }),
);

export const designContentSizeClass = style(
  withLayer({
    lineHeight: designContentSizeVar,
    fontSize: calc.multiply(designContentSizeVar, 0.88),
  }),
);
