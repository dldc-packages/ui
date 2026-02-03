import { ComplexStyleRule, styleVariants } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.modal";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export type TModalWidth = "xs" | "sm" | "md" | "lg" | "full";

export const modalWidthClass = styleVariants({
  xs: withLayer({ maxWidth: "460px" }),
  sm: withLayer({ maxWidth: "600px" }),
  md: withLayer({ maxWidth: "800px" }),
  lg: withLayer({ maxWidth: "1200px" }),
  full: {},
} satisfies Record<TModalWidth, ComplexStyleRule>);

export type TModalHeight = "xs" | "sm" | "md" | "lg" | "full";

export const modalHeightClass = styleVariants({
  xs: {},
  sm: withLayer({ height: "300px" }),
  md: withLayer({ height: "300px" }),
  lg: withLayer({ height: "300px" }),
  full: withLayer({ height: "100%" }),
} satisfies Record<TModalHeight, ComplexStyleRule>);

export const modalHeightInnerScrollClass = styleVariants({
  xs: {},
  sm: withLayer({ minHeight: "300px" }),
  md: withLayer({ minHeight: "300px" }),
  lg: withLayer({ minHeight: "300px" }),
  full: withLayer({ minHeight: "100vh" }),
} satisfies Record<TModalHeight, ComplexStyleRule>);
