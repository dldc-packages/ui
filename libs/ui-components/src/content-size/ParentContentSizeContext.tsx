import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentContentSizeValues {
  contentSizeVarName: string;
}

export const ParentContentSizeContext = createContext<TParentContentSizeValues | null>(null);

export function ParentContentSizeContextProvider({
  contentSizeVarName,
  children,
}: PropsWithChildren<TParentContentSizeValues>) {
  const contextValue = useMemo(() => ({ contentSizeVarName }), [contentSizeVarName]);
  return <ParentContentSizeContext.Provider value={contextValue}>{children}</ParentContentSizeContext.Provider>;
}
ParentContentSizeContextProvider.displayName = "ParentContentSizeContextProvider";

export function useParentContentSizeContext() {
  return useContext(ParentContentSizeContext);
}
