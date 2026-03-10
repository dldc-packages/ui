import { keysOfType } from "@dldc/utils/keys-of-type";
import { BaseRecord } from "@dldc/utils/props-splitters";

import { TContentSizeProps } from "./types";

const CONTENT_SIZE_KEYS = keysOfType<TContentSizeProps>({ contentSize: null });

export function contentSizePropsSplitter(props: BaseRecord): TContentSizeProps {
  const result: TContentSizeProps = {};
  CONTENT_SIZE_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}
