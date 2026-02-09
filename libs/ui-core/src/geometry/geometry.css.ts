import { createVar } from "@vanilla-extract/css";

export const geometryRoundedVar = createVar(
  { syntax: "<length>", inherits: false, initialValue: "0" },
  "geometry-rounded",
);

export const geometryPaddingVar = createVar(
  { syntax: "<length>", inherits: false, initialValue: "0" },
  "geometry-padding",
);
