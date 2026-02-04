import { TDesignVariant } from "@dldc/ui-core/variants";

import { useDefaultDesignVariant } from "./DefaultDesignVariantContext";
import { useParentDesignVariantContext } from "./ParentDesignVariantContext";
import { TDesignVariantProps } from "./types";

export function useDesignVariant(props: TDesignVariantProps, fallbackVariant: TDesignVariant = "surface") {
  const parentVariant = useParentDesignVariantContext();
  const defaultVariant = useDefaultDesignVariant();

  const variant = props.variant ?? parentVariant?.variant ?? defaultVariant?.variant ?? fallbackVariant;
  const hoverVariant = props.hoverVariant ?? parentVariant?.hoverVariant ?? defaultVariant?.hoverVariant ?? variant;

  return { variant, hoverVariant };
}
