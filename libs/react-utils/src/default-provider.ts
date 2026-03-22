import { createContext, createElement, PropsWithChildren, useContext, useMemo } from "react";

export interface TDefaultProviderItem<T> {
  value: T;
  repeat: number;
}

export type TDefaultProviderValue<T> = readonly TDefaultProviderItem<T>[];

export type DefaultProviderProps<T> = PropsWithChildren<{
  value?: T | undefined;
  repeat?: number;
  contextValue?: TDefaultProviderValue<T>;
}>;

export interface TUseDefaultReturn<T> {
  defaultValue: T | undefined;
  nextDefaultContext: TDefaultProviderValue<T> | undefined;
}

export interface TCreateDefaultProviderReturn<T> {
  DefaultProvider: React.FC<DefaultProviderProps<T>>;
  useDefault: () => TUseDefaultReturn<T>;
}

export function createDefaultProvider<T>(name: string): TCreateDefaultProviderReturn<T> {
  const DefaultContext = createContext<TDefaultProviderValue<T>>([]);

  function DefaultProvider({ children, value, repeat = 1, contextValue }: DefaultProviderProps<T>) {
    const normalizedValue = useMemo((): TDefaultProviderValue<T> => {
      if (contextValue) {
        return contextValue;
      }
      if (value === undefined) {
        return [];
      }
      return [{ value, repeat }];
    }, [contextValue, value, repeat]);
    return createElement(DefaultContext.Provider, { value: normalizedValue }, children);
  }
  DefaultProvider.displayName = `${name}DefaultProvider`;

  function useDefault(): TUseDefaultReturn<T> {
    const contextValue = useContext(DefaultContext);
    return useMemo((): TUseDefaultReturn<T> => {
      if (!contextValue || contextValue.length === 0) {
        return { defaultValue: undefined, nextDefaultContext: undefined };
      }
      const [first, ...rest] = contextValue;
      const nextDefaultContext =
        first.repeat && first.repeat - 1 > 0 ? [{ value: first.value, repeat: first.repeat - 1 }, ...rest] : rest;
      return { defaultValue: first.value, nextDefaultContext: nextDefaultContext };
    }, [contextValue]);
  }

  return { DefaultProvider, useDefault };
}
