import { TDesignHeight, TDesignRounded, TDesignSpacing } from "../../../ui-core/dist/size";
import { TDesignVariant } from "../../../ui-core/dist/variants";

export interface TDesignProps {
  height?: TDesignHeight | null;
  contentHeight?: TDesignHeight | null;
  rounded?: TDesignRounded | null;
  spacing?: TDesignSpacing | null;
  variant?: TDesignVariant;
  hoverVariant?: TDesignVariant | null;
}

export interface TDefaultDesignContext {
  height: TDesignHeight | null;
  contentHeight: TDesignHeight | null;
  rounded: TDesignRounded | null;
  spacing: TDesignSpacing | null;
  variant: TDesignVariant;
  hoverVariant: TDesignVariant | null;
}

export interface TParentDesignContext {
  depth: number;
  height: number;
  contentHeight: number;
  rounded: number;
}

export interface TDesignContextResolved {
  depth: number;
  height: number;
  contentHeight: number;
  variant: TDesignVariant;
  hoverVariant: TDesignVariant;
  spacing: number | null;
  rounded: number;
}

export type TNestedDesignValues = Partial<TDefaultDesignContext>[];

export interface TNestedDefaultDesignContext {
  depth: number;
  values: TNestedDesignValues;
}
