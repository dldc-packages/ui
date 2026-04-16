import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { look, TLook } from "../utils/look";

import { iconClass, iconDisplayVariantClass } from "./icon.css";

export interface TCreateIconLookParams {
  size: TDesignSize | undefined;
  inline: boolean;
}

export function createIconLook(params: TCreateIconLookParams): TLook {
  const { size, inline } = params;
  return look(
    clsx(iconClass, iconDisplayVariantClass[inline ? "inlineFlex" : "flex"]),
    assignInlineVars({
      [contentSizeVar]: size ? sizeToRemString(size) : undefined,
    }),
  );
}
