import { createDefaultProvider } from "../../../react-utils/src/default-provider";
import { TSizePropValue } from "./types";

export const { DefaultProvider: DefaultSizeProvider, useDefault: useDefaultSize } =
  createDefaultProvider<TSizePropValue>("Size");
