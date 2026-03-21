import { applyProviders } from "@dldc/react-utils/apply-providers";
import { extractProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { PropsWithChildren } from "react";

import { contentSizeProps, DefaultContentSizeProvider } from "../content-size";
import { DefaultPaddingProvider, paddingProps } from "../padding";
import { DefaultRoundedProvider, roundedProps } from "../rounded";
import { DefaultSizeProvider, sizeProps } from "../size";
import { DefaultHoverVariantProvider, DefaultVariantProvider, variantProps } from "../variant";

const defaultDesignProviderProps = mergeProps(variantProps, paddingProps, roundedProps, sizeProps, contentSizeProps);

export type DefaultDesignProviderProps = PropsWithChildren<TPropsSplittersTypes<typeof defaultDesignProviderProps>>;

export function DefaultDesignProvider(inProps: DefaultDesignProviderProps) {
  const [[localVariant, localPadding, localRounded, localSize, localContentSize], props] = extractProps(
    inProps,
    defaultDesignProviderProps,
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
