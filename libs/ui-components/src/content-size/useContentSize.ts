import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { parseMaybeSize } from "@dldc/ui-core/size";

import { TDefaultProviderValue } from "../utils/createDefaultProvider";
import { useDefaultContentSize } from "./DefaultContentSizeContext";
import { useParentContentSizeContext } from "./ParentContentSizeContext";
import { TContentSizeProps, TContentSizePropValue } from "./types";

export interface TUseContentSizeResult {
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
  contentSize: number | null;
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
    contentSize: parseMaybeSize(inProps.contentSize ?? defaultContentSize),
    nextContentSizeDefaultContext,
  };
}
