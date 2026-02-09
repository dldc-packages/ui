import { TDesignVariant } from "@dldc/ui-core/variants";

import { useDefaultVariant } from "./DefaultVariantContext";
import { useParentVariantContext } from "./ParentVariantContext";
import { TDesignVariantProps } from "./types";

export function useVariant(props: TDesignVariantProps, fallbackVariant: TDesignVariant = "surface") {
  const parentVariant = useParentVariantContext();
  const defaultVariant = useDefaultVariant();

  const variant = props.variant ?? parentVariant?.variant ?? defaultVariant?.variant ?? fallbackVariant;
  const hoverVariant = props.hoverVariant ?? parentVariant?.hoverVariant ?? defaultVariant?.hoverVariant ?? variant;

  return { variant, hoverVariant };
}
