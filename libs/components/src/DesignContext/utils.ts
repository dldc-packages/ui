import { roundToSize, sizeToRem, TDesignSize } from "@dldc/design/size";
import { clamp, powerValue } from "@dldc/utils/math";
import { BASE_HEIGHT_RATIO, MIN_HEIGHT } from "./constants.js";

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

export function autoContentHeight(
  height: number,
  heightRatio = BASE_HEIGHT_RATIO
): number {
  return clamp(powerSize(height, heightRatio), MIN_HEIGHT, height);
}

export function spacingToGapRem(spacing: TDesignSize): string {
  const size = sizeToRem(spacing);
  const nested = sizeToRem(powerSize(size));
  const gap = (size - nested) / 2;
  const value = clamp(gap, 0, Infinity);
  return `${value}rem`;
}
