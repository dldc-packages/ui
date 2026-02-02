import { clamp } from "@dldc/utils/math";
import { withoutUndefined } from "@dldc/utils/object";
import { parseMaybeSize, parseSize, roundToSize } from "../../../ui-core/dist/size/index.js";
import { TDesignVariant } from "../../../ui-core/dist/variants/index.js";
import { BASE_HEIGHT, BASE_ROUNDED, DEFAULT_DESIGN, MIN_HEIGHT } from "./constants.js";
import {
  TDefaultDesignContext,
  TDesignContextResolved,
  TNestedDefaultDesignContext,
  TParentDesignContext,
} from "./types.js";
import { autoContentHeight } from "./utils.js";

export function resolveFrameDesignProps(
  parentCtx: TParentDesignContext | null,
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
  baseVariant: TDesignVariant,
): TDesignContextResolved {
  const depth = !parentCtx ? 0 : parentCtx.depth + 1;
  const props = resolveProps(nestedCtx, localProps, depth, baseVariant);
  const contentHeightFromNestedHeight = resolveProps(nestedCtx, {}, depth + 1, baseVariant).height;
  const contentHeightProp = parseMaybeSize(props.contentHeight ?? contentHeightFromNestedHeight);

  const hoverVariant = props.hoverVariant ?? props.variant;
  const spacing = parseMaybeSize(props.spacing);

  if (!parentCtx) {
    // We are in a root context
    const height = parseSize(props.height ?? BASE_HEIGHT);
    const rounded = parseSize(props.rounded ?? BASE_ROUNDED);
    const contentHeight = resolveContentHeight(height, contentHeightProp);

    return {
      height,
      contentHeight,
      variant: props.variant,
      hoverVariant,
      spacing,
      rounded,
      depth,
    };
  }
  // We are in a nested context
  const autoHeight = parentCtx.contentHeight;
  const height = parseSize(props.height ?? autoHeight);
  const contentHeight = resolveContentHeight(height, contentHeightProp);

  const padding = (parentCtx.height - height) / 2;

  const autoRounded = resolvedAutoRounded(parentCtx.rounded, padding);
  const rounded = parseSize(props.rounded ?? autoRounded);

  return {
    height,
    contentHeight,
    variant: props.variant,
    hoverVariant,
    spacing,
    rounded,
    depth,
  };
}

export function resolveContainerDesignProps(
  parentCtx: TParentDesignContext | null,
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
): TParentDesignContext {
  const depth = !parentCtx ? 0 : parentCtx.depth + 1;
  // Not used but required
  const baseVariant: TDesignVariant = "subtle";
  const props = resolveProps(nestedCtx, localProps, depth, baseVariant);
  // const contentHeightFromNestedHeight = resolveProps(nestedCtx, {}, depth + 1, baseVariant).height;
  // const contentHeightProp = parseMaybeSize(props.contentHeight ?? contentHeightFromNestedHeight);

  if (!parentCtx) {
    // We are in a root context
    const height = parseSize(props.height ?? BASE_HEIGHT);
    const rounded = parseSize(props.rounded ?? BASE_ROUNDED);

    return {
      height,
      contentHeight: height,
      rounded,
      depth,
    };
  }
  // We are in a nested context
  const autoHeight = parentCtx.contentHeight;
  const height = parseSize(props.height ?? autoHeight);

  const padding = (parentCtx.height - height) / 2;

  const autoRounded = resolvedAutoRounded(parentCtx.rounded, padding);
  const rounded = parseSize(props.rounded ?? autoRounded);

  return {
    height,
    contentHeight: height,
    rounded,
    depth,
  };
}

function resolvedAutoRounded(parentRadius: number, padding: number): number {
  if (parentRadius === 0) {
    return 0;
  }
  return clamp(roundToSize(radiusScale(parentRadius, padding)), 0.5, Infinity);
}

function resolveProps(
  nestedCtx: TNestedDefaultDesignContext | null,
  localProps: Partial<TDefaultDesignContext>,
  depth: number,
  baseVariant: TDesignVariant,
): TDefaultDesignContext {
  const resolvedDefault = resolveDefaultProps(nestedCtx, depth, baseVariant);
  return {
    ...resolvedDefault,
    ...withoutUndefined(localProps),
  };
}

function resolveDefaultProps(
  nestedCtx: TNestedDefaultDesignContext | null,
  depth: number,
  baseVariant: TDesignVariant,
): TDefaultDesignContext {
  const defaultDesignWithBaseVariant = {
    ...DEFAULT_DESIGN,
    variant: baseVariant,
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

function radiusScale(parentRadius: number, distance: number, scale = 1): number {
  return parentRadius * Math.exp(-(scale * distance) / parentRadius);
}
