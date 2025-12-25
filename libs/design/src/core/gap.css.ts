import {
  dynamicOnlyUtilityFactory,
  TUtilityDynamic,
} from "@dldc/css-engine/factory";
import { CSSProperties } from "@vanilla-extract/css";

export type TGap = CSSProperties["gap"];

export const gapRaw: TUtilityDynamic<{}, TGap> =
  dynamicOnlyUtilityFactory("gap");
