import { extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";

import { Geometry, geometryProps } from "../geometry";
import { Paper, paperProps } from "../paper";

export const geometryPaperProps = mergePropsKeys(geometryProps, paperProps);

export type GeometryPaperProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof geometryPaperProps>>;

export function GeometryPaper(inProps: GeometryPaperProps) {
  const [[localGeometry, localPaper], props] = extractProps(inProps, geometryPaperProps.content);
  const { background, children, ...htmlProps } = props;

  return (
    <Paper {...localPaper} render={<Geometry {...localGeometry} {...htmlProps} />}>
      {children}
    </Paper>
  );
}
GeometryPaper.displayName = "GeometryPaper";
