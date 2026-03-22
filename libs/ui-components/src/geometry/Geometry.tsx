import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { paddingInlineStyles } from "@dldc/ui-styles/padding";
import { roundedBorderRadiusClass, roundedInlineStyles } from "@dldc/ui-styles/rounded";
import clsx from "clsx";

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

export const geometryProps = mergePropsKeys(paddingProps, roundedProps, geometryProviderProps);

export type GeometryProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof geometryProps>>;

export function Geometry(inProps: GeometryProps) {
  const [[localPadding, localRounded, localGeometryProvider], props] = extractProps(inProps, geometryProps.content);

  const { className, style, children, render, ...htmlProps } = props;
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
    ...htmlProps,
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
