import { stackClass } from "./stack.css.js";

export { stackClass };

export type TStackParams = Parameters<typeof stackClass>[0];

export function hStackClass(params?: Omit<TStackParams, "direction">): string {
  return stackClass({ direction: "row", ...params });
}

export function vStackClass(params?: Omit<TStackParams, "direction">): string {
  return stackClass({ direction: "column", ...params });
}
