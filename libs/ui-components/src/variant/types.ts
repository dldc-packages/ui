import { TDesignVariant } from "@dldc/ui-core/variants";

export type TVariantPropValue = TDesignVariant;
export type THoverVariantPropValue = TDesignVariant | null;

export interface TVariantProps {
  variant?: TVariantPropValue;
  hoverVariant?: THoverVariantPropValue;
}
