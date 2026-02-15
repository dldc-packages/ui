import { TDesignSize, TDesignSpacing } from "@dldc/ui-core/size";

export interface TDesignProps {
  height?: TDesignSize | null;
  contentHeight?: TDesignSize | null;
}

export interface TDefaultDesignContext {
  height: TDesignSize | null;
  contentHeight: TDesignSize | null;
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
