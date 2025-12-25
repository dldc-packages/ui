import { _placeholder } from "@dldc/ui-core/conditions";
import { style } from "@vanilla-extract/css";

export const frameInputContentClass = style({
  outline: "none",
  alignSelf: "stretch",
  flex: "1",
  selectors: {
    [_placeholder]: {
      opacity: 0.6,
    },
  },
});
