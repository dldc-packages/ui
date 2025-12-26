import { parseSize } from "../../../ui-core/dist/size/index.js";
import { TDefaultDesignContext } from "./types.js";

export const BASE_HEIGHT = 7;
export const MIN_HEIGHT = 2.5;
export const BASE_HEIGHT_RATIO = 0.7;
export const BASE_ROUNDED = parseSize("1");

export const DEFAULT_DESIGN: TDefaultDesignContext = {
  height: null,
  contentHeight: null,
  rounded: null,
  spacing: null,
  variant: "surface",
  hoverVariant: null,
};

export const DESIGN_KEYS = Object.keys(DEFAULT_DESIGN) as Array<
  keyof TDefaultDesignContext
>;
