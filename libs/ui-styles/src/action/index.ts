import * as css from "@dldc/css-builder";
import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { UNIT_IN_REM } from "@dldc/ui-core/size";
import { contentSizeVar, paddingVar, roundedVar, sizeVar } from "@dldc/ui-core/variables";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import { roundedBorderRadiusClass } from "../rounded";
import { CSSProperties } from "../utils/types";

const QUARTER_UNIT = 0.25;
const SIZE_PADDING_PITCH = 0.36;
const SIZE_PADDING_OFFSET = -0.74;
const MIN_AUTO_PADDING = 0;
const MIN_AUTO_HEIGHT = 1;
const AUTO_ROUNDED_FACTOR = 0.25;
const EXP_DECAY = 0.7;
const MIN_AUTO_ROUNDED = 0;

import { contentSizeLineHeightClass } from "../content-size";

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

interface ActionDesignStylesParams {
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  interactive: boolean;
  highlightColor: TPaletteColor;
  highlighted: boolean;
}

export function actionDesignStyles(params: ActionDesignStylesParams): [className: string, styles: CSSProperties] {
  const { variant, color, interactive, hoverVariant, highlightColor, highlighted } = params;

  return [
    clsx(
      actionClass,
      actionVariantsClass[variant],
      interactive && actionInteractiveClass,
      interactive && actionActiveVariantsClass[hoverVariant],
      interactive && actionFocusVariantsClass[hoverVariant],
      interactive && actionDisabledVariantsClass[variant],
      color && dynamicColor[color],
      highlighted && actionHighlightClass,
      highlighted && actionHighlightColorsClass[highlightColor],
    ),
    {},
  ];
}

interface ActionLayoutStylesParams {
  padding: number | null;
  paddingVarName: string;
  parentPaddingVarName: string | null;

  rounded: number | "autoFromSize" | null;
  roundedVarName: string;
  parentRoundedVarName: string | null;

  size: number | null;
  sizeVarName: string;
  parentSizeVarName: string | null;
  defaultSize: number;

  contentSize: number | null;
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
}

export function actionLayoutStylesInline(params: ActionLayoutStylesParams): CSSProperties {
  const { paddingVarName, roundedVarName, sizeVarName, contentSizeVarName } = params;

  return assignInlineVars({
    [paddingVarName]: paddingVarValue(params),
    [roundedVarName]: roundedVarValue(params),
    [sizeVarName]: sizeVarValue(params),
    [contentSizeVarName]: contentSizeVarValue(params),

    [paddingVar]: css.serialize(css.multiply(`var(${paddingVarName})`, UNIT_IN_REM)),
    [roundedVar]: css.serialize(css.multiply(`var(${roundedVarName})`, UNIT_IN_REM)),
    [sizeVar]: css.serialize(css.multiply(`var(${sizeVarName})`, UNIT_IN_REM)),
    [contentSizeVar]: css.serialize(css.multiply(`var(${contentSizeVarName})`, UNIT_IN_REM)),
  });
}

export const actionLayoutStylesClasses = clsx(roundedBorderRadiusClass, sizeMinHeightClass, contentSizeLineHeightClass);

function paddingVarValue(params: ActionLayoutStylesParams) {
  const { padding, sizeVarName, contentSize, contentSizeVarName } = params;
  if (padding !== null) {
    return String(padding);
  }
  // If contentSize is set, padding is computed from it
  if (contentSize !== null) {
    return css.serialize(
      css.max(
        MIN_AUTO_PADDING,
        css.roundDown(css.divide(css.subtract(`var(${sizeVarName})`, `var(${contentSizeVarName})`), 2), QUARTER_UNIT),
      ),
    );
  }
  // Otherwise, padding is computed from size
  return css.serialize(
    css.max(
      MIN_AUTO_PADDING,
      css.roundDown(
        css.add(SIZE_PADDING_OFFSET, css.multiply(SIZE_PADDING_PITCH, `var(${sizeVarName})`)),
        QUARTER_UNIT,
      ),
    ),
  );
}

function roundedVarValue(params: ActionLayoutStylesParams) {
  const { rounded, parentRoundedVarName, parentPaddingVarName, sizeVarName } = params;
  if (typeof rounded === "number") {
    return String(rounded);
  }
  // Compute auto-rounded from size if we don't have parent rounded or parent padding, or if we are in autoFromSize mode
  if (rounded === "autoFromSize" || !parentRoundedVarName || !parentPaddingVarName) {
    return css.serialize(
      css.max(MIN_AUTO_ROUNDED, css.roundDown(css.multiply(`var(${sizeVarName})`, AUTO_ROUNDED_FACTOR), QUARTER_UNIT)),
    );
  }
  // Auto-rounded is computed with an exponential decay depending on the ratio between parent padding and parent rounded
  return css.serialize(
    css.max(
      MIN_AUTO_ROUNDED,
      css.roundDown(
        css.multiply(
          `var(${parentRoundedVarName})`,
          css.exp(css.multiply(-EXP_DECAY, css.divide(`var(${parentPaddingVarName})`, `var(${parentRoundedVarName})`))),
        ),
        QUARTER_UNIT,
      ),
    ),
  );
}

function sizeVarValue(params: ActionLayoutStylesParams) {
  const { size, defaultSize, parentContentSizeVarName, parentSizeVarName, parentPaddingVarName } = params;
  if (size !== null) {
    return String(size);
  }
  // If we have a parent content size we use it as size
  if (parentContentSizeVarName) {
    return `var(${parentContentSizeVarName})`;
  }
  // If for some reason we don't have content size but we have parent size and padding, we can compute size from them
  if (parentSizeVarName && parentPaddingVarName) {
    return css.serialize(
      css.max(
        MIN_AUTO_HEIGHT,
        css.subtract(`var(${parentSizeVarName})`, css.multiply(`var(${parentPaddingVarName})`, 2)),
      ),
    );
  }
  if (defaultSize !== null) {
    return String(defaultSize);
  }
  return undefined;
}

function contentSizeVarValue(params: ActionLayoutStylesParams) {
  const { contentSize, sizeVarName, paddingVarName } = params;
  if (contentSize !== null) {
    return String(contentSize);
  }
  // Auto compute from size and padding
  return css.serialize(
    css.max(MIN_AUTO_HEIGHT, css.subtract(`var(${sizeVarName})`, css.multiply(`var(${paddingVarName})`, 2))),
  );
}
