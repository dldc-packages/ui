import { TDesignHeight, TDesignRounded, TDesignSpacing } from "@dldc/design/size";
import { TDesignVariant } from "@dldc/design/variants";

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
