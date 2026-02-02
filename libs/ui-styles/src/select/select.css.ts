import { globalStyle, style } from "@vanilla-extract/css";
import {
  _after,
  _disabledHover,
  _focusWithin,
  _focusWithinVisible,
  _hover,
  isAfter,
  isDisabled,
  isFocusWithin,
  isHover,
  _disabledActiveItem,
  _activeItem,
} from "@dldc/ui-core/conditions";
import { colorsVars, dynamicColorVars, opacity } from "@dldc/ui-core/colors";
import { sizeToRemString } from "@dldc/ui-core/size";

export const listWrappertClass = style({
  display: "flex",
  flexDirection: "column",
});

export const selectPopoverClass = style({
  zIndex: 50,
  outline: "none",
  // Used for focus ring
  [_after]: {
    borderRadius: "inherit",
    ["cornerShape" as any]: "inherit",
    pointerEvents: "none",
    content: "''",
    position: "absolute",
    inset: 0,
  },
  [_focusWithinVisible + isAfter]: {
    borderColor: colorsVars.neutral[300],
    borderWidth: sizeToRemString("0_x"),
  },
});

export const listItemClass = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  outline: "none",
  position: "relative",
  color: dynamicColorVars[200],

  selectors: {
    [_activeItem]: {
      backgroundColor: dynamicColorVars[600],
      color: dynamicColorVars[200],
    },
    [_disabledActiveItem]: {
      color: opacity(dynamicColorVars[200], 40),
      backgroundColor: "transparent",
    },
  },
});

// Make icon slightly transparent by default, fully opaque on hover/focus
globalStyle(`${listItemClass} [data-item-main-icon]`, { opacity: 0.6 });
globalStyle(`${listItemClass}${isHover} [data-item-main-icon]`, { opacity: 1 });
globalStyle(`${listItemClass}${isFocusWithin} [data-item-main-icon]`, { opacity: 1 });
// Don't change icon opacity when disabled
globalStyle(`${listItemClass}${isHover}${isDisabled} [data-item-main-icon]`, { opacity: 0.6 });

// Icons don't like opacity on fill color, so instead we set colro + opacity
globalStyle(`${listItemClass}${isDisabled} svg`, {
  color: colorsVars.neutral[200],
  opacity: 0.4,
});
