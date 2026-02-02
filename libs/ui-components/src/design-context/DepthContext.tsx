import { createContext, PropsWithChildren, useContext } from "react";

export const DepthContext = createContext<number>(0);

export function DepthProvider(props: PropsWithChildren) {
  const currentDepth = useContext(DepthContext);
  const nextDepth = currentDepth + 1;
  return <DepthContext value={nextDepth}>{props.children}</DepthContext>;
}
DepthProvider.displayName = "DepthProvider";

export function useParityValue<T>(v1: T, v2: T): [T, T] {
  const depth = useContext(DepthContext);
  return depth % 2 === 0 ? [v1, v2] : [v2, v1];
}
