import { createPropsKeys } from "@dldc/react-utils/props-keys";
import { CSSProperties, ReactNode } from "react";

export interface HTMLBaseProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const htmlBaseProps = createPropsKeys<HTMLBaseProps>({
  style: null,
  className: null,
  children: null,
});
