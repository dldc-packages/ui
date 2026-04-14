import { parseMaybeSize, TDesignLength } from "@dldc/ui-core/size";

import { TSizePropValue } from "./types";

export function parseSizeProps(size?: TSizePropValue): null | number | "autoFromContent" {
  if (size === undefined) {
    return null;
  }
  if (size === "autoFromContent") {
    return "autoFromContent";
  }
  size satisfies TDesignLength;
  return parseMaybeSize(size);
}
