import { createRender } from "@dldc/react-utils/create-render";
import { pipePropsSplitters } from "@dldc/react-utils/props-splitters";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { paddingInlineStyles } from "@dldc/ui-styles/padding";
import { roundedBorderRadiusClass, roundedInlineStyles } from "@dldc/ui-styles/rounded";
import clsx from "clsx";
import { ReactElement } from "react";

import { DefaultPaddingProvider, ParentPaddingContextProvider, TPaddingProps } from "../padding";
import { paddingProps } from "../padding/paddingProps";
import { usePadding } from "../padding/usePadding";
import {
  DefaultRoundedProvider,
  ParentRoundedContextProvider,
  roundedProps,
  TRoundedProps,
  useRounded,
} from "../rounded";

export type GeometrySpecificProps = TPaddingProps &
  TRoundedProps & {
    skipProviders?: boolean;
  };

export type GeometryProps = ComponentPropsBaseWith<"div", GeometrySpecificProps & { render?: ReactElement }>;

export function Geometry(inProps: GeometryProps) {
  const [{ localPadding, localRounded }, props] = pipePropsSplitters(inProps, {
    localPadding: paddingProps,
    localRounded: roundedProps,
  });

  const { className, style, children, skipProviders = false, render, ...divProps } = props;

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
