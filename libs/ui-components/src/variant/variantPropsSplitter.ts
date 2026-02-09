import { keysOfType } from "@dldc/utils/keys-of-type";
import { BaseRecord } from "@dldc/utils/props-splitters";

import { TDesignVariantProps } from "./types";

const VARIANTS_KEYS = keysOfType<TDesignVariantProps>({ hoverVariant: null, variant: null });

export function variantPropsSplitter(props: BaseRecord): TDesignVariantProps {
  const result: TDesignVariantProps = {};
  VARIANTS_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
