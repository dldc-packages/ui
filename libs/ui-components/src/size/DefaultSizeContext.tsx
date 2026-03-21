import { createDefaultProvider } from "@dldc/react-utils/default-provider";

import { TSizePropValue } from "./types";

export const { DefaultProvider: DefaultSizeProvider, useDefault: useDefaultSize } =
  createDefaultProvider<TSizePropValue>("Size");
