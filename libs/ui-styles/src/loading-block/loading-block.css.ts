import { sizeToRemString } from "@dldc/ui-core/size";
import { style } from "@vanilla-extract/css";

export const loadingBlockClass = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: sizeToRemString("3"),
  paddingBlock: sizeToRemString("6"),
});

export const loadingTextClass = style({
  textTransform: "uppercase",
  letterSpacing: "wider",
  // textStyle: "4",
  fontWeight: "semibold",
  paddingLeft: sizeToRemString("3"),
});
