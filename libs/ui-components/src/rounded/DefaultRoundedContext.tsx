import { createDefaultProvider } from "../utils/createDefaultProvider";
import { TRoundedPropValue } from "./types";

export const { DefaultProvider: DefaultRoundedProvider, useDefault: useDefaultRounded } =
  createDefaultProvider<TRoundedPropValue>("Rounded");
