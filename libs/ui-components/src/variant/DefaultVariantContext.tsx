import { createDefaultProvider } from "@dldc/react-utils/default-provider";

import { THoverVariantPropValue, TVariantPropValue } from "./types";

export const { DefaultProvider: DefaultVariantProvider, useDefault: useDefaultVariant } =
  createDefaultProvider<TVariantPropValue>("Variant");

export const { DefaultProvider: DefaultHoverVariantProvider, useDefault: useDefaultHoverVariant } =
  createDefaultProvider<THoverVariantPropValue>("HoverVariant");
