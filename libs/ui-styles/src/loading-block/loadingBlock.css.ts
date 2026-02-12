import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const loadingBlockClass = style(
  withLayer({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: sizeToRemString("3"),
    paddingBlock: sizeToRemString("6"),
  }),
);

export const loadingTextClass = style(
  withLayer({
    textTransform: "uppercase",
    letterSpacing: "wider",
    // textStyle: "4",
    fontWeight: "semibold",
    paddingLeft: sizeToRemString("3"),
  }),
);
