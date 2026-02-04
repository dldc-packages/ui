import { TDesignVariant } from "@dldc/ui-core/variants";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentDesignVariantValues {
  variant: TDesignVariant;
  hoverVariant: TDesignVariant | null;
}

export const ParentDesignVariantContext = createContext<TParentDesignVariantValues | null>(null);

export function ParentDesignVariantContextProvider({
  variant,
  hoverVariant,
  children,
}: PropsWithChildren<{
  variant: TDesignVariant | null;
  hoverVariant: TDesignVariant | null;
}>) {
  const contextValue = useMemo(() => (variant === null ? null : { variant, hoverVariant }), [variant, hoverVariant]);

  return <ParentDesignVariantContext value={contextValue}>{children}</ParentDesignVariantContext>;
}
ParentDesignVariantContextProvider.displayName = "ParentDesignVariantContextProvider";

export function useParentDesignVariantContext() {
  return useContext(ParentDesignVariantContext);
}
