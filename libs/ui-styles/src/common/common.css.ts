import { sizeToRemString } from "@dldc/ui-core/size";
import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const layer = "dldc.ui-styles.common";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export const designHeightVar = createVar(
  { syntax: "<length>", inherits: false, initialValue: sizeToRemString(7) },
  "design-height",
);

export const designRoundedVar = createVar(
  { syntax: "<length>", inherits: false, initialValue: sizeToRemString(1) },
  "design-rounded",
);

export const designContentSizeVar = createVar(
  { syntax: "<length>", inherits: true, initialValue: sizeToRemString(4) },
  "design-content-size",
);

export const designHeightClass = style(
  withLayer({
    minHeight: designHeightVar,
  }),
);

export const designRoundedClass = style(
  withLayer({
    borderRadius: designRoundedVar,
    ["cornerShape" as any]: "superellipse(1.5)",
  }),
);

export const designContentSizeClass = style(
  withLayer({
    lineHeight: designContentSizeVar,
    fontSize: calc.multiply(designContentSizeVar, 0.88),
  }),
);
