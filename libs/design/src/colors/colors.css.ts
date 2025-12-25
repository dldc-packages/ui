import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors.js";

export const colorsVars = createGlobalTheme(":root", colors);
