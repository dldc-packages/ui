import { parseMaybeSize, parseSize } from "@dldc/ui-core/size";
import { clamp } from "@dldc/utils/math";
import { withoutUndefined } from "@dldc/utils/object";

import { BASE_HEIGHT, DEFAULT_DESIGN, MIN_HEIGHT } from "./constants";
import {
  TDefaultDesignContext,
  TDesignContextResolved,
  TNestedDefaultDesignContext,
  TParentDesignContext,
} from "./types";
import { autoContentHeight } from "./utils";

export function resolveFrameDesignProps(
  parentCtx: TParentDesignContext | null,
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
): TDesignContextResolved {
  const depth = !parentCtx ? 0 : parentCtx.depth + 1;
  const props = resolveProps(nestedCtx, localProps, depth);
  const contentHeightFromNestedHeight = resolveProps(nestedCtx, {}, depth + 1).height;
  const contentHeightProp = parseMaybeSize(props.contentHeight ?? contentHeightFromNestedHeight);

  const spacing = parseMaybeSize(props.spacing);

  if (!parentCtx) {
    // We are in a root context
    const height = parseSize(props.height ?? BASE_HEIGHT);
    const contentHeight = resolveContentHeight(height, contentHeightProp);

    return {
      height,
      contentHeight,
      spacing,
      depth,
    };
  }
  // We are in a nested context
  const autoHeight = parentCtx.contentHeight;
  const height = parseSize(props.height ?? autoHeight);
  const contentHeight = resolveContentHeight(height, contentHeightProp);

  return {
    height,
    contentHeight,
    spacing,
    depth,
  };
}

export function resolveContainerDesignProps(
  parentCtx: TParentDesignContext | null,
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
): TParentDesignContext {
  const depth = !parentCtx ? 0 : parentCtx.depth + 1;
  const props = resolveProps(nestedCtx, localProps, depth);
  // const contentHeightFromNestedHeight = resolveProps(nestedCtx, {}, depth + 1, baseVariant).height;
  // const contentHeightProp = parseMaybeSize(props.contentHeight ?? contentHeightFromNestedHeight);

  if (!parentCtx) {
    // We are in a root context
    const height = parseSize(props.height ?? BASE_HEIGHT);

    return {
      height,
      contentHeight: height,
      depth,
    };
  }
  // We are in a nested context
  const autoHeight = parentCtx.contentHeight;
  const height = parseSize(props.height ?? autoHeight);

  return {
    height,
    contentHeight: height,
    depth,
  };
}

function resolveProps(
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
  depth: number,
): TDefaultDesignContext {
  const resolvedDefault = resolveDefaultProps(nestedCtx, depth);
  return {
    ...resolvedDefault,
    ...withoutUndefined(localProps),
  };
}

function resolveDefaultProps(nestedCtx: TNestedDefaultDesignContext | null, depth: number): TDefaultDesignContext {
  const defaultDesignWithBaseVariant = {
    ...DEFAULT_DESIGN,
  };
  if (!nestedCtx) {
    return defaultDesignWithBaseVariant;
  }
  const parentDepth = nestedCtx.depth;
  if (depth < parentDepth) {
    return defaultDesignWithBaseVariant;
  }
  const diff = depth - parentDepth;
  const values = nestedCtx.values[diff] ?? {};
  return {
    ...defaultDesignWithBaseVariant,
    ...withoutUndefined(values),
  };
}

function resolveContentHeight(height: number, contentHeight: number | null): number {
  if (contentHeight !== null) {
    return clamp(contentHeight, MIN_HEIGHT, height);
  }
  // Auto content height based on the height
  return autoContentHeight(height);
}
