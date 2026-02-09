import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentDesignVariantValues {
  rounded: number | null;
  padding: number;
}

export const ParentGeometryContext = createContext<TParentDesignVariantValues | null>(null);

export function ParentGeometryContextProvider({
  rounded,
  padding,
  children,
}: PropsWithChildren<{
  rounded: number | null;
  padding: number;
}>) {
  const contextValue = useMemo(() => ({ rounded, padding }), [rounded, padding]);

  return <ParentGeometryContext value={contextValue}>{children}</ParentGeometryContext>;
}
ParentGeometryContextProvider.displayName = "ParentGeometryContextProvider";

export function useParentGeometryContext() {
  return useContext(ParentGeometryContext);
}
