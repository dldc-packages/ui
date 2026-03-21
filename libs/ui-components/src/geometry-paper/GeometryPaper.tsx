import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { ReactElement } from "react";

import { Geometry, geometryBaseProps } from "../geometry";
import { Paper, paperBaseProps } from "../paper";

export interface GeometryPaperSpecificProps {
  render?: ReactElement;
  children?: React.ReactNode;
}

export const geometryPaperSpecificProps = createPropsKeys<GeometryPaperSpecificProps>({
  render: null,
  children: null,
});

export const geometryPaperBaseProps = mergePropsKeys(geometryBaseProps, paperBaseProps);

export const geometryPaperProps = mergePropsKeys(geometryPaperBaseProps, geometryPaperSpecificProps);

export type GeometryPaperProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof geometryPaperProps>>;

export function GeometryPaper(inProps: GeometryPaperProps) {
  const [props, htmlProps] = extractProps(inProps, geometryPaperProps);
  const { background, children, ...rest } = props;

  return (
    <Paper background={background} render={<Geometry {...htmlProps} {...rest} />}>
      {children}
    </Paper>
  );
}

GeometryPaper.displayName = "GeometryPaper";
