import { createVar } from "@vanilla-extract/css";

export const geometryRoundedPropVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-rounded-prop",
);

export const geometryRoundedVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-rounded",
);

export const geometryPaddingVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-padding",
);

export const geometryRoundedParentVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-rounded-parent",
);

export const geometryPaddingParentVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: "0" },
  "geometry-padding-parent",
);
