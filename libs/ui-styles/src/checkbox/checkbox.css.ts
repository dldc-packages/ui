import { contentSizeVar } from "@dldc/ui-core/variables";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const checkboxClass = style(
  withLayer({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: contentSizeVar,
    height: contentSizeVar,
  }),
);
