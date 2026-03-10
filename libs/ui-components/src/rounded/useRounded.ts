import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { parseMaybeSize } from "@dldc/ui-core/size";

import { TDefaultProviderValue } from "../utils/createDefaultProvider";
import { useDefaultRounded } from "./DefaultRoundedContext";
import { useParentRoundedContext } from "./ParentRoundedContext";
import { TRoundedProps, TRoundedPropValue } from "./types";

export interface TUseRoundedResult {
  roundedVarName: string;
  parentRoundedVarName: string | null;
  rounded: number | "autoFromSize" | null;
  nextRoundedDefaultContext: TDefaultProviderValue<TRoundedPropValue> | undefined;
}

export function useRounded(props: TRoundedProps): TUseRoundedResult {
  const { defaultValue: defaultRounded, nextDefaultContext: nextRoundedDefaultContext } = useDefaultRounded();
  const parentRounded = useParentRoundedContext();

  const roundedVarName = useCssVariable("rounded");

  const roundedProps = props.rounded ?? defaultRounded;

  return {
    roundedVarName,
    parentRoundedVarName: parentRounded?.roundedVarName ?? null,
    rounded: roundedProps === "autoFromSize" ? "autoFromSize" : parseMaybeSize(roundedProps),
    nextRoundedDefaultContext,
  };
}
