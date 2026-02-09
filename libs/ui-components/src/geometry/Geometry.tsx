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
  const [{ geometryProps }, props] = pipePropsSplitters(inProps, {
    geometryProps: geometryPropsSplitter,
  });
  const { rounded, padding } = useGeometry(geometryProps);
  const { className, style, children, ...divProps } = props;
  const [geometryClass, geometryInline] = geometryStyles(rounded, padding);

  return (
    <ParentGeometryContextProvider rounded={rounded} padding={padding}>
      <div {...divProps} className={clsx(geometryClass, className)} style={{ ...geometryInline, ...style }}>
        {children}
      </div>
    </ParentGeometryContextProvider>
  );
}
