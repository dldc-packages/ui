import { colorsVars, dynamicColorVars, opacity, TPaletteColor } from "@dldc/ui-core/colors";
import {
  _after,
  _before,
  _disabledHover,
  _focusWithin,
  _focusWithinVisible,
  _hover,
  isAfter,
  isBefore,
  isDisabled,
  isFocusWithin,
  isHover,
} from "@dldc/ui-core/conditions";
import { sizeToRemString } from "@dldc/ui-core/size";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { ComplexStyleRule, createVar, globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.action";

function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}

const borderWidthVar = createVar("border-width");
const focusBorderWidthVar = createVar("focus-border-width");

export const actionClass = style(
  withLayer({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    outline: "none",
    position: "relative",

    selectors: {
      // Used for visual border for input and surface variants
      [_before]: {
        borderRadius: "inherit",
        ["cornerShape" as any]: "inherit",
        pointerEvents: "none",
        content: "''",
        position: "absolute",
        inset: 0,
        borderWidth: borderWidthVar,
      },
      // Used for focus and highlight border
      [_after]: {
        borderRadius: "inherit",
        ["cornerShape" as any]: "inherit",
        pointerEvents: "none",
        content: "''",
        position: "absolute",
        inset: 0,
      },
    },
  }),
);

function varsWithLayer(vars: Record<string, string>): ComplexStyleRule {
  return withLayer({
    vars,
  });
}

export const actionBorderSizeClass = styleVariants({
  solid: varsWithLayer({
    [borderWidthVar]: sizeToRemString("0"),
    [focusBorderWidthVar]: sizeToRemString("0x"),
  }),
  surface: varsWithLayer({
    [borderWidthVar]: sizeToRemString("0__x"),
    [focusBorderWidthVar]: sizeToRemString("0_x"),
  }),
  subtle: varsWithLayer({
    [borderWidthVar]: sizeToRemString("0"),
    [focusBorderWidthVar]: sizeToRemString("0_x"),
  }),
  ghost: varsWithLayer({
    [borderWidthVar]: sizeToRemString("0"),
    [focusBorderWidthVar]: sizeToRemString("0_x"),
  }),
  input: varsWithLayer({
    [borderWidthVar]: sizeToRemString("0_x"),
    [focusBorderWidthVar]: sizeToRemString("0_x"),
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

export const actionVariantsClass = styleVariants({
  solid: withLayer({
    backgroundColor: dynamicColorVars[600],
    color: dynamicColorVars[200],
  }),
  surface: withLayer({
    backgroundColor: opacity(colorsVars.white, 5),
    color: dynamicColorVars[200],
    selectors: {
      [_before]: {
        borderColor: opacity(colorsVars.white, 10),
      },
    },
  }),
  subtle: withLayer({
    backgroundColor: opacity(colorsVars.white, 5),
    color: dynamicColorVars[200],
  }),
  ghost: withLayer({
    color: dynamicColorVars[200],
  }),
  input: withLayer({
    backgroundColor: opacity(colorsVars.black, 15),
    color: dynamicColorVars[200],
    selectors: {
      [_before]: {
        borderColor: opacity(colorsVars.black, 30),
      },
    },
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

export const actionInteractiveClass = style(
  withLayer({
    selectors: {
      [_focusWithinVisible + isAfter]: {
        borderColor: colorsVars.neutral[300],
        borderWidth: focusBorderWidthVar,
      },
    },
  }),
);

// Make icon slightly transparent by default, fully opaque on hover/focus
globalStyle(`${actionClass} [data-item-main-icon]`, withLayer({ opacity: 0.6 }));
globalStyle(`${actionInteractiveClass}${isHover} [data-item-main-icon]`, withLayer({ opacity: 1 }));
globalStyle(`${actionInteractiveClass}${isFocusWithin} [data-item-main-icon]`, withLayer({ opacity: 1 }));
// Don't change icon opacity when disabled
globalStyle(`${actionInteractiveClass}${isHover}${isDisabled} [data-item-main-icon]`, withLayer({ opacity: 0.6 }));

// Disabled styles based on variant
export const actionInteractiveVariantsClass = styleVariants({
  solid: withLayer({
    selectors: {
      [_disabledHover]: {
        backgroundColor: dynamicColorVars[800],
        color: opacity(colorsVars.neutral[200], 60),
      },
    },
  }),
  surface: withLayer({
    selectors: {
      [_disabledHover]: {
        color: opacity(dynamicColorVars[200], 40),
        backgroundColor: opacity(colorsVars.white, 3),
      },
    },
  }),
  subtle: withLayer({
    selectors: {
      [_disabledHover]: {
        color: opacity(dynamicColorVars[200], 40),
        backgroundColor: opacity(colorsVars.white, 3),
      },
    },
  }),
  ghost: withLayer({
    selectors: {
      [_disabledHover]: {
        color: opacity(dynamicColorVars[200], 40),
        backgroundColor: "transparent",
      },
    },
  }),
  input: withLayer({
    selectors: {
      [_disabledHover]: {
        color: opacity(dynamicColorVars[200], 40),
        backgroundColor: opacity(colorsVars.black, 3),
      },
      [_focusWithinVisible + isAfter]: {
        borderColor: opacity(dynamicColorVars[300], 40),
      },
    },
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

// Icons don't like opacity on fill color, so instead we set colro + opacity
globalStyle(
  `${actionInteractiveVariantsClass.solid}${isDisabled} svg`,
  withLayer({
    color: colorsVars.neutral[200],
    opacity: 0.4,
  }),
);
globalStyle(
  `${actionInteractiveVariantsClass.surface}${isDisabled} svg`,
  withLayer({
    color: colorsVars.neutral[200],
    opacity: 0.4,
  }),
);
globalStyle(
  `${actionInteractiveVariantsClass.subtle}${isDisabled} svg`,
  withLayer({
    color: colorsVars.neutral[200],
    opacity: 0.4,
  }),
);
globalStyle(
  `${actionInteractiveVariantsClass.ghost}${isDisabled} svg`,
  withLayer({
    color: colorsVars.neutral[200],
    opacity: 0.4,
  }),
);
globalStyle(
  `${actionInteractiveVariantsClass.input}${isDisabled} svg`,
  withLayer({
    color: colorsVars.neutral[200],
    opacity: 0.4,
  }),
);

export const actionInteractiveHoverVariantsClass = styleVariants({
  solid: withLayer({
    selectors: {
      [_hover]: {
        backgroundColor: dynamicColorVars[500],
        color: colorsVars.neutral[100],
      },
      [_hover + isBefore]: {
        borderWidth: 0,
      },
      [_focusWithin]: {
        backgroundColor: dynamicColorVars[500],
        color: colorsVars.neutral[100],
      },
      [_focusWithin + isBefore]: {
        borderWidth: 0,
      },
      // Special focus style for solid variant
      [_focusWithinVisible]: {
        backgroundColor: dynamicColorVars[700],
        color: colorsVars.neutral[100],
      },
      [_focusWithinVisible + isAfter]: {
        borderColor: colorsVars.neutral[200],
        borderWidth: sizeToRemString("0x"),
      },
    },
  }),
  surface: withLayer({
    [_hover]: {
      backgroundColor: opacity(colorsVars.white, 10),
      color: dynamicColorVars[100],
    },
    [_hover + isBefore]: {
      borderColor: opacity(colorsVars.white, 10),
    },
    [_focusWithin]: {
      backgroundColor: opacity(colorsVars.white, 10),
      color: dynamicColorVars[100],
    },
    [_focusWithin + isBefore]: {
      borderColor: opacity(colorsVars.white, 10),
    },
  }),
  subtle: withLayer({
    [_hover]: {
      backgroundColor: opacity(colorsVars.white, 10),
      color: dynamicColorVars[100],
    },
    [_hover + isBefore]: {
      borderWidth: 0,
    },
    [_focusWithin]: {
      backgroundColor: opacity(colorsVars.white, 10),
      color: dynamicColorVars[100],
    },
    [_focusWithin + isBefore]: {
      borderWidth: 0,
    },
  }),
  ghost: withLayer({
    [_hover]: {
      backgroundColor: opacity(colorsVars.white, 5),
      color: dynamicColorVars[100],
    },
    [_hover + isBefore]: {
      borderWidth: 0,
    },
    [_focusWithin]: {
      backgroundColor: opacity(colorsVars.white, 5),
      color: dynamicColorVars[100],
    },
    [_focusWithin + isBefore]: {
      borderWidth: 0,
    },
  }),
  input: withLayer({
    [_hover]: {
      backgroundColor: opacity(colorsVars.black, 5),
      color: dynamicColorVars[100],
    },
    [_hover + isBefore]: {
      borderColor: opacity(colorsVars.black, 30),
    },
    [_focusWithin]: {
      backgroundColor: opacity(colorsVars.black, 5),
      color: dynamicColorVars[100],
    },
    [_focusWithin + isBefore]: {
      borderColor: opacity(colorsVars.black, 30),
    },
  }),
} satisfies Record<TDesignVariant, ComplexStyleRule>);

export const actionHighlightClass = style(
  withLayer({
    selectors: {
      [_after]: {
        borderWidth: sizeToRemString("0x"),
      },
    },
  }),
);

function afterWithLayer<const Value>(rule: Value) {
  return withLayer({
    selectors: {
      [_after]: rule,
    },
  });
}

export const actionHighlightColorsClass = styleVariants({
  red: afterWithLayer({ borderColor: colorsVars.red[600] }),
  orange: afterWithLayer({ borderColor: colorsVars.orange[600] }),
  amber: afterWithLayer({ borderColor: colorsVars.amber[600] }),
  yellow: afterWithLayer({ borderColor: colorsVars.yellow[600] }),
  lime: afterWithLayer({ borderColor: colorsVars.lime[600] }),
  green: afterWithLayer({ borderColor: colorsVars.green[600] }),
  emerald: afterWithLayer({ borderColor: colorsVars.emerald[600] }),
  teal: afterWithLayer({ borderColor: colorsVars.teal[600] }),
  cyan: afterWithLayer({ borderColor: colorsVars.cyan[600] }),
  sky: afterWithLayer({ borderColor: colorsVars.sky[600] }),
  blue: afterWithLayer({ borderColor: colorsVars.blue[600] }),
  indigo: afterWithLayer({ borderColor: colorsVars.indigo[600] }),
  violet: afterWithLayer({ borderColor: colorsVars.violet[600] }),
  purple: afterWithLayer({ borderColor: colorsVars.purple[600] }),
  fuchsia: afterWithLayer({ borderColor: colorsVars.fuchsia[600] }),
  pink: afterWithLayer({ borderColor: colorsVars.pink[600] }),
  rose: afterWithLayer({ borderColor: colorsVars.rose[600] }),
  gray: afterWithLayer({ borderColor: colorsVars.gray[600] }),
  slate: afterWithLayer({ borderColor: colorsVars.slate[600] }),
  neutral: afterWithLayer({ borderColor: colorsVars.neutral[600] }),
  stone: afterWithLayer({ borderColor: colorsVars.stone[600] }),
  zinc: afterWithLayer({ borderColor: colorsVars.zinc[600] }),
} satisfies Record<TPaletteColor, ComplexStyleRule>);
