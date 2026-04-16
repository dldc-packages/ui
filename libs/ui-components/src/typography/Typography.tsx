import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { parseMaybeSize, TDesignSize } from "@dldc/ui-core/size";
import { TFontWeight } from "@dldc/ui-core/typography";
import { createTypographyLook } from "@dldc/ui-styles/typography";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { useMemo } from "react";

import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";

export interface FontWeightProps {
  fontWeight?: TFontWeight;
}

export const fontWeightProps = createPropsKeys<FontWeightProps>({
  fontWeight: null,
});

export interface FontSizeProps {
  fontSize?: TDesignSize;
}

export const fontSizeProps = createPropsKeys<FontSizeProps>({
  fontSize: null,
});

export const typographyProps = mergePropsKeys(contentSizeProps, fontWeightProps, fontSizeProps);

export type TypographyProps = ComponentPropsBaseWith<"span", TypeOfPropsKeys<typeof typographyProps>>;

export function Typography(inProps: TypographyProps) {
  const [[localContentSize, localFontWeight, localFontSize], props] = extractProps(inProps, typographyProps.content);
  const { render, style, className, children, ...htmlProps } = props;

  const { fontWeight = null } = localFontWeight;
  const { contentSize, contentSizeVarName, parentContentSizeVarName, nextContentSizeDefaultContext } =
    useContentSize(localContentSize);

  const fontSize = parseMaybeSize(localFontSize.fontSize);

  const provideContentSize = contentSize !== null || parentContentSizeVarName === null;

  const typographyLook = useMemo(
    () =>
      createTypographyLook({
        contentSize,
        fontSize,
        fontWeight,
        contentSizeVarName,
        parentContentSizeVarName,
        defaultContentSize: 4,
      }),
    [fontSize, fontWeight, contentSizeVarName, contentSize, parentContentSizeVarName],
  );

  return createRender("span", render, {
    ...mergeLooks(typographyLook, look(className, style)),
    ...htmlProps,
    children: applyProviders(
      nextContentSizeDefaultContext && <DefaultContentSizeProvider contextValue={nextContentSizeDefaultContext} />,
      provideContentSize && <ParentContentSizeContextProvider contentSizeVarName={contentSizeVarName} />,
    )(children),
  });
}
Typography.displayName = "Typography";
