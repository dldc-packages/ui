import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.loading-block";

export const loadingBlockClass = style({
  "@layer": {
    [layer]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: sizeToRemString("3"),
      paddingBlock: sizeToRemString("6"),
    },
  },
});

export const loadingTextClass = style({
  "@layer": {
    [layer]: {
      textTransform: "uppercase",
      letterSpacing: "wider",
      // textStyle: "4",
      fontWeight: "semibold",
      paddingLeft: sizeToRemString("3"),
    },
  },
});
