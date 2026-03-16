import { BaseRecord } from "@dldc/react-utils/props-splitters";
import { keysOfType } from "@dldc/utils/keys-of-type";

import { TVariantProps } from "./types";

const VARIANTS_KEYS = keysOfType<TVariantProps>({ hoverVariant: null, variant: null });

export function variantPropsSplitter(props: BaseRecord): TVariantProps {
  const result: TVariantProps = {};
  VARIANTS_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
