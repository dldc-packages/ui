import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentGeometryValues {
  rounded: number | null;
  padding: number;
}

export const ParentGeometryContext = createContext<TParentGeometryValues | null>(null);

export function ParentGeometryContextProvider(props: PropsWithChildren<TParentGeometryValues>) {
  const { rounded, padding, children } = props;
  const contextValue = useMemo(() => ({ rounded, padding }), [rounded, padding]);
  return <ParentGeometryContext value={contextValue}>{children}</ParentGeometryContext>;
}
ParentGeometryContextProvider.displayName = "ParentGeometryContextProvider";

export function useParentGeometryContext() {
  return useContext(ParentGeometryContext);
}
