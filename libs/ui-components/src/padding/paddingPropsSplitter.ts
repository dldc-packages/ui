import { keysOfType } from "@dldc/utils/keys-of-type";
import { BaseRecord } from "@dldc/utils/props-splitters";

import { TPaddingProps } from "./types";

const KEYS = keysOfType<TPaddingProps>({ padding: null });

export function paddingPropsSplitter(props: BaseRecord): TPaddingProps {
  const result: TPaddingProps = {};
  KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
