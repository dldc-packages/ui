import { _placeholder } from "@dldc/ui-core/conditions";
import { style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.action-input";

export const actionInputContentClass = style({
  "@layer": {
    [layer]: {
      outline: "none",
      alignSelf: "stretch",
      flex: "1",
      selectors: {
        [_placeholder]: {
          opacity: 0.6,
        },
      },
    },
  },
});
