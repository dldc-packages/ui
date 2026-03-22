import { createPropsKeys } from "@dldc/react-utils/props-keys";
import { ReactElement } from "react";

export interface RenderProps {
  render?: ReactElement;
}

export const renderProps = createPropsKeys<RenderProps>({
  render: null,
});
