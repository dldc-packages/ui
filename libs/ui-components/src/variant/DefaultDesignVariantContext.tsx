import { PropsWithChildren, useMemo } from "react";

import { createNestedProvider } from "../depth/NestedProvider";
import { TDesignVariantProps } from "./types";

const {
  NestedContext: DefaultDesignVariantNestedContext,
  NestedProvider: DefaultDesignVariantNestedProvider,
  NextProvider: DefaultDesignVariantNextProvider,
  useNestedValues: useDefaultDesignVariantNestedValues,
  useNestedValueAtDepth: useDefaultDesignVariantNestedValueAtDepth,
  useNestedValueAtCurrentDepth: useDefaultDesignVariant,
} = createNestedProvider<TDesignVariantProps>();

export {
  DefaultDesignVariantNestedContext,
  DefaultDesignVariantNestedProvider,
  useDefaultDesignVariant,
  useDefaultDesignVariantNestedValueAtDepth,
  useDefaultDesignVariantNestedValues,
};

export function DefaultDesignVariantProvider({
  variant,
  hoverVariant,
  children,
}: PropsWithChildren<TDesignVariantProps>) {
  return (
    <DefaultDesignVariantNextProvider value={useMemo(() => ({ variant, hoverVariant }), [variant, hoverVariant])}>
      {children}
    </DefaultDesignVariantNextProvider>
  );
}
