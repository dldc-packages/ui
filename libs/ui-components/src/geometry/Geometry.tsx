import { geometryStyles } from "@dldc/ui-styles/geometry";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";

import { ComponentPropsBaseWith } from "../utils";
import { geometryPropsSplitter } from "./geometryPropsSplitter";
import { ParentGeometryContextProvider } from "./ParentGeometryContext";
import { TGeometryProps } from "./types";
import { useGeometry } from "./useGeometry";

export type GeometrySpecificProps = TGeometryProps;

export type GeometryProps = ComponentPropsBaseWith<"div", GeometrySpecificProps>;

export function Geometry(inProps: GeometryProps) {
  const [{ localGeometry }, props] = pipePropsSplitters(inProps, {
    localGeometry: geometryPropsSplitter,
  });
  const {
    geometryPaddingVarName,
    geometryRoundedVarName,
    parentGeometryPaddingVarName,
    parentGeometryRoundedVarName,
    rounded,
    padding,
  } = useGeometry(localGeometry);
  const { className, style, children, ...divProps } = props;
  const [geometryClass, geometryInline] = geometryStyles({
    parentGeometryPaddingVarName,
    parentGeometryRoundedVarName,
    padding,
    rounded,
    geometryPaddingVarName,
    geometryRoundedVarName,
  });

  return (
    <ParentGeometryContextProvider
      geometryPaddingVarName={geometryPaddingVarName}
      geometryRoundedVarName={geometryRoundedVarName}
    >
      <div {...divProps} className={clsx(geometryClass, className)} style={{ ...geometryInline, ...style }}>
        {children}
      </div>
    </ParentGeometryContextProvider>
  );
}
