import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { ReactElement } from "react";

import { Geometry, GeometrySpecificProps } from "../geometry";
import { Paper, PaperSpecificProps } from "../paper";

export type GeometryPaperSpecificProps = PaperSpecificProps & GeometrySpecificProps;

export type GeometryPaperProps = ComponentPropsBaseWith<
  "div",
  GeometryPaperSpecificProps & {
    render?: ReactElement;
  }
>;

export function GeometryPaper(inProps: GeometryPaperProps) {
  const { children, background, ...props } = inProps;

  return (
    <Paper background={background} render={<Geometry {...props} />}>
      {children}
    </Paper>
  );
}

GeometryPaper.displayName = "GeometryPaper";
