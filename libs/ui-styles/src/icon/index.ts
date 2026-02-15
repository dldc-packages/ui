import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { designContentSizeVar } from "../common/index";
import { CSSProperties } from "../utils/types";
import { iconClass } from "./icon.css";

export function iconStyles(size: TDesignSize | undefined): [classNames: string, styles: CSSProperties] {
  return [
    iconClass,
    assignInlineVars({
      [designContentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  ];
}
