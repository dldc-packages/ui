import { createDefaultProvider } from "../../../react-utils/src/default-provider";
import { TRoundedPropValue } from "./types";

export const { DefaultProvider: DefaultRoundedProvider, useDefault: useDefaultRounded } =
  createDefaultProvider<TRoundedPropValue>("Rounded");
