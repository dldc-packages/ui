import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { CSSProperties } from "../utils/types";

import { iconClass, iconDisplayVariantClass } from "./icon.css";

export function iconStyles(
  size: TDesignSize | undefined,
  inline: boolean,
): [classNames: string, styles: CSSProperties] {
  return [
    clsx(iconClass, iconDisplayVariantClass[inline ? "inlineFlex" : "flex"]),
    assignInlineVars({
      [contentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  ];
}
