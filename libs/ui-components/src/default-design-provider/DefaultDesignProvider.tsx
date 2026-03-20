import { pipePropsSplitters } from "@dldc/react-utils/props-splitters";
import { PropsWithChildren } from "react";

import { applyProviders } from "../../../react-utils/src/apply-providers";
import { contentSizeProps, DefaultContentSizeProvider, TContentSizeProps } from "../content-size";
import { DefaultPaddingProvider, paddingProps, TPaddingProps } from "../padding";
import { DefaultRoundedProvider, roundedProps, TRoundedProps } from "../rounded";
import { DefaultSizeProvider, sizeProps, TSizeProps } from "../size";
import { DefaultHoverVariantProvider, DefaultVariantProvider, TVariantProps, variantProps } from "../variant";

export type DefaultDesignProviderProps = PropsWithChildren<
  TPaddingProps & TRoundedProps & TSizeProps & TContentSizeProps & TVariantProps
>;

export function DefaultDesignProvider(inProps: DefaultDesignProviderProps) {
  const [{ localVariant, localPadding, localRounded, localSize, localContentSize }, props] = pipePropsSplitters(
    inProps,
    {
      localVariant: variantProps,
      localPadding: paddingProps,
      localRounded: roundedProps,
      localSize: sizeProps,
      localContentSize: contentSizeProps,
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
