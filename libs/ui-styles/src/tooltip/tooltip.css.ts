import { colorsVars } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const tooltipClass = style(
  withLayer({
    borderRadius: sizeToRemString("2"),
    backgroundColor: colorsVars.neutral[900],
    paddingTop: sizeToRemString("1x"),
    paddingBottom: sizeToRemString("1x"),
    paddingLeft: sizeToRemString("3"),
    paddingRight: sizeToRemString("3"),
  }),
);
