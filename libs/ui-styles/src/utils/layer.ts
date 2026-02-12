export const layer = "dldc.ui-styles";

export function withLayer<const Value>(rule: Value) {
  return { "@layer": { [layer]: rule } };
}
