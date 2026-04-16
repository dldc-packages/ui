import { TLook, look } from "../utils/look";

import { ellipsisClass } from "./ellipsis.css";

export function createEllipsisLook(): TLook {
  return look(ellipsisClass);
}
