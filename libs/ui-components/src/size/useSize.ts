import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { TDefaultProviderValue } from "@dldc/react-utils/default-provider";

import { useDefaultSize } from "./DefaultSizeContext";
import { useParentSizeContext } from "./ParentSizeContext";
import { parseSizeProps } from "./parseSizeProps";
import { TSizeProps, TSizePropValue } from "./types";

export interface TUseSizeResult {
  sizeVarName: string;
  parentSizeVarName: string | null;
  size: number | null | "autoFromContent";
  nextSizeDefaultContext: TDefaultProviderValue<TSizePropValue> | undefined;
}

export function useSize(inProps: TSizeProps): TUseSizeResult {
  const { defaultValue: defaultSize, nextDefaultContext: nextSizeDefaultContext } = useDefaultSize();
  const parentSize = useParentSizeContext();

  const sizeVarName = useCssVariable("size");

  return {
    sizeVarName,
    parentSizeVarName: parentSize?.sizeVarName ?? null,
    size: parseSizeProps(inProps.size ?? defaultSize),
    nextSizeDefaultContext,
  };
}
