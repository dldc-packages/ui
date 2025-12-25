// import { CSSProperties } from "@vanilla-extract/css";
// import { assignInlineVars } from "@vanilla-extract/dynamic";
// import { TUtilityDynamicFn } from "./factory";
// import { TSigilStyles } from "./sigil";
// import { TCssFactory } from "./types";

import { TSigilStyles } from "./sigil";
import { TCssFactory, TInternalPropertyInfos, TSchemaOf } from "./types";

// export function runtimeUtilityDynamic(
//   property: keyof CSSProperties,
//   valueVar: string,
//   dynamicStyle: string
// ): TUtilityDynamicFn<any> {
//   return (value: any) => {
//     return {
//       $$css: true,
//       [property]: {
//         className: dynamicStyle,
//         style: assignInlineVars({ [valueVar]: value }),
//       },
//     } as TSigilStyles;
//   };
// }

export function runtimeCssFactory(
  schema: TSchemaOf<TInternalPropertyInfos>
): TCssFactory<any> {
  return (obj): TSigilStyles => {
    // TODO: Traverse obj according to schema
    // If sub schema is a an array then we have a property;
    // For nested properties, return a single key of [...conditions, property].join("\u001F");
    return;
  };
}
