import { PropsWithChildren, useMemo } from "react";

import { createNestedProvider } from "../depth/NestedProvider";
import { TDesignVariantProps } from "./types";

const {
  NestedContext: DefaultVariantNestedContext,
  NestedProvider: DefaultVariantNestedProvider,
  NextProvider: DefaultVariantNextProvider,
  useNestedValues: useDefaultVariantNestedValues,
  useNestedValueAtDepth: useDefaultVariantNestedValueAtDepth,
  useNestedValueAtCurrentDepth: useDefaultVariant,
} = createNestedProvider<TDesignVariantProps>();

export {
  DefaultVariantNestedContext,
  DefaultVariantNestedProvider,
  useDefaultVariant,
  useDefaultVariantNestedValueAtDepth,
  useDefaultVariantNestedValues,
};

export function DefaultVariantProvider({ variant, hoverVariant, children }: PropsWithChildren<TDesignVariantProps>) {
  return (
    <DefaultVariantNextProvider value={useMemo(() => ({ variant, hoverVariant }), [variant, hoverVariant])}>
      {children}
    </DefaultVariantNextProvider>
  );
}
