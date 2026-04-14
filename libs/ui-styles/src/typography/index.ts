import * as css from "@dldc/css-builder";
import { UNIT_IN_REM, UNIT_IN_REM_STRING } from "@dldc/ui-core/size";
import { TFontWeight } from "@dldc/ui-core/typography";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { CSSProperties } from "../utils/types";

import { contentSizeLineHeightClass } from "../content-size/contentSize.css";
import { fontWeightVariantsClass } from "./typography.css";

export { fontWeightVariantsClass };

export interface TypographyStylesParams {
  contentSize: null | number | "parentSize";
  fontSize: number | null;
  fontWeight: TFontWeight | null;
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
  defaultContentSize: number;
}

export function typographyStyles({
  fontWeight,
  contentSize,
  contentSizeVarName,
  parentContentSizeVarName,
  defaultContentSize,
  fontSize,
}: TypographyStylesParams): [classname: string, styles: CSSProperties] {
  const [typographyContentSizeClass, typographyContentSizeInline] = typographyContentSizeStyles({
    contentSize,
    contentSizeVarName,
    parentContentSizeVarName,
    defaultContentSize,
    fontSize,
  });

  return [
    clsx(fontWeight ? fontWeightVariantsClass[fontWeight] : null, typographyContentSizeClass),
    { ...typographyContentSizeInline, ...typographyFontSizeInlineStyles({ fontSize }) },
  ];
}

interface TypographyContentSizeStylesParams {
  contentSize: null | number | "parentSize";
  contentSizeVarName: string;
  parentContentSizeVarName: string | null;
  defaultContentSize: number;
  fontSize: number | null;
}

function typographyContentSizeStyles({
  contentSize,
  contentSizeVarName,
  parentContentSizeVarName,
  defaultContentSize,
  fontSize,
}: TypographyContentSizeStylesParams): [classname: string, styles: CSSProperties] {
  const contentSizeVarVal = contentSizeVarValue({
    contentSize,
    parentContentSizeVarName,
    defaultContentSize,
    fontSize,
  });
  if (contentSizeVarVal === null) {
    return ["", {}];
  }
  return [
    contentSizeLineHeightClass,
    assignInlineVars({
      [contentSizeVarName]: css.serialize(contentSizeVarVal),
      [contentSizeVar]: css.serialize(css.multiply(css.var(contentSizeVarName), UNIT_IN_REM_STRING)),
    }),
  ];
}

interface TypographyFontSizeInlineStylesParams {
  fontSize: number | null;
}

function typographyFontSizeInlineStyles({ fontSize }: TypographyFontSizeInlineStylesParams): CSSProperties {
  if (!fontSize) {
    return {};
  }

  return assignInlineVars({
    fontSize: css.serialize(css.multiply(css.number(fontSize), UNIT_IN_REM_STRING)),
  });
}

export interface TContentSizeVarValueParams {
  contentSize: null | number | "parentSize";
  parentContentSizeVarName: string | null;
  defaultContentSize: number;
  fontSize: number | null;
}

function contentSizeVarValue({
  contentSize,
  parentContentSizeVarName,
  defaultContentSize,
  fontSize,
}: TContentSizeVarValueParams) {
  if (contentSize === "parentSize") {
    // Note: this is the default behavior of typography: take contentSize of parent content-size.
    // we handle this case only for sake of completeness
    if (parentContentSizeVarName) {
      return css.var(parentContentSizeVarName);
    }
    return null;
  }
  if (typeof contentSize === "number") {
    return css.number(contentSize);
  }
  contentSize satisfies null;
  if (fontSize !== null) {
    // Compute contentSize (lineHeight) from fontSize
    return css.roundDown(css.multiply(css.number(fontSize), 1.4), UNIT_IN_REM);
  }

  if (!parentContentSizeVarName) {
    return css.number(defaultContentSize);
  }
  return css.var(parentContentSizeVarName);
}
