import { parseMaybeSize, TDesignDirection } from "@dldc/ui-core/size";

import { useDefaultSize } from "./DefaultSizeContext";
import { useParentSizeContext } from "./ParentSizeContext";
import { TSizeProps } from "./types";

export function useSizeProps(props: TSizeProps): TSizeProps {
  const defaultSize = useDefaultSize();
  return {
    size: props.size ?? defaultSize?.size,
    direction: props.direction ?? defaultSize?.direction,
  };
}

export interface TUseSizeOptions {
  defaultDirection?: TDesignDirection;
}

export interface TUseSizeResult {
  parentWidth: number | null;
  parentHeight: number | null;
  width: number | null;
  height: number | null;
  direction: TDesignDirection;
}

export function useSize(
  inProps: TSizeProps,
  { defaultDirection = "horizontal" }: TUseSizeOptions = {},
): TUseSizeResult {
  const parentSize = useParentSizeContext();
  const props = useSizeProps(inProps);

  const parentDirection = parentSize?.direction ?? null;
  const parentSizeValue = parentSize?.size ?? null;
  const direction = props.direction ?? parentDirection ?? defaultDirection;
  const size = parseMaybeSize(props.size ?? null);

  const parentWidth = parentDirection === "horizontal" ? parentSizeValue : null;
  const parentHeight = parentDirection === "vertical" ? parentSizeValue : null;
  const width = direction === "horizontal" ? size : null;
  const height = direction === "vertical" ? size : null;

  return { parentWidth, parentHeight, width, height, direction };
}
