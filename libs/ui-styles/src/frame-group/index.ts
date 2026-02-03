import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { clsx } from "clsx";
import { frameBorderSizeClass } from "../frame/frame.css";
import { CSSProperties } from "../utils/types";
import {
  frameGroupClass,
  frameGroupDirectionClass,
  frameGroupSeparatorClass,
  frameGroupSeparatorDirectionClass,
  frameGroupSeparatorVariantClass,
  frameGroupVariantsClass,
  layer,
} from "./frameGroup.css";

export { layer };

export interface FrameGroupStylesParams {
  direction: "horizontal" | "vertical";
  color: TPaletteColor | undefined;
  variant: TDesignVariant;
}

export function frameGroupStyles(params: FrameGroupStylesParams): [className: string, styles: CSSProperties] {
  const { direction, color, variant } = params;

  return [
    clsx(
      frameGroupClass,
      frameGroupDirectionClass[direction],
      frameBorderSizeClass[variant],
      frameGroupVariantsClass[variant],
      color && dynamicColor[color],
    ),
    {},
  ];
}

export interface FrameGroupSeparatorStylesParams {
  direction: "horizontal" | "vertical";
  variant: TDesignVariant;
}

export function frameGroupSeparatorStyles(
  params: FrameGroupSeparatorStylesParams,
): [className: string, styles: CSSProperties] {
  const { direction, variant } = params;

  return [
    clsx(
      frameGroupSeparatorClass,
      frameGroupSeparatorDirectionClass[direction],
      frameGroupSeparatorVariantClass[variant],
    ),
    {},
  ];
}
