import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { useDepth } from "./DepthContext";

interface TNestedItem<Value> {
  depth: number;
  value: Value;
}

export type TNestedList<Value> = readonly TNestedItem<Value>[];

export interface TCreateNestedProviderReturn<Value> {
  NestedContext: React.Context<TNestedList<Value>>;
  NestedProvider: React.FC<PropsWithChildren<{ value: TNestedList<Value> }>>;
  NextProvider: React.FC<PropsWithChildren<{ value: Value }>>;
  useNestedValues: () => TNestedList<Value>;
  useNestedValueAtDepth: (depth: number) => Value | undefined;
  useNestedValueAtCurrentDepth: () => Value | undefined;
}

export function createNestedProvider<Value>(): TCreateNestedProviderReturn<Value> {
  const NestedContext = createContext<TNestedList<Value>>([]);

  function useNestedValues(): TNestedList<Value> {
    return useContext(NestedContext);
  }

  function NestedProvider({ children, value }: PropsWithChildren<{ value: TNestedList<Value> }>) {
    return <NestedContext value={value}>{children}</NestedContext>;
  }

  function NextProvider({ children, value }: PropsWithChildren<{ value: Value }>) {
    const parentValues = useNestedValues();
    const { depth } = useDepth();
    const newValues = useMemo((): TNestedList<Value> => {
      const nextItem: TNestedItem<Value> = { depth, value };
      if (parentValues.length === 0) {
        return [nextItem];
      }
      const copy = [...parentValues];
      while (copy.length > 0 && copy[0].depth >= depth) {
        copy.shift();
      }
      copy.unshift(nextItem);
      return copy;
    }, [depth, parentValues, value]);
    return <NestedContext value={newValues}>{children}</NestedContext>;
  }

  function useNestedValueAtDepth(depth: number): Value | undefined {
    const nestedValues = useNestedValues();
    const item = nestedValues.find((nv) => nv.depth === depth);
    return item ? item.value : undefined;
  }

  function useNestedValueAtCurrentDepth(): Value | undefined {
    const { depth } = useDepth();
    return useNestedValueAtDepth(depth);
  }

  return {
    NestedContext,
    NestedProvider,
    NextProvider,
    useNestedValues,
    useNestedValueAtDepth,
    useNestedValueAtCurrentDepth,
  };
}
