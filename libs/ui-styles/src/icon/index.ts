import { sizeToRemString, TDesignHeight } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { designContentSizeVar } from "../common/index.js";
import { CSSProperties } from "../utils/types.js";
import { iconClass } from "./icon.css.js";

export function iconStyles(size: TDesignHeight | undefined): [classNames: string, styles: CSSProperties] {
  return [
    iconClass,
    assignInlineVars({
      [designContentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  ];
}
