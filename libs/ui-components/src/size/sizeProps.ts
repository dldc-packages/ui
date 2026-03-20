import { createProps } from "@dldc/react-utils/props-splitters";

import { TSizeProps } from "./types";

export const sizeProps = createProps<TSizeProps>({
  size: null,
});
