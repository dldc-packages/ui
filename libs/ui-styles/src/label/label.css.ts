import { colorsVars } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const labelClass = style(
  withLayer({
    // TODO
    // textStyle: "4",
    fontWeight: "semibold",
    color: colorsVars.neutral[400],
    marginBottom: sizeToRemString("0x"),
    marginLeft: sizeToRemString("0x"),
  }),
);

export const labelDisabledClass = style(
  withLayer({
    color: colorsVars.neutral[500],
  }),
);
