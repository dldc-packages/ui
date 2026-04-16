import { TLook, look } from "../utils/look";

import { checkboxClass } from "./checkbox.css";

export function createCheckboxLook(): TLook {
  return look(checkboxClass);
}
