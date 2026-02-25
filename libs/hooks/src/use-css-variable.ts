import { customAlphabet } from "nanoid";
import { useState } from "react";

const randomShortId = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);

/**
 * Generate a random CSS variable name with the given prefix.
 * @param prefix Optional prefix for the CSS variable name.
 * @param length Optional length for the random part of the CSS variable name. Default is 6.
 * @returns A random CSS variable name with the given prefix.
 */
export function useCssVariable(prefix?: string, length: number = 6): string {
  return useState(() => `--${prefix ? `${prefix}-` : ""}${randomShortId(length)}`)[0];
}
