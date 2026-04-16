import { clsx } from "clsx";

import { look, TLook } from "../utils/look";

import {
  itemGroupClass,
  itemGroupDirectionClass,
  itemGroupSeparatorClass,
  itemGroupSeparatorDirectionClass,
} from "./itemGroup.css";

export interface TCreateItemGroupLookParams {
  direction: "horizontal" | "vertical";
}

export function createItemGroupLook(params: TCreateItemGroupLookParams): TLook {
  const { direction } = params;

  return look(clsx(itemGroupClass, itemGroupDirectionClass[direction]));
}

export interface TCreateItemGroupSeparatorLookParams {
  direction: "horizontal" | "vertical";
}

export function createItemGroupSeparatorLook(params: TCreateItemGroupSeparatorLookParams): TLook {
  const { direction } = params;

  return look(clsx(itemGroupSeparatorClass, itemGroupSeparatorDirectionClass[direction]));
}
