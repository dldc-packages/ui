import { applyProviders } from "@dldc/react-utils/apply-providers";
import { extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { PropsWithChildren } from "react";

import { contentSizeProps, DefaultContentSizeProvider } from "../content-size";
import { DefaultPaddingProvider, paddingProps } from "../padding";
import { DefaultRoundedProvider, roundedProps } from "../rounded";
import { DefaultSizeProvider, sizeProps } from "../size";
import { DefaultHoverVariantProvider, DefaultVariantProvider, variantProps } from "../variant";

const defaultDesignProviderProps = mergePropsKeys(
  variantProps,
  paddingProps,
  roundedProps,
  sizeProps,
  contentSizeProps,
);

export type DefaultDesignProviderProps = PropsWithChildren<TypeOfPropsKeys<typeof defaultDesignProviderProps>>;

export function DefaultDesignProvider(inProps: DefaultDesignProviderProps) {
  const [[localVariant, localPadding, localRounded, localSize, localContentSize], props] = extractProps(
    inProps,
    defaultDesignProviderProps.content,
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
