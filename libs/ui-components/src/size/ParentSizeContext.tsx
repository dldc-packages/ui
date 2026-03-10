import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentSizeValues {
  sizeVarName: string;
}

export const ParentSizeContext = createContext<TParentSizeValues | null>(null);

export function ParentSizeContextProvider({ sizeVarName, children }: PropsWithChildren<TParentSizeValues>) {
  const contextValue = useMemo(() => ({ sizeVarName }), [sizeVarName]);
  return <ParentSizeContext.Provider value={contextValue}>{children}</ParentSizeContext.Provider>;
}
ParentSizeContextProvider.displayName = "ParentSizeContextProvider";

export function useParentSizeContext() {
  return useContext(ParentSizeContext);
}
