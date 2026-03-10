import { createDefaultProvider } from "../utils/createDefaultProvider";
import { TSizePropValue } from "./types";

export const { DefaultProvider: DefaultSizeProvider, useDefault: useDefaultSize } =
  createDefaultProvider<TSizePropValue>("Size");
