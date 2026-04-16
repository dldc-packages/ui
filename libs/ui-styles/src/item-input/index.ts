import { look, TLook } from "../utils/look";

import { itemInputContentClass } from "./itemInput.css";

export function createItemInputLook(): TLook {
  return look(itemInputContentClass);
}
