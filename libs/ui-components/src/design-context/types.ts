import { TDesignHeight, TDesignRounded, TDesignSpacing } from "@dldc/ui-core/size";

export interface TDesignProps {
  height?: TDesignHeight | null;
  contentHeight?: TDesignHeight | null;
  rounded?: TDesignRounded | null;
  spacing?: TDesignSpacing | null;
}

export interface TDefaultDesignContext {
  height: TDesignHeight | null;
  contentHeight: TDesignHeight | null;
  rounded: TDesignRounded | null;
  spacing: TDesignSpacing | null;
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
  spacing: number | null;
  rounded: number;
}

export type TNestedDesignValues = Partial<TDefaultDesignContext>[];

export interface TNestedDefaultDesignContext {
  depth: number;
  values: TNestedDesignValues;
}
