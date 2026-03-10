import { createDefaultProvider } from "../utils/createDefaultProvider";
import { TPaddingPropValue } from "./types";

export const { DefaultProvider: DefaultPaddingProvider, useDefault: useDefaultPadding } =
  createDefaultProvider<TPaddingPropValue>("Padding");
