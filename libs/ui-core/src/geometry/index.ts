export { geometryPaddingVar, geometryRoundedVar } from "./geometry.css";

/**
 * Given a parent radius and a distance, compute the nested radius using a formula that is linear when the distance is small but then reduces the speed at which the inner radius decreases when the distance increases.
 *
 * Desmos Code
 * p=20
 * t=5
 * k=1
 * f_{1}\left(x\right)=\max(0,p-x)\left\{x\le t\right\}
 * f_{2}\left(x\right)=\max\left(0,\left(p-t\right)\cdot\exp\left(-k\frac{\left(x-t\right)}{\left(p-t\right)}\right)\right)\left\{x\ge t\right\}
 *
 * @param parentRadius Radius of the parent element
 * @param distance Distance from the parent border to the nested element border
 * @param constantThreshold Distance at which the formula starts to reduce the speed of decrease of the inner radius, if the distance is below this threshold, the formula is linear. Default is 8.
 * @param decay Decay factor for the exponential part of the formula. Higher values make the radius decrease faster after the threshold. Default is 1.
 * @returns
 */
export function nestedRadius(parentRadius: number, distance: number, constantThreshold = 1, decay = 1): number {
  if (distance <= constantThreshold) {
    return Math.max(0, parentRadius - distance);
  }
  // Use decay function
  const offset = parentRadius - constantThreshold;
  return Math.max(0, offset * Math.exp(-decay * ((distance - constantThreshold) / offset)));
}
