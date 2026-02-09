import { TDesignVariant } from "@dldc/ui-core/variants";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentVariantValues {
  variant: TDesignVariant;
  hoverVariant: TDesignVariant | null;
}

export const ParentVariantContext = createContext<TParentVariantValues | null>(null);

export function ParentVariantContextProvider({
  variant,
  hoverVariant,
  children,
}: PropsWithChildren<{
  variant: TDesignVariant | null;
  hoverVariant: TDesignVariant | null;
}>) {
  const contextValue = useMemo(() => (variant === null ? null : { variant, hoverVariant }), [variant, hoverVariant]);

  return <ParentVariantContext value={contextValue}>{children}</ParentVariantContext>;
}
ParentVariantContextProvider.displayName = "ParentVariantContextProvider";

export function useParentVariantContext() {
  return useContext(ParentVariantContext);
}
