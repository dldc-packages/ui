import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { parseMaybeSize } from "@dldc/ui-core/size";

import { TDefaultProviderValue } from "../../../react-utils/src/default-provider";
import { useDefaultPadding } from "./DefaultPaddingContext";
import { useParentPaddingContext } from "./ParentPaddingContext";
import { TPaddingProps, TPaddingPropValue } from "./types";

export interface TUsePaddingResult {
  paddingVarName: string;
  parentPaddingVarName: string | null;
  padding: number | null;
  nextPaddingDefaultContext: TDefaultProviderValue<TPaddingPropValue> | undefined;
}

export function usePadding(props: TPaddingProps): TUsePaddingResult {
  const { defaultValue: defaultPadding, nextDefaultContext: nextPaddingDefaultContext } = useDefaultPadding();
  const parentPadding = useParentPaddingContext();
  const paddingVarName = useCssVariable("padding");

  return {
    paddingVarName,
    parentPaddingVarName: parentPadding?.paddingVarName ?? null,
    padding: parseMaybeSize(props.padding ?? defaultPadding),
    nextPaddingDefaultContext,
  };
}
