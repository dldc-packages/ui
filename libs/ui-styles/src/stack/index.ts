import { look, TLook } from "../utils/look";

import { stackClass } from "./stack.css";

export { stackClass };

export type TCreateStackLookParams = Parameters<typeof stackClass>[0];

export function createHStackLook(params?: Omit<TCreateStackLookParams, "direction">): TLook {
  return look(stackClass({ direction: "row", ...params }));
}

export function createVStackLook(params?: Omit<TCreateStackLookParams, "direction">): TLook {
  return look(stackClass({ direction: "column", ...params }));
}
