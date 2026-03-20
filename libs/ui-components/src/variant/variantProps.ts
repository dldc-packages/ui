import { createProps } from "@dldc/react-utils/props-splitters";

import { TVariantProps } from "./types";

export const variantProps = createProps<TVariantProps>({
  hoverVariant: null,
  variant: null,
});
