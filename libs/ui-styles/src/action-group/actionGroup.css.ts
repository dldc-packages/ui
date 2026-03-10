import { colorsVars, dynamicColorVars, opacity } from "@dldc/ui-core/colors";
import {
  _after,
  _before,
  _betweenChild,
  _firstChild,
  _lastChild,
  isAfter,
  isBefore,
  isHover,
} from "@dldc/ui-core/conditions";
import { sizeToRemString } from "@dldc/ui-core/size";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { ComplexStyleRule, createVar, globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { varsWithLayer, withLayer } from "../utils/layer";

import { actionInteractiveClass, borderWidthVar } from "../action/action.css";

const separatorWidthVar = createVar(
  { syntax: "length", initialValue: sizeToRemString("0_x"), inherits: true },
  "separator-width",
);

export const partialSeparatorPaddingVar = createVar(
  { syntax: "length", initialValue: sizeToRemString("0x"), inherits: true },
  "partial-separator-padding",
);

export const actionGroupClass = style(
  withLayer({
    display: "inline-flex",
    position: "relative",
    isolation: "isolate",
  }),
);

/**
 * Set separator width based on variant
 */
export const actionGroupVariantsClass = styleVariants({
  solid: varsWithLayer({
    [separatorWidthVar]: sizeToRemString("0_x"),
  }),
  surface: varsWithLayer({
    [separatorWidthVar]: sizeToRemString("0__x"),
  }),
  subtle: varsWithLayer({
    [separatorWidthVar]: sizeToRemString("0_x"),
  }),
  ghost: varsWithLayer({
    [separatorWidthVar]: sizeToRemString("0_x"),
  }),
  input: varsWithLayer({
    [separatorWidthVar]: sizeToRemString("0_x"),
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

/**
 * Ensure children have higher z-index than separators
 * This is important when the after/border is on top of the separator
 */
globalStyle(`${actionGroupClass} ${_firstChild}`, withLayer({ zIndex: 2, position: "relative" }));
globalStyle(`${actionGroupClass} ${_betweenChild}`, withLayer({ zIndex: 2, position: "relative" }));
globalStyle(`${actionGroupClass} ${_lastChild}`, withLayer({ zIndex: 2, position: "relative" }));

export const actionGroupDirectionClass = styleVariants({
  horizontal: withLayer({ flexDirection: "row" }),
  vertical: withLayer({ flexDirection: "column" }),
});

const CHILD_CASES = [
  {
    baseClass: actionGroupDirectionClass.horizontal,
    TopRight: "TopRight",
    BottomRight: "BottomRight",
    TopLeft: "TopLeft",
    BottomLeft: "BottomLeft",
    Right: "Right",
    Left: "Left",
    Top: "Top",
    Bottom: "Bottom",
    right: "right",
    left: "left",
    top: "top",
    bottom: "bottom",
    height: "height",
  },
  {
    baseClass: actionGroupDirectionClass.vertical,
    TopRight: "BottomRight",
    BottomRight: "BottomLeft",
    TopLeft: "TopRight",
    BottomLeft: "TopLeft",
    Right: "Bottom",
    Left: "Top",
    Top: "Right",
    Bottom: "Left",
    right: "bottom",
    left: "top",
    top: "right",
    bottom: "left",
    height: "width",
  },
];

export const actionGroupSeparatorVariantClass = styleVariants({
  none: {},
  full: {},
  partial: {},
} satisfies Record<"none" | "partial" | "full", ComplexStyleRule>);

export const actionGroupSeparatorActionVariantClass = styleVariants({
  solid: withLayer({
    backgroundColor: dynamicColorVars[600],
    selectors: {
      [_after]: {
        backgroundColor: opacity(colorsVars.black, 20),
      },
    },
  }),
  surface: withLayer({
    backgroundColor: opacity(colorsVars.white, 5),
    selectors: {
      [_after]: {
        backgroundColor: opacity(colorsVars.white, 10),
      },
    },
  }),
  subtle: {},
  ghost: {},
  input: withLayer({
    backgroundColor: opacity(colorsVars.black, 15),
    selectors: {
      [_after]: {
        backgroundColor: opacity(colorsVars.black, 30),
      },
    },
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

CHILD_CASES.forEach(
  ({
    baseClass,
    TopRight,
    BottomRight,
    BottomLeft,
    TopLeft,
    Right,
    Left,
    Top,
    Bottom,
    right,
    left,
    top,
    bottom,
    height,
  }) => {
    // Remove radius inside
    globalStyle(
      `${baseClass} ${_firstChild}`,
      withLayer({ [`border${TopRight}Radius`]: 0, [`border${BottomRight}Radius`]: 0 }),
    );
    globalStyle(`${baseClass} ${_betweenChild}`, withLayer({ borderRadius: 0 }));
    globalStyle(
      `${baseClass} ${_lastChild}`,
      withLayer({ [`border${TopLeft}Radius`]: 0, [`border${BottomLeft}Radius`]: 0 }),
    );

    // Remove border inside
    globalStyle(`${baseClass} ${_firstChild + isBefore}`, withLayer({ [`border${Right}Width`]: 0 }));
    globalStyle(
      `${baseClass} ${_betweenChild + isBefore}`,
      withLayer({ [`border${Left}Width`]: 0, [`border${Right}Width`]: 0 }),
    );
    globalStyle(`${baseClass} ${_lastChild + isBefore}`, withLayer({ [`border${Left}Width`]: 0 }));

    // Align focus border with separator outside
    globalStyle(`${baseClass} ${_firstChild + isAfter}`, withLayer({ [right]: calc.negate(separatorWidthVar) }));
    globalStyle(
      `${baseClass} ${_betweenChild + isAfter}`,
      withLayer({ [left]: calc.negate(separatorWidthVar), [right]: calc.negate(separatorWidthVar) }),
    );
    globalStyle(`${baseClass} ${_lastChild + isAfter}`, withLayer({ [left]: calc.negate(separatorWidthVar) }));

    // Custom style for partial separator
    globalStyle(
      `${baseClass} > ${actionGroupSeparatorVariantClass.partial}`,
      withLayer({
        [_after]: { [top]: partialSeparatorPaddingVar, [bottom]: partialSeparatorPaddingVar },
      }),
    );

    // Reproduce border when partial
    globalStyle(
      `${baseClass} > ${actionGroupSeparatorVariantClass.partial}`,
      withLayer({
        [_before]: {
          [`border${Top}Width`]: borderWidthVar,
          [`border${Bottom}Width`]: borderWidthVar,
        },
      }),
    );

    // Special case for subtle where the separator is a hole.
    globalStyle(
      `${baseClass} > ${actionGroupSeparatorVariantClass.partial}${actionGroupSeparatorActionVariantClass.subtle}`,
      withLayer({
        [_before]: {
          [top]: 0,
          [bottom]: "auto",
          [height]: partialSeparatorPaddingVar,
        },
        [_after]: {
          [bottom]: 0,
          [top]: "auto",
          [height]: partialSeparatorPaddingVar,
        },
      }),
    );
  },
);

globalStyle(
  `${actionGroupSeparatorVariantClass.partial}${actionGroupSeparatorActionVariantClass.surface}`,
  withLayer({
    [_before]: {
      borderColor: opacity(colorsVars.white, 10),
    },
  }),
);

globalStyle(
  `${actionGroupSeparatorVariantClass.partial}${actionGroupSeparatorActionVariantClass.input}`,
  withLayer({
    [_before]: {
      borderColor: opacity(colorsVars.black, 30),
    },
  }),
);

globalStyle(
  `${actionGroupSeparatorVariantClass.partial}${actionGroupSeparatorActionVariantClass.subtle}`,
  withLayer({
    [_before]: {
      backgroundColor: opacity(colorsVars.white, 5),
    },
    [_after]: {
      backgroundColor: opacity(colorsVars.white, 5),
    },
  }),
);

export const actionGroupSeparatorClass = style(
  withLayer({
    alignSelf: "stretch",
    position: "relative",
    zIndex: 1,
    selectors: {
      // Used to reproduce border
      [_before]: {
        pointerEvents: "none",
        content: "''",
        position: "absolute",
        inset: 0,
      },

      // Used to create the actual separator
      [_after]: {
        pointerEvents: "none",
        content: "''",
        position: "absolute",
        inset: 0,
      },
    },
  }),
);

export const actionGroupSeparatorDirectionClass = styleVariants({
  horizontal: withLayer({ width: separatorWidthVar }),
  vertical: withLayer({ height: separatorWidthVar }),
});

/**
 * Special case for Surface variant: when an action is hovered rigth before of after the separator,
 * the separator :before should have same color as the hovered action border
 */
globalStyle(
  `${actionGroupSeparatorActionVariantClass.surface}:has(+ ${actionInteractiveClass + isHover})`,
  withLayer({ backgroundColor: opacity(colorsVars.white, 10) }),
);

globalStyle(
  `${actionInteractiveClass + isHover} + ${actionGroupSeparatorActionVariantClass.surface}`,
  withLayer({ backgroundColor: opacity(colorsVars.white, 10) }),
);
