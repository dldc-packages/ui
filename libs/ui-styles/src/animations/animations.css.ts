import { createVar, keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinClass = style({ animation: `${rotate} 3s linear infinite` });

export const traceLengthVar = createVar();

const trace = keyframes({
  "0%": { strokeDashoffset: traceLengthVar },
  "100%": { strokeDashoffset: "0" },
});

export const traceClass = style({
  animation: `${trace} 2s ease-in-out infinite`,
  animationDirection: "alternate",
  strokeDasharray: traceLengthVar,
});
