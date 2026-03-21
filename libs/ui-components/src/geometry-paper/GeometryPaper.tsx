import { createProps, extractAllProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { ReactElement } from "react";

import { Geometry, geometryBaseProps } from "../geometry";
import { Paper, paperBaseProps } from "../paper";

export interface GeometryPaperSpecificProps {
  render?: ReactElement;
  children?: React.ReactNode;
}

export const geometryPaperSpecificProps = createProps<GeometryPaperSpecificProps>({
  render: null,
  children: null,
});

export const geometryPaperBaseProps = mergeProps(...geometryBaseProps, ...paperBaseProps);

export const geometryPaperProps = mergeProps(...geometryPaperBaseProps, geometryPaperSpecificProps);

export type GeometryPaperProps = ComponentPropsBaseWith<"div", TPropsSplittersTypes<typeof geometryPaperProps>>;

export function GeometryPaper(inProps: GeometryPaperProps) {
  const [props, htmlProps] = extractAllProps(inProps, geometryPaperProps);
  const { background, children, ...rest } = props;

  return (
    <Paper background={background} render={<Geometry {...htmlProps} {...rest} />}>
      {children}
    </Paper>
  );
}

GeometryPaper.displayName = "GeometryPaper";
