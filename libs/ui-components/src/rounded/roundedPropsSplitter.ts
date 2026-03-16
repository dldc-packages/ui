import { BaseRecord } from "@dldc/react-utils/props-splitters";
import { keysOfType } from "@dldc/utils/keys-of-type";

import { TRoundedProps } from "./types";

const KEYS = keysOfType<TRoundedProps>({ rounded: null });

export function roundedPropsSplitter(props: BaseRecord): TRoundedProps {
  const result: TRoundedProps = {};
  KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
