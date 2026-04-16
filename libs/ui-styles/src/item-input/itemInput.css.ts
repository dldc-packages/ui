import { _placeholder } from "@dldc/ui-core/conditions";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const itemInputContentClass = style(
  withLayer({
    outline: "none",
    alignSelf: "stretch",
    flex: "1",
    selectors: {
      [_placeholder]: {
        opacity: 0.6,
      },
    },
  }),
);
