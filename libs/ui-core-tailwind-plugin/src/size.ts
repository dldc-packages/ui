import { serializeSize } from "@dldc/ui-core/size";
import { buildSizeTokenMap, range } from "./utils";

const SIZES_VALUES = [
  0,
  0.5,
  ...range(1, 16 - 1, 1),
  ...range(16, 40 - 1, 2),
  ...range(40, 80, 4),
];

const PX_SIZES_VALUES = [...range(80 + 1, 1024 + 1, 32)];

export const spacing = {
  ...buildSizeTokenMap(SIZES_VALUES, serializeSize),
};

export const sizes = {
  ...buildSizeTokenMap(SIZES_VALUES, serializeSize),
  ...buildSizeTokenMap(PX_SIZES_VALUES, (value) => `${value}px`),

  prose: { value: "65ch" },
  full: { value: "100%" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },
};
