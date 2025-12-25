import { ComplexStyleRule, styleVariants } from "@vanilla-extract/css";

export type TModalWidth = "xs" | "sm" | "md" | "lg" | "full";

export const modalWidthClass = styleVariants({
  xs: { maxWidth: "460px" },
  sm: { maxWidth: "600px" },
  md: { maxWidth: "800px" },
  lg: { maxWidth: "1200px" },
  full: {},
} satisfies Record<TModalWidth, ComplexStyleRule>);

export type TModalHeight = "xs" | "sm" | "md" | "lg" | "full";

export const modalHeightClass = styleVariants({
  xs: {},
  sm: { height: "300px" },
  md: { height: "300px" },
  lg: { height: "300px" },
  full: { height: "100%" },
} satisfies Record<TModalHeight, ComplexStyleRule>);

export const modalHeightInnerScrollClass = styleVariants({
  xs: {},
  sm: { minHeight: "300px" },
  md: { minHeight: "300px" },
  lg: { minHeight: "300px" },
  full: { minHeight: "100vh" },
} satisfies Record<TModalHeight, ComplexStyleRule>);
