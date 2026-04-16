import { TLook, look } from "../utils/look";

import { backdropClass } from "./backdrop.css";

export function createBackdropLook(): TLook {
  return look(backdropClass);
}
