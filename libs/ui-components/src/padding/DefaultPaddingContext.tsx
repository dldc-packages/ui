import { createDefaultProvider } from "../../../react-utils/src/default-provider";
import { TPaddingPropValue } from "./types";

export const { DefaultProvider: DefaultPaddingProvider, useDefault: useDefaultPadding } =
  createDefaultProvider<TPaddingPropValue>("Padding");
