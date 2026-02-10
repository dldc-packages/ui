import { withoutUndefined } from "@dldc/utils/object";
import { BaseRecord } from "@dldc/utils/props-splitters";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { DESIGN_KEYS } from "./constants";
import { resolveContainerDesignProps, resolveFrameDesignProps } from "./resolve";
import {
  TDefaultDesignContext,
  TDesignContextResolved,
  TDesignProps,
  TNestedDefaultDesignContext,
  TNestedDesignValues,
  TParentDesignContext,
} from "./types";

export const ParentDesignContext = createContext<TParentDesignContext | null>(null);

export function SizeContextProvider({
  height,
  contentHeight,
  children,
  depth,
}: PropsWithChildren<TParentDesignContext>) {
  const value = useMemo(() => ({ height, contentHeight, depth }), [height, contentHeight, depth]);
  return <ParentDesignContext value={value}>{children}</ParentDesignContext>;
}

SizeContextProvider.displayName = "SizeContextProvider";

export function designPropsSplitter(props: BaseRecord): Partial<TDefaultDesignContext> {
  const result: Partial<TDefaultDesignContext> = {};
  DESIGN_KEYS.forEach((key) => {
    if (key in props && props[key] !== undefined) {
      result[key] = (props as any)[key];
    }
  });
  return result;
}

/**
 * Resolve props of a frame-like component
 */
export function useFrameDesignProps(localProps: Partial<TDefaultDesignContext>): TDesignContextResolved {
  const parentCtx = useContext(ParentDesignContext);
  const nestedCtx = useContext(NestedDefaultDesignContext);
  return resolveFrameDesignProps(parentCtx, nestedCtx, localProps);
}

/**
 * Resolve props of a container component
 */
export function useContainerDesignProps(localProps: Partial<TDefaultDesignContext>): TParentDesignContext {
  const parentCtx = useContext(ParentDesignContext);
  const nestedCtx = useContext(NestedDefaultDesignContext);
  return resolveContainerDesignProps(parentCtx, nestedCtx, localProps);
}

export const NestedDefaultDesignContext = createContext<TNestedDefaultDesignContext | null>(null);

export function NestedDefaultDesignProvider({ children, values }: PropsWithChildren<{ values: TNestedDesignValues }>) {
  const sizeCtx = useContext(ParentDesignContext);
  const parentNestedCtx = useContext(NestedDefaultDesignContext);

  const depth = sizeCtx?.depth ?? 0;

  const parentValues = useMemo(() => {
    if (!parentNestedCtx) {
      return [];
    }
    const diff = depth - parentNestedCtx.depth;
    return parentNestedCtx.values.slice(diff);
  }, [depth, parentNestedCtx]);

  const value = useMemo((): TNestedDefaultDesignContext => {
    const result = [...parentValues];
    values.forEach((v, i) => {
      result[i] = {
        ...withoutUndefined(result[i] ?? {}),
        ...withoutUndefined(v),
      };
    });
    return { depth, values: result };
  }, [depth, parentValues, values]);

  return <NestedDefaultDesignContext value={value}>{children}</NestedDefaultDesignContext>;
}
NestedDefaultDesignProvider.displayName = "NestedDefaultDesignProvider";

export function DefaultDesignProvider({ children, ...props }: PropsWithChildren<TDesignProps>) {
  const values = useMemo(() => [withoutUndefined(props)], [props]);
  return <NestedDefaultDesignProvider values={values}>{children}</NestedDefaultDesignProvider>;
}
DefaultDesignProvider.displayName = "DefaultDesignProvider";
