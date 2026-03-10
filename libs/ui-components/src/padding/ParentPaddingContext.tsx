import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentPaddingValues {
  paddingVarName: string;
}

export const ParentPaddingContext = createContext<TParentPaddingValues | null>(null);

export function ParentPaddingContextProvider(props: PropsWithChildren<TParentPaddingValues>) {
  const { paddingVarName, children } = props;
  const contextValue = useMemo(() => ({ paddingVarName }), [paddingVarName]);
  return <ParentPaddingContext.Provider value={contextValue}>{children}</ParentPaddingContext.Provider>;
}
ParentPaddingContextProvider.displayName = "ParentPaddingContextProvider";

export function useParentPaddingContext() {
  return useContext(ParentPaddingContext);
}
