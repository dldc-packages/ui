import { TDesignSize } from "@dldc/ui-core/size";

export type TContentSizePropValue = TDesignSize | "parentSize";

export interface TContentSizeProps {
  contentSize?: TContentSizePropValue;
}
