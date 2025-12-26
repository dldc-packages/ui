export function serializeSize(size: number): string {
  const base = size >= 0 ? Math.floor(size / 4) : Math.ceil(size / 4);
  const baseStr = base.toFixed(0);
  const remainder = size % 4;
  if (remainder === 0) {
    return baseStr;
  }
  const remainderStr = (remainder / 4)
    .toString(2)
    .replace(/^-?0\.?/, "")
    .replace(/0/g, "_")
    .replace(/1/g, "x");
  return baseStr + remainderStr;
}
