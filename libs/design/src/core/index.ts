// import { TSigilStyles } from "@dldc/css-engine/sigil";
// import { mapColorsVars } from "../colors/index.js";
// import { TDesignSize } from "../size/index.js";
// import { parseSize } from "../size/parse.js";
// import { sizeToRemString } from "../size/utils.js";
// import { backgroundRaw, TBackground } from "./background.css.js";
// import { gapRaw, TGap } from "./gap.css.js";

// export type { TBackground } from "./background.css.js";
// export * from "./display.css.js";
// export * from "./flex.css.js";
// export type { TGap } from "./gap.css.js";

// export const background = Object.assign(
//   (bg: TBackground) => backgroundRaw.raw(bg),
//   mapColorsVars<TSigilStyles>((colVar) => backgroundRaw.raw(colVar))
// );

// export const gap = Object.assign(
//   (size: TDesignSize | (string & {})) => {
//     return gapRaw.raw(sizeToRemString(parseSize(size)));
//   },
//   { raw: (size: TGap) => gapRaw.raw(size) }
// );

import { css } from "./css.css.js";

export { css };
