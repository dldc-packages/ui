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

// const NESTED_RADIUS_OPTIONS: TNestedRadiusOptions = {
//   constantRatio: 0.2,
//   decay: 1,
//   minConstantThreshold: 8,
// };

// export interface TUseGeometryOptions {
//   minRounded?: number;
//   defaultRounded?: number;
// }

// export function useGeometry(inProps: TGeometryProps, { minRounded = 0, defaultRounded }: TUseGeometryOptions = {}) {
//   const parentGeometry = useParentGeometryContext();
//   const props = useGeometryProps(inProps);

//   const padding = useMemo(() => {
//     return parseMaybeSize(props.padding) ?? 0;
//   }, [props.padding]);

//   const rounded = useMemo((): number | null => {
//     const definedRounded = props.rounded;
//     if (definedRounded !== undefined) {
//       return clamp(parseSize(definedRounded), minRounded, Infinity);
//     }
//     if (!parentGeometry || parentGeometry.rounded === null) {
//       return defaultRounded ?? null;
//     }

//     return clamp(
//       roundToQuarter(nestedRadius(parentGeometry.rounded, parentGeometry.padding, NESTED_RADIUS_OPTIONS)),
//       minRounded,
//       Infinity,
//     );
//   }, [props.rounded, parentGeometry, minRounded, defaultRounded]);

//   return { rounded, padding };
// }
