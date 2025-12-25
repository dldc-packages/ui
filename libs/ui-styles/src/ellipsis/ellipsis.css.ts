import { style } from "@vanilla-extract/css";

export const ellipsisClass = style({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});
