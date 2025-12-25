import { createCss, property } from "@dldc/css-engine/factory";
import { Property } from "csstype";

const baseProperties = {
  background: property<Property.Background>(),
} as const;

const schema = {
  ...baseProperties,
  _hover: {
    ...baseProperties,
  },
} as const;

export const css = createCss(schema, {
  conditions: {
    _hover: "&:is(:hover, [data-hover])",
  },
  properties: {
    background: {
      transform: (value: string) => ({ background: value }),
      staticValues: ["red", "blue", "green"],
    },
  },
});
