import { useCssVariable } from "@dldc/hooks/use-css-variable";
import { parseMaybeSize } from "@dldc/ui-core/size";

import { useDefaultGeometry } from "./DefaultGeometryContext";
import { useParentGeometryContext } from "./ParentGeometryContext";
import { TGeometryProps } from "./types";

export function useGeometryProps(props: TGeometryProps): TGeometryProps {
  const defaultGeometry = useDefaultGeometry();
  return {
    rounded: props.rounded ?? defaultGeometry?.rounded,
    padding: props.padding ?? defaultGeometry?.padding,
  };
}

export interface TUseGeometryResult {
  geometryRoundedVarName: string;
  geometryPaddingVarName: string;
  parentGeometryRoundedVarName: string | null;
  parentGeometryPaddingVarName: string | null;
  rounded: number | null;
  padding: number | null;
}

export function useGeometry(props: TGeometryProps): TUseGeometryResult {
  const geometryProps = useGeometryProps(props);
  const parentGeometry = useParentGeometryContext();

  const geometryRoundedVarName = useCssVariable("geometry-rounded");
  const geometryPaddingVarName = useCssVariable("geometry-padding");

  return {
    geometryRoundedVarName,
    geometryPaddingVarName,
    parentGeometryRoundedVarName: parentGeometry?.geometryRoundedVarName ?? null,
    parentGeometryPaddingVarName: parentGeometry?.geometryPaddingVarName ?? null,
    rounded: parseMaybeSize(geometryProps.rounded),
    padding: parseMaybeSize(geometryProps.padding),
  };
}
