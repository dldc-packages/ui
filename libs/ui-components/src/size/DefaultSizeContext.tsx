import { PropsWithChildren, useMemo } from "react";

import { createNestedProvider } from "../depth/NestedProvider";
import { TSizeProps } from "./types";

const {
  NestedContext: DefaultSizeNestedContext,
  NestedProvider: DefaultSizeNestedProvider,
  NextProvider: DefaultSizeNextProvider,
  useNestedValues: useDefaultSizeNestedValues,
  useNestedValueAtDepth: useDefaultSizeNestedValueAtDepth,
  useNestedValueAtCurrentDepth: useDefaultSize,
} = createNestedProvider<TSizeProps>();

export {
  DefaultSizeNestedContext,
  DefaultSizeNestedProvider,
  useDefaultSize,
  useDefaultSizeNestedValueAtDepth,
  useDefaultSizeNestedValues,
};

export function DefaultSizeProvider({ direction, size, children }: PropsWithChildren<TSizeProps>) {
  return (
    <DefaultSizeNextProvider value={useMemo(() => ({ direction, size }), [direction, size])}>
      {children}
    </DefaultSizeNextProvider>
  );
}
