import { recipe } from "@vanilla-extract/recipes";

export const layer = "dldc.ui-styles.stack";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export const stackClass = recipe({
  base: withLayer({ display: "flex" }),
  variants: {
    direction: {
      column: withLayer({ flexDirection: "column" }),
      row: withLayer({ flexDirection: "row" }),
    },
    align: {
      start: withLayer({ alignItems: "flex-start" }),
      center: withLayer({ alignItems: "center" }),
      end: withLayer({ alignItems: "flex-end" }),
      stretch: withLayer({ alignItems: "stretch" }),
    },
    justify: {
      start: withLayer({ justifyContent: "flex-start" }),
      center: withLayer({ justifyContent: "center" }),
      end: withLayer({ justifyContent: "flex-end" }),
      between: withLayer({ justifyContent: "space-between" }),
      around: withLayer({ justifyContent: "space-around" }),
    },
  },
  defaultVariants: {
    direction: "column",
    align: "stretch",
  },
});
