import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentGeometryValues {
  geometryRoundedVarName: string;
  geometryPaddingVarName: string;
}

export const ParentGeometryContext = createContext<TParentGeometryValues | null>(null);

export function ParentGeometryContextProvider(props: PropsWithChildren<TParentGeometryValues>) {
  const { geometryRoundedVarName, geometryPaddingVarName, children } = props;
  const contextValue = useMemo(
    () => ({ geometryRoundedVarName, geometryPaddingVarName }),
    [geometryRoundedVarName, geometryPaddingVarName],
  );
  return <ParentGeometryContext value={contextValue}>{children}</ParentGeometryContext>;
}
ParentGeometryContextProvider.displayName = "ParentGeometryContextProvider";

export function useParentGeometryContext() {
  return useContext(ParentGeometryContext);
}
