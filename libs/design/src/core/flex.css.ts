import {
  dynamicUtilityFactory,
  TUtilityDynamic,
} from "@dldc/css-engine/factory";
import { CSSProperties } from "@vanilla-extract/css";

export type TFlexDirection = CSSProperties["flexDirection"];

const flexDirectionValues = {
  row: "row",
  rowReverse: "row-reverse",
  column: "column",
  columnReverse: "column-reverse",
} satisfies Record<string, TFlexDirection>;

export const flexDirection: TUtilityDynamic<
  typeof flexDirectionValues,
  TFlexDirection
> = dynamicUtilityFactory("flexDirection", flexDirectionValues);

export type TFlexWrap = CSSProperties["flexWrap"];

const flexWrapValues = {
  nowrap: "nowrap",
  wrap: "wrap",
  wrapReverse: "wrap-reverse",
} satisfies Record<string, TFlexWrap>;

export const flexWrap: TUtilityDynamic<typeof flexWrapValues, TFlexWrap> =
  dynamicUtilityFactory("flexWrap", flexWrapValues);

export type TJustifyContent = CSSProperties["justifyContent"];

const justifyContentValues = {
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
} satisfies Record<string, TJustifyContent>;

export const justifyContent: TUtilityDynamic<
  typeof justifyContentValues,
  TJustifyContent
> = dynamicUtilityFactory("justifyContent", justifyContentValues);

export type TAlignItems = CSSProperties["alignItems"];

const alignItemsValues = {
  stretch: "stretch",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  baseline: "baseline",
} satisfies Record<string, TAlignItems>;

export const alignItems: TUtilityDynamic<typeof alignItemsValues, TAlignItems> =
  dynamicUtilityFactory("alignItems", alignItemsValues);

export type TAlignContent = CSSProperties["alignContent"];

const alignContentValues = {
  stretch: "stretch",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
} satisfies Record<string, TAlignContent>;

export const alignContent: TUtilityDynamic<
  typeof alignContentValues,
  TAlignContent
> = dynamicUtilityFactory("alignContent", alignContentValues);

export type TAlignSelf = CSSProperties["alignSelf"];

const alignSelfValues = {
  auto: "auto",
  stretch: "stretch",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  baseline: "baseline",
} satisfies Record<string, TAlignSelf>;

export const alignSelf: TUtilityDynamic<typeof alignSelfValues, TAlignSelf> =
  dynamicUtilityFactory("alignSelf", alignSelfValues);

export type TJustifyItems = CSSProperties["justifyItems"];

const justifyItemsValues = {
  auto: "auto",
  stretch: "stretch",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
} satisfies Record<string, TJustifyItems>;

export const justifyItems: TUtilityDynamic<
  typeof justifyItemsValues,
  TJustifyItems
> = dynamicUtilityFactory("justifyItems", justifyItemsValues);

export type TJustifySelf = CSSProperties["justifySelf"];

const justifySelfValues = {
  auto: "auto",
  stretch: "stretch",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
} satisfies Record<string, TJustifySelf>;

export const justifySelf: TUtilityDynamic<
  typeof justifySelfValues,
  TJustifySelf
> = dynamicUtilityFactory("justifySelf", justifySelfValues);
