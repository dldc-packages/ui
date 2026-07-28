import { ComponentType, PropsWithChildren, createContext, createElement, memo, useContext } from "react";

export interface TProvider<Data, Props> {
  useMaybe: () => Data | null;
  useOrFail: () => Data;
  Provider: ComponentType<PropsWithChildren<Props>>;
}

export function createProvider<Data, Props>(name: string, useLogic: (props: Props) => Data): TProvider<Data, Props> {
  const context = createContext<Data | null>(null);

  const Provider: ComponentType<PropsWithChildren<Props>> = memo(function Provider({ children, ...props }) {
    const data = useLogic(props as Props);
    return createElement(context.Provider, { value: data }, children);
  });

  function useMaybe(): Data | null {
    return useContext(context);
  }

  function useOrFail(): Data {
    const data = useContext(context);
    if (data === null) {
      throw new Error(`Missing ${name} provider`);
    }
    return data;
  }

  return {
    useMaybe,
    useOrFail,
    Provider,
  };
}
