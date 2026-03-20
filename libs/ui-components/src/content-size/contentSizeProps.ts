import { createProps } from "@dldc/react-utils/props-splitters";

import { TContentSizeProps } from "./types";

export const contentSizeProps = createProps<TContentSizeProps>({
  contentSize: null,
});
