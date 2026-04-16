import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createItemGroupLook, createItemGroupSeparatorLook } from "@dldc/ui-styles/item-group";
import { look, mergeLooks, TLook } from "@dldc/ui-styles/utils";
import { Children, cloneElement, Fragment } from "react";

import { contentSizeProps } from "../content-size";
import { DefaultDesignProvider } from "../default-design-provider";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";

export interface ItemGroupSpecificProps {
  direction?: "horizontal" | "vertical";
  roundedEnds?: "start" | "end" | "both" | "none";
  noDividers?: boolean;
  dividerLook?: TLook;
}

export const itemGroupSpecificProps = createPropsKeys<ItemGroupSpecificProps>({
  direction: null,
  roundedEnds: null,
  noDividers: null,
  dividerLook: null,
});

export const itemGroupProps = mergePropsKeys(
  itemGroupSpecificProps,
  sizeProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
);

export type ItemGroupProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof itemGroupProps>>;

export function ItemGroup(inProps: ItemGroupProps) {
  const [[localItemGroupSpecific, localSize, localContentSize, localPadding, localRounded], props] = extractProps(
    inProps,
    itemGroupProps.content,
  );

  const { children, className, style, render, ...htmlProps } = props;
  const { direction = "horizontal", roundedEnds = "both", noDividers = false, dividerLook } = localItemGroupSpecific;

  const childrenFiltered = Children.toArray(children).filter((c) => c);
  const childrenLength = Children.count(childrenFiltered);

  if (childrenLength === 0) return null;

  const roundedStart = roundedEnds === "start" || roundedEnds === "both";
  const roundedEnd = roundedEnds === "end" || roundedEnds === "both";

  const itemGroupLook = createItemGroupLook({
    direction,
  });

  const itemGroupSeparatorLook = createItemGroupSeparatorLook({
    direction,
  });

  const renderInnerDividers = !noDividers;

  const childContent = Children.map(childrenFiltered, (child, i) => {
    if (!child) return null;

    const isFirst = i === 0;
    const isLast = i === childrenLength - 1;
    const roundStart = roundedStart && isFirst;
    const roundEnd = roundedEnd && isLast;
    const roundedBase = roundStart && roundEnd ? "all" : roundStart ? "start" : roundEnd ? "end" : "none";

    return (
      <Fragment>
        {renderInnerDividers && !isFirst && <span {...mergeLooks(itemGroupSeparatorLook, dividerLook)} />}
        {cloneElement(child as any, {
          ["data-first"]: roundedBase === "start" ? "true" : undefined,
          ["data-last"]: roundedBase === "end" ? "true" : undefined,
          ["data-between"]: roundedBase === "none" ? "true" : undefined,
        })}
      </Fragment>
    );
  });

  return createRender("div", render, {
    ...mergeLooks(itemGroupLook, look(className, style)),
    ...htmlProps,

    children: (
      <DefaultDesignProvider {...localSize} {...localContentSize} {...localPadding} {...localRounded}>
        {childContent}
      </DefaultDesignProvider>
    ),
  });
}
ItemGroup.displayName = "ItemGroup";
