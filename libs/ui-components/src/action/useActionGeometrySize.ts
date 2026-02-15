import { TGeometryProps, useParentGeometryContext } from "../geometry";
import { TSizeProps, useParentSizeContext } from "../size";

/**
 * Compute height and padding from geometry and size props
 */
export function useActionGeometrySize(geometryProps: TGeometryProps, sizeProps: TSizeProps) {
  const parentGeometry = useParentGeometryContext();
  const parentSize = useParentSizeContext();

  const parentDirection = parentSize?.direction ?? null;
  const direction = sizeProps.direction ?? parentDirection ?? "horizontal";
}
