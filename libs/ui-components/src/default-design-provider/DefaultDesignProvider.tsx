import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { PropsWithChildren } from "react";

import { contentSizePropsSplitter, DefaultContentSizeProvider, TContentSizeProps } from "../content-size";
import { DefaultPaddingProvider, paddingPropsSplitter, TPaddingProps } from "../padding";
import { DefaultRoundedProvider, roundedPropsSplitter, TRoundedProps } from "../rounded";
import { DefaultSizeProvider, sizePropsSplitter, TSizeProps } from "../size";
import { applyProviders } from "../utils/applyProviders";
import { DefaultHoverVariantProvider, DefaultVariantProvider, TVariantProps, variantPropsSplitter } from "../variant";

export type DefaultDesignProviderProps = PropsWithChildren<
  TPaddingProps & TRoundedProps & TSizeProps & TContentSizeProps & TVariantProps
>;

export function DefaultDesignProvider(inProps: DefaultDesignProviderProps) {
  const [{ localVariant, localPadding, localRounded, localSize, localContentSize }, props] = pipePropsSplitters(
    inProps,
    {
      localVariant: variantPropsSplitter,
      localPadding: paddingPropsSplitter,
      localRounded: roundedPropsSplitter,
      localSize: sizePropsSplitter,
      localContentSize: contentSizePropsSplitter,
    },
  );

  const { children } = props;

  return applyProviders(
    localVariant?.variant ? <DefaultVariantProvider value={localVariant?.variant} /> : null,
    localVariant?.hoverVariant ? <DefaultHoverVariantProvider value={localVariant?.hoverVariant} /> : null,
    localPadding.padding ? <DefaultPaddingProvider value={localPadding.padding} /> : null,
    localSize.size ? <DefaultSizeProvider value={localSize.size} /> : null,
    localContentSize.contentSize ? <DefaultContentSizeProvider value={localContentSize.contentSize} /> : null,
    localRounded.rounded ? <DefaultRoundedProvider value={localRounded.rounded} /> : null,
  )(children);
}

DefaultDesignProvider.displayName = "DefaultDesignProvider";
