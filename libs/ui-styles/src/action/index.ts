import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { clsx } from "clsx";

import { contentSizeInlineStyles, contentSizeLineHeightClass } from "../content-size";
import { paddingInlineStyles } from "../padding";
import { roundedBorderRadiusClass, roundedInlineStyles } from "../rounded";
import { sizeInlineStyles } from "../size";
import { CSSProperties } from "../utils/types";

import { sizeMinHeightClass } from "../size/size.css";
import {
  actionActiveVariantsClass,
  actionClass,
  actionDisabledVariantsClass,
  actionFocusVariantsClass,
  actionHighlightClass,
  actionHighlightColorsClass,
  actionInteractiveClass,
  actionVariantsClass,
} from "./action.css";

interface ActionDesignClassParams {
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  interactive: boolean;
  highlightColor: TPaletteColor;
  highlighted: boolean;
}

export function actionDesignClass(params: ActionDesignClassParams): string {
  const { variant, color, interactive, hoverVariant, highlightColor, highlighted } = params;

  return clsx(
    actionClass,
    actionVariantsClass[variant],
    interactive && actionInteractiveClass,
    interactive && actionActiveVariantsClass[hoverVariant],
    interactive && actionFocusVariantsClass[hoverVariant],
    interactive && actionDisabledVariantsClass[variant],
    color && dynamicColor[color],
    highlighted && actionHighlightClass,
    highlighted && actionHighlightColorsClass[highlightColor],
  );
}

interface ActionLayoutStylesParams {
  padding: number | null;
  paddingVarName: string;
  parentPaddingVarName: string | null;
  defaultPadding: number;

  rounded: number | "autoFromSize" | null;
  roundedVarName: string | null;
  parentRoundedVarName: string | null;
  defaultRounded: number;

  size: null | number | "autoFromContent";
  sizeVarName: string;
  parentSizeVarName: string | null;
  defaultSize: number;

  contentSize: null | number | "parentSize";
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
}

export function actionLayoutStylesInline({
  paddingVarName,
  roundedVarName,
  sizeVarName,
  contentSizeVarName,
  defaultRounded,
  parentRoundedVarName,
  parentPaddingVarName,
  rounded,
  contentSize,
  padding,
  defaultPadding,
  defaultSize,
  parentContentSizeVarName,
  parentSizeVarName,
  size,
}: ActionLayoutStylesParams): CSSProperties {
  return {
    ...roundedInlineStyles({
      defaultRounded,
      parentPaddingVarName,
      parentRoundedVarName,
      rounded,
      roundedVarName,
      sizeVarName,
    }),
    ...paddingInlineStyles({
      defaultPadding,
      paddingVarName,
      sizeVarName,
      contentSize,
      contentSizeVarName,
      padding,
    }),
    ...sizeInlineStyles({
      defaultSize,
      parentContentSizeVarName,
      parentPaddingVarName,
      parentSizeVarName,
      paddingVarName,
      size,
      sizeVarName,
      contentSizeVarName,
    }),
    ...contentSizeInlineStyles({
      contentSize,
      contentSizeVarName,
      paddingVarName,
      sizeVarName,
      parentContentSizeVarName,
    }),
  };
}

export const actionLayoutStylesClasses = clsx(roundedBorderRadiusClass, sizeMinHeightClass, contentSizeLineHeightClass);
