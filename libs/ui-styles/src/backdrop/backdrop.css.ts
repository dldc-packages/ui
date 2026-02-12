import { colorsVars, opacity } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const backdropClass = style(
  withLayer({
    position: "fixed",
    inset: 0,
    backgroundColor: opacity(colorsVars.black, 30),
    backdropFilter: `blur(${sizeToRemString(1)})`,
  }),
);
