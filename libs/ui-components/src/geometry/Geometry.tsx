import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { paddingInlineStyles } from "@dldc/ui-styles/padding";
import { roundedBorderRadiusClass, roundedInlineStyles } from "@dldc/ui-styles/rounded";
import clsx from "clsx";
import { CSSProperties, ReactElement, ReactNode } from "react";

import { DefaultPaddingProvider, ParentPaddingContextProvider } from "../padding";
import { paddingProps } from "../padding/paddingProps";
import { usePadding } from "../padding/usePadding";
import { DefaultRoundedProvider, ParentRoundedContextProvider, roundedProps, useRounded } from "../rounded";

export interface GeometryProviderProps {
  skipProviders?: boolean;
}

export const geometryProviderProps = createPropsKeys<GeometryProviderProps>({
  skipProviders: null,
});

export interface GeometrySpecificProps {
  render?: ReactElement;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const geometrySpecificProps = createPropsKeys<GeometrySpecificProps>({
  render: null,
  className: null,
  style: null,
  children: null,
});

export const geometryBaseProps = mergePropsKeys(paddingProps, roundedProps, geometryProviderProps);

export const geometryProps = mergePropsKeys(...geometryBaseProps.content, geometrySpecificProps);

export type GeometryProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof geometryProps>>;

export function Geometry(inProps: GeometryProps) {
  const [[localPadding, localRounded, localGeometryProvider, localGeometrySpecific], divProps] = extractProps(
    inProps,
    geometryProps.content,
  );

  const { className, style, children, render } = localGeometrySpecific;
  const { skipProviders = false } = localGeometryProvider;

  const { padding, paddingVarName, parentPaddingVarName, nextPaddingDefaultContext } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName, nextRoundedDefaultContext } = useRounded(localRounded);

  const paddingInline = paddingInlineStyles({
    paddingVarName,
    padding,
    defaultPadding: 1,
    contentSize: null,
    contentSizeVarName: null,
    sizeVarName: null,
  });

  const roundedInline = roundedInlineStyles({
    roundedVarName,
    parentPaddingVarName,
    parentRoundedVarName,
    rounded,
    defaultRounded: 1.5,
    sizeVarName: null,
  });

  const content = createRender("div", render, {
    ...divProps,
    className: clsx(roundedBorderRadiusClass, className),
    style: { ...roundedInline, ...paddingInline, ...style },
    children,
  });

  if (skipProviders) {
    return content;
  }

  return (
    <DefaultPaddingProvider contextValue={nextPaddingDefaultContext}>
      <DefaultRoundedProvider contextValue={nextRoundedDefaultContext}>
        <ParentPaddingContextProvider paddingVarName={paddingVarName}>
          <ParentRoundedContextProvider roundedVarName={roundedVarName}>{content}</ParentRoundedContextProvider>
        </ParentPaddingContextProvider>
      </DefaultRoundedProvider>
    </DefaultPaddingProvider>
  );
}
