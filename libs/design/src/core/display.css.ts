import {
  dynamicUtilityFactory,
  TUtilityDynamic,
} from "@dldc/css-engine/factory";
import { CSSProperties } from "@vanilla-extract/css";

export type TDisplay = CSSProperties["display"];

const displayValues = {
  block: "block",
  inlineBlock: "inline-block",
  inline: "inline",
  flex: "flex",
  inlineFlex: "inline-flex",
  grid: "grid",
  inlineGrid: "inline-grid",
  none: "none",
} satisfies Record<string, TDisplay>;

export const display: TUtilityDynamic<typeof displayValues, TDisplay> =
  dynamicUtilityFactory("display", displayValues);
