import { PropsWithChildren, useMemo } from "react";

import { createNestedProvider } from "../depth/NestedProvider";
import { TGeometryProps } from "./types";

const {
  NestedContext: DefaultGeometryNestedContext,
  NestedProvider: DefaultGeometryNestedProvider,
  NextProvider: DefaultGeometryNextProvider,
  useNestedValues: useDefaultGeometryNestedValues,
  useNestedValueAtDepth: useDefaultGeometryNestedValueAtDepth,
  useNestedValueAtCurrentDepth: useDefaultGeometry,
} = createNestedProvider<TGeometryProps>();

export {
  DefaultGeometryNestedContext,
  DefaultGeometryNestedProvider,
  useDefaultGeometry,
  useDefaultGeometryNestedValueAtDepth,
  useDefaultGeometryNestedValues,
};

export function DefaultGeometryProvider({ padding, rounded, children }: PropsWithChildren<TGeometryProps>) {
  return (
    <DefaultGeometryNextProvider value={useMemo(() => ({ padding, rounded }), [padding, rounded])}>
      {children}
    </DefaultGeometryNextProvider>
  );
}
