import { createVar, keyframes, style } from "@vanilla-extract/css";

export const layer = "dldc.ui-styles.animations";

const rotateKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const traceLengthVar = createVar();
const traceKeyframes = keyframes({
  "0%": { strokeDashoffset: traceLengthVar },
  "100%": { strokeDashoffset: "0" },
});

export const spinClass = style({
  "@layer": {
    [layer]: { animation: `${rotateKeyframes} 3s linear infinite` },
  },
});

export const traceClass = style({
  "@layer": {
    [layer]: {
      animation: `${traceKeyframes} 2s ease-in-out infinite`,
      animationDirection: "alternate",
      strokeDasharray: traceLengthVar,
    },
  },
});
