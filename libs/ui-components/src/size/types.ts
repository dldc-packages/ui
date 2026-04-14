import { TDesignSize } from "@dldc/ui-core/size";

export type TSizePropValue = TDesignSize | "autoFromContent";

export interface TSizeProps {
  size?: TSizePropValue;
}
