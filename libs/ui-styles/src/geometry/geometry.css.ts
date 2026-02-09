import { geometryPaddingVar, geometryRoundedVar } from "@dldc/ui-core/geometry";
import { style, styleVariants } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.geometry";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

export const geometryRoundedClass = style(
  withLayer({
    borderRadius: geometryRoundedVar,
    ["cornerShape" as any]: "superellipse(1.5)",
  }),
);

export const geometrySpacing = styleVariants({
  paddingLeft: withLayer({ paddingLeft: geometryPaddingVar }),
  paddingRight: withLayer({ paddingRight: geometryPaddingVar }),
  paddingTop: withLayer({ paddingTop: geometryPaddingVar }),
  paddingBottom: withLayer({ paddingBottom: geometryPaddingVar }),
  paddingX: withLayer({ paddingLeft: geometryPaddingVar, paddingRight: geometryPaddingVar }),
  paddingY: withLayer({ paddingTop: geometryPaddingVar, paddingBottom: geometryPaddingVar }),
  padding: withLayer({ padding: geometryPaddingVar }),
  gap: withLayer({ gap: geometryPaddingVar }),
});
