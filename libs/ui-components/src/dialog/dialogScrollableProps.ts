import { createPropsKeys } from "@dldc/react-utils/props-keys";

export interface DialogScrollableProps {
  scrollable?: boolean;
}

export const dialogScrollableProps = createPropsKeys<DialogScrollableProps>({
  scrollable: null,
});
