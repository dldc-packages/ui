import { createDefaultProvider } from "@dldc/react-utils/default-provider";

import { TRoundedPropValue } from "./types";

export const { DefaultProvider: DefaultRoundedProvider, useDefault: useDefaultRounded } =
  createDefaultProvider<TRoundedPropValue>("Rounded");
