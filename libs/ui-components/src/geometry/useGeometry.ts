import { nestedRadius } from "@dldc/ui-core/geometry";
import { parseMaybeSize, parseSize, roundToQuarter } from "@dldc/ui-core/size";
import { clamp } from "@dldc/utils/math";
import { useMemo } from "react";

import { useDefaultGeometry } from "./DefaultGeometryContext";
import { useParentGeometryContext } from "./ParentGeometryContext";
import { TGeometryProps } from "./types";

const CONSTANT_RATIO = 0.2;
const DECAY = 0.4;

export function useGeometry(props: TGeometryProps, minRounded = 0) {
  const parentGeometry = useParentGeometryContext();
  const defaultGeometry = useDefaultGeometry();

  const rounded = useMemo((): number | null => {
    const definedRounded = props.rounded ?? defaultGeometry?.rounded;
    if (definedRounded !== undefined) {
      return clamp(parseSize(definedRounded), minRounded, Infinity);
    }
    if (!parentGeometry || parentGeometry.rounded === null) {
      return null;
    }
    return clamp(
      roundToQuarter(nestedRadius(parentGeometry.rounded, parentGeometry.padding, CONSTANT_RATIO, DECAY)),
      minRounded,
      Infinity,
    );
  }, [props.rounded, defaultGeometry?.rounded, parentGeometry, minRounded]);

  const padding = useMemo(() => {
    return parseMaybeSize(props.padding ?? defaultGeometry?.padding) ?? 0;
  }, [props.padding, defaultGeometry?.padding]);

  return { rounded, padding };
}
