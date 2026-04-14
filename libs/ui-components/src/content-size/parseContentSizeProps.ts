import { parseMaybeSize, TDesignLength } from "@dldc/ui-core/size";

import { TContentSizePropValue } from "./types";

export function parseContentSizeProps(size?: TContentSizePropValue): null | number | "parentSize" {
  if (size === undefined) {
    return null;
  }
  if (size === "parentSize") {
    return "parentSize";
  }
  size satisfies TDesignLength;
  return parseMaybeSize(size);
}
