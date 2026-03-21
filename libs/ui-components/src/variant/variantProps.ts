import { createPropsKeys } from "@dldc/react-utils/props-keys";

import { TVariantProps } from "./types";

export const variantProps = createPropsKeys<TVariantProps>({
  hoverVariant: null,
  variant: null,
});
