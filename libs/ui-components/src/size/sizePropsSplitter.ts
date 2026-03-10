import { keysOfType } from "@dldc/utils/keys-of-type";
import { BaseRecord } from "@dldc/utils/props-splitters";

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
