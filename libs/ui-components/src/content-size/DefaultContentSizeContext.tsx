import { createDefaultProvider } from "../utils/createDefaultProvider";
import { TContentSizePropValue } from "./types";

export const { DefaultProvider: DefaultContentSizeProvider, useDefault: useDefaultContentSize } =
  createDefaultProvider<TContentSizePropValue>("ContentSize");
