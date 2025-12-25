import { recipe } from "@vanilla-extract/recipes";

export const stackClass = recipe({
  base: {
    display: "flex",
  },
  variants: {
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
  },
  defaultVariants: {
    direction: "column",
    align: "stretch",
  },
});
