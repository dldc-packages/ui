import { TDesignVariant } from "@dldc/ui-core/variants";

import { TDefaultProviderValue } from "../utils/createDefaultProvider";
import { useDefaultHoverVariant, useDefaultVariant } from "./DefaultVariantContext";
import { useParentVariantContext } from "./ParentVariantContext";
import { THoverVariantPropValue, TVariantProps, TVariantPropValue } from "./types";

export interface TUseVariantResult {
  variant: TDesignVariant;
  hoverVariant: TDesignVariant;
  nextVariantDefaultContext: TDefaultProviderValue<TVariantPropValue> | undefined;
  nextHoverVariantDefaultContext: TDefaultProviderValue<THoverVariantPropValue> | undefined;
}

export function useVariant(props: TVariantProps, fallbackVariant: TDesignVariant = "surface") {
  const parentVariant = useParentVariantContext();
  const { defaultValue: defaultVariant, nextDefaultContext: nextVariantDefaultContext } = useDefaultVariant();
  const { defaultValue: defaultHoverVariant, nextDefaultContext: nextHoverVariantDefaultContext } =
    useDefaultHoverVariant();

  const variant = props.variant ?? parentVariant?.variant ?? defaultVariant ?? fallbackVariant;
  const hoverVariant = props.hoverVariant ?? parentVariant?.hoverVariant ?? defaultHoverVariant ?? variant;

  return { variant, hoverVariant, nextVariantDefaultContext, nextHoverVariantDefaultContext };
}
