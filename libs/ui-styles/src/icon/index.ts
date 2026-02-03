import { sizeToRemString, TDesignHeight } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { designContentSizeVar } from "../common/index";
import { CSSProperties } from "../utils/types";
import { iconClass, layer } from "./icon.css";

export { layer };

export function iconStyles(size: TDesignHeight | undefined): [classNames: string, styles: CSSProperties] {
  return [
    iconClass,
    assignInlineVars({
      [designContentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  ];
}
