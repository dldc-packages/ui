import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentRoundedValues {
  roundedVarName: string;
}

export const ParentRoundedContext = createContext<TParentRoundedValues | null>(null);

export function ParentRoundedContextProvider(props: PropsWithChildren<TParentRoundedValues>) {
  const { roundedVarName, children } = props;
  const contextValue = useMemo(() => ({ roundedVarName }), [roundedVarName]);
  return <ParentRoundedContext value={contextValue}>{children}</ParentRoundedContext>;
}
ParentRoundedContextProvider.displayName = "ParentRoundedContextProvider";

export function useParentRoundedContext() {
  return useContext(ParentRoundedContext);
}
