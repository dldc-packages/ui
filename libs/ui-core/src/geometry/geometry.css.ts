import { createVar } from "@vanilla-extract/css";

/**
 * Represent the current rounded value in unit
 */
export const geometryRoundedVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-rounded",
);

/**
 * Represent the current padding value in unit
 */
export const geometryPaddingVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-padding",
);
