import { clamp, powerValue } from "@dldc/utils/math";
import { BASE_HEIGHT_RATIO, MIN_HEIGHT } from "./constants.js";
import { parseSize } from "./parse.js";
import { TDesignSize } from "./types.js";

export function sizeToRem(size: TDesignSize | (string & {})): number {
  const parsedSize = typeof size === "number" ? size : parseSize(size);
  return (parsedSize * 4) / 16;
}

export function sizeToRemString(size: TDesignSize | (string & {})): string {
  return `${sizeToRem(size)}rem`;
}

export function sizeToFontSize(size: TDesignSize | (string & {})) {
  const lineHeightRem = sizeToRem(size);
  const fontSizeRem = lineHeightRem - 0.56 * Math.exp(-Math.pow(1.76 - lineHeightRem, 2) / Math.pow(0.8, 2));
  const fontSizeRemRounded = Math.round(fontSizeRem * 16) / 16; // Round to 2px
  return `${fontSizeRemRounded}rem`;
}

export function roundToSize(value: number): number {
  const valRounded = Math.round(value * 2) / 2;
  return clamp(valRounded, 0, Infinity);
}

export function resolveSmallRounded(height: number): boolean {
  return height <= 4;
}

export function clampHeightRatio(value: number): number {
  return clamp(value, 0.1, 1);
}

export function powerSize(size: number, power: number = 0.68): number {
  if (size < MIN_HEIGHT) {
    return size;
  }
  const val = powerValue(size, power);
  return roundToSize(val);
}

export function autoContentHeight(height: number, heightRatio = BASE_HEIGHT_RATIO): number {
  return clamp(powerSize(height, heightRatio), MIN_HEIGHT, height);
}

export function spacingToGapRem(spacing: TDesignSize): string {
  const size = sizeToRem(spacing);
  const nested = sizeToRem(powerSize(size));
  const gap = (size - nested) / 2;
  const value = clamp(gap, 0, Infinity);
  return `${value}rem`;
}
