import { TDesignHeight, TDesignSpacing } from "@dldc/ui-core/size";

export interface TDesignProps {
  height?: TDesignHeight | null;
  contentHeight?: TDesignHeight | null;
  spacing?: TDesignSpacing | null;
}

export interface TDefaultDesignContext {
  height: TDesignHeight | null;
  contentHeight: TDesignHeight | null;
  spacing: TDesignSpacing | null;
}

export interface TParentDesignContext {
  depth: number;
  height: number;
  contentHeight: number;
}

export interface TDesignContextResolved {
  depth: number;
  height: number;
  contentHeight: number;
  spacing: number | null;
}

export type TNestedDesignValues = Partial<TDefaultDesignContext>[];

export interface TNestedDefaultDesignContext {
  depth: number;
  values: TNestedDesignValues;
}
