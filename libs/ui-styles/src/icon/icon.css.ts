import { globalStyle, style } from "@vanilla-extract/css";
import { designContentSizeVar } from "../common/index";

export const iconClass = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: designContentSizeVar,
  height: designContentSizeVar,
});

globalStyle(`${iconClass} > *`, {
  width: "100%",
  height: "100%",
});
