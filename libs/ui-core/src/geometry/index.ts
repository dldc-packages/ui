export { geometryPaddingVar, geometryRoundedVar } from "./geometry.css";

export interface TNestedRadiusOptions {
  /**
   * Ratio of the parent radius that defines the threshold for the linear part of the formula. Default is 0.3, meaning that the radius will decrease linearly until the distance is equal to 30% of the parent radius
   */
  constantRatio?: number;

  /**
   * Decay factor for the exponential part of the formula. Higher values make the radius decrease faster after the threshold. Default is 1.
   */
  decay?: number;

  /**
   * Set a minimum constant, this can ensure we are always constant for smaller distances.
   */
  minConstantThreshold?: number;
}

/**
 * Given a parent radius and a distance, compute the nested radius using a formula that is linear when the distance is small but then reduces the speed at which the inner radius decreases when the distance increases.
 *
 * Desmos Code
 * p=20
 * r=0.3
 * k=1
 * t=p\cdot r
 * f_{1}\left(x\right)=\max(0,p-x)\left\{x\le t\right\}
 * f_{2}\left(x\right)=\max\left(0,\left(p-t\right)\cdot\exp\left(-k\frac{\left(x-t\right)}{\left(p-t\right)}\right)\right)\left\{x\ge t\right\}
 *
 * @param parentRadius Radius of the parent element
 * @param distance Distance from the parent border to the nested element border
 * @param options Options for the formula, including the minimum constant threshold, the ratio of the parent radius that defines the threshold for the linear part of the formula, and the decay factor for the exponential part of the formula
 */
export function nestedRadius(
  parentRadius: number,
  distance: number,
  { minConstantThreshold = 0, constantRatio = 0.2, decay = 1 }: TNestedRadiusOptions = {},
): number {
  const constantThreshold = Math.max(minConstantThreshold, parentRadius * constantRatio);
  if (distance <= constantThreshold) {
    return Math.max(0, parentRadius - distance);
  }
  // Use decay function
  const offset = parentRadius - constantThreshold;
  return Math.max(0, offset * Math.exp(-decay * ((distance - constantThreshold) / offset)));
}
