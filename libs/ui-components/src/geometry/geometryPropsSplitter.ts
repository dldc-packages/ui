import { keysOfType } from "@dldc/utils/keys-of-type";
import { BaseRecord } from "@dldc/utils/props-splitters";

import { TGeometryProps } from "./types";

const VARIANTS_KEYS = keysOfType<TGeometryProps>({ padding: null, rounded: null });

export function geometryPropsSplitter(props: BaseRecord): TGeometryProps {
  const result: TGeometryProps = {};
  VARIANTS_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
