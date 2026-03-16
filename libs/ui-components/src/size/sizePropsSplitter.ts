import { BaseRecord } from "@dldc/react-utils/props-splitters";
import { keysOfType } from "@dldc/utils/keys-of-type";

import { TSizeProps } from "./types";

const SIZE_KEYS = keysOfType<TSizeProps>({ size: null });

export function sizePropsSplitter(props: BaseRecord): TSizeProps {
  const result: TSizeProps = {};
  SIZE_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
