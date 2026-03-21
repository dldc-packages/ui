import { createPropsKeys, mergePropsKeys } from "@dldc/react-utils/props-keys";
import { ReactElement } from "react";

import { geometryPaperProps } from "../geometry-paper";

export interface DialogContainerSpecificProps {
  render?: ReactElement;
  children?: React.ReactNode;
}

export const dialogContainerSpecificProps = createPropsKeys<DialogContainerSpecificProps>({
  render: null,
  children: null,
});

export const dialogContainerProps = mergePropsKeys(geometryPaperProps, dialogContainerSpecificProps);

export function DialogContainer() {
  return <div>Hello DialogContainer!</div>;
}
DialogContainer.displayName = "DialogContainer";
