import { sizeToRemString } from "@dldc/ui-core/size";
import { paddingVar } from "@dldc/ui-styles/padding";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const dialogHeaderWrapper = style(
  withLayer({
    display: "flex",
    flexDirection: "row",
    padding: paddingVar,
    gap: paddingVar,
  }),
);

export const dialogHeaderTitleWrapper = style(
  withLayer({
    display: "flex",
    flexDirection: "row",
    padding: paddingVar,
    gap: paddingVar,
  }),
);

export const dialogDescription = style(
  withLayer({
    paddingLeft: sizeToRemString("2x"),
    paddingRight: sizeToRemString("2x"),
  }),
);

export const dialogFooter = style(
  withLayer({
    display: "flex",
    gap: paddingVar,
    padding: paddingVar,
    justifyContent: "flex-end",
  }),
);
