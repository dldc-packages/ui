import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { iconClass } from "./icon.css";

export function iconStyles(size: TDesignSize | undefined): [classNames: string, styles: CSSProperties] {
  return [
    iconClass,
    assignInlineVars({
      [contentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  ];
}
