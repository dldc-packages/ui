import * as css from "@dldc/css-builder";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { style } from "@vanilla-extract/css";

import { withLayer } from "../utils/layer";

export const contentSizeLineHeightClass = style(
  withLayer({
    lineHeight: contentSizeVar,
    fontSize: css.serialize(css.multiply(contentSizeVar, 0.88)),
  }),
);
