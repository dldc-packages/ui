import { createContext, PropsWithChildren, useContext } from "react";

export const DepthContext = createContext<number>(0);

export function useDepth() {
  const depth = useContext(DepthContext);
  return { depth, nextDepth: depth + 1 };
}

export function DepthProvider({ children, depth }: PropsWithChildren<{ depth: number }>) {
  return <DepthContext value={depth}>{children}</DepthContext>;
}
DepthProvider.displayName = "DepthProvider";
