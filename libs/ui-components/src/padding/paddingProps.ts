import { createProps } from "@dldc/react-utils/props-splitters";

import { TPaddingProps } from "./types";

export const paddingProps = createProps<TPaddingProps>({
  padding: null,
});
