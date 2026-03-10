import { roundedVar } from "@dldc/ui-core/variables";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const roundedBorderRadiusClass = style(
  withLayer({
    borderRadius: roundedVar,
    ["cornerShape" as any]: "superellipse(1.5)",
  }),
);
