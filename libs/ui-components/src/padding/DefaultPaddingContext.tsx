import { createDefaultProvider } from "@dldc/react-utils/default-provider";

import { TPaddingPropValue } from "./types";

export const { DefaultProvider: DefaultPaddingProvider, useDefault: useDefaultPadding } =
  createDefaultProvider<TPaddingPropValue>("Padding");
