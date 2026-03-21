import { createDefaultProvider } from "@dldc/react-utils/default-provider";

import { TContentSizePropValue } from "./types";

export const { DefaultProvider: DefaultContentSizeProvider, useDefault: useDefaultContentSize } =
  createDefaultProvider<TContentSizePropValue>("ContentSize");
