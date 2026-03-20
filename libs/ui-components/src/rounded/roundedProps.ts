import { createProps } from "@dldc/react-utils/props-splitters";

import { TRoundedProps } from "./types";

export const roundedProps = createProps<TRoundedProps>({
  rounded: null,
});
