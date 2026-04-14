import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { TDefaultProviderValue } from "@dldc/react-utils/default-provider";

import { useDefaultContentSize } from "./DefaultContentSizeContext";
import { useParentContentSizeContext } from "./ParentContentSizeContext";
import { parseContentSizeProps } from "./parseContentSizeProps";
import { TContentSizeProps, TContentSizePropValue } from "./types";

export interface TUseContentSizeResult {
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
  contentSize: number | null | "parentSize";
  nextContentSizeDefaultContext: TDefaultProviderValue<TContentSizePropValue> | undefined;
}

export function useContentSize(inProps: TContentSizeProps): TUseContentSizeResult {
  const { defaultValue: defaultContentSize, nextDefaultContext: nextContentSizeDefaultContext } =
    useDefaultContentSize();
  const parentContentSize = useParentContentSizeContext();

  const contentSizeVarName = useCssVariable("content-size");

  return {
    contentSizeVarName,
    parentContentSizeVarName: parentContentSize?.contentSizeVarName ?? null,
    contentSize: parseContentSizeProps(inProps.contentSize ?? defaultContentSize),
    nextContentSizeDefaultContext,
  };
}
