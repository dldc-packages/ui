import { TDefaultDesignContext } from "./types";

export const BASE_HEIGHT = 7;
export const MIN_HEIGHT = 2.5;
export const BASE_HEIGHT_RATIO = 0.7;

export const DEFAULT_DESIGN: TDefaultDesignContext = {
  height: null,
  contentHeight: null,
  spacing: null,
};

export const DESIGN_KEYS = Object.keys(DEFAULT_DESIGN) as Array<keyof TDefaultDesignContext>;
