import {
  dynamicOnlyUtilityFactory,
  TUtilityDynamic,
} from "@dldc/css-engine/factory";
import { CSSProperties } from "@vanilla-extract/css";

export type TBackground = CSSProperties["background"];

export const backgroundRaw: TUtilityDynamic<{}, TBackground> =
  dynamicOnlyUtilityFactory("background");
