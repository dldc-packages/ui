import { style } from "@vanilla-extract/css";

import { designContentSizeVar } from "../common";
import { withLayer } from "../utils/layer";

export const checkboxClass = style(
  withLayer({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: designContentSizeVar,
    height: designContentSizeVar,
  }),
);
