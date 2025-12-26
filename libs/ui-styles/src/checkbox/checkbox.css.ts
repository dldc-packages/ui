import { style } from "@vanilla-extract/css";
import { designContentSizeVar } from "../common";

// className="flex size-5 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300"

export const checkboxClass = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: designContentSizeVar,
  height: designContentSizeVar,
});
