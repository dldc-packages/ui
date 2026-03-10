import { TDesignRounded } from "@dldc/ui-core/size";

export type TRoundedPropValue = TDesignRounded | "autoFromSize";

export interface TRoundedProps {
  rounded?: TRoundedPropValue;
}
