import { createPropsKeys } from "@dldc/react-utils/props-keys";

export type TDialogSizeValue = "sm" | "md" | "lg" | "xl" | "full";

export interface DoalogSizeProps {
  size?: TDialogSizeValue;
}

export const dialogSizeProps = createPropsKeys<DoalogSizeProps>({
  size: null,
});
