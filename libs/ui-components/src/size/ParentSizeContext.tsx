import { TDesignDirection } from "@dldc/ui-core/size";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface TParentSizeValues {
  size: number | null;
  direction: TDesignDirection | null;
}

export const ParentSizeContext = createContext<TParentSizeValues | null>(null);

export function ParentSizeContextProvider({ size, direction, children }: PropsWithChildren<TParentSizeValues>) {
  const contextValue = useMemo(() => ({ size, direction }), [size, direction]);
  return <ParentSizeContext value={contextValue}>{children}</ParentSizeContext>;
}
ParentSizeContextProvider.displayName = "ParentSizeContextProvider";

export function useParentSizeContext() {
  return useContext(ParentSizeContext);
}
