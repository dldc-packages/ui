import { createDefaultProvider } from "../../../react-utils/src/default-provider";
import { TContentSizePropValue } from "./types";

export const { DefaultProvider: DefaultContentSizeProvider, useDefault: useDefaultContentSize } =
  createDefaultProvider<TContentSizePropValue>("ContentSize");
