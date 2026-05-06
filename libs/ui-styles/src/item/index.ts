import { clsx } from "clsx";

import { contentSizeLineHeightClass, createContentSizeLook } from "../content-size";
import { createPaddingLook } from "../padding";
import { createRoundedLook, roundedBorderRadiusClass } from "../rounded";
import { createSizeLook, sizeMinHeightClass } from "../size";
import { look, mergeLooks, TLook } from "../utils/look";

import { itemClass } from "./item.css";

export interface TCreateItemLookParams {
  padding: number | null;
  paddingVarName: string;
  parentPaddingVarName: string | null;
  defaultPadding: number;

  rounded: number | "autoFromSize" | null;
  roundedVarName: string | null;
  parentRoundedVarName: string | null;
  defaultRounded: number;

  size: null | number | "autoFromContent";
  sizeVarName: string;
  parentSizeVarName: string | null;
  defaultSize: number;

  contentSize: null | number | "parentSize";
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
}

export function createItemLook(params: TCreateItemLookParams): TLook {
  const {
    paddingVarName,
    roundedVarName,
    sizeVarName,
    contentSizeVarName,
    defaultRounded,
    parentRoundedVarName,
    parentPaddingVarName,
    rounded,
    contentSize,
    padding,
    defaultPadding,
    defaultSize,
    parentContentSizeVarName,
    parentSizeVarName,
    size,
  } = params;
  return mergeLooks(
    look(clsx(itemClass, roundedBorderRadiusClass, sizeMinHeightClass, contentSizeLineHeightClass)),
    createRoundedLook({
      defaultRounded,
      parentPaddingVarName,
      parentRoundedVarName,
      rounded,
      roundedVarName,
      sizeVarName,
    }),
    createPaddingLook({
      defaultPadding,
      paddingVarName,
      sizeVarName,
      contentSize,
      contentSizeVarName,
      padding,
    }),
    createSizeLook({
      defaultSize,
      parentContentSizeVarName,
      parentPaddingVarName,
      parentSizeVarName,
      paddingVarName,
      size,
      sizeVarName,
      contentSizeVarName,
    }),
    createContentSizeLook({
      contentSize,
      contentSizeVarName,
      paddingVarName,
      sizeVarName,
      parentContentSizeVarName,
    }),
  );
}
