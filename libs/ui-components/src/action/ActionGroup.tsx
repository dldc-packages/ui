import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionGroupSeparatorStyles, actionGroupStylesClass } from "@dldc/ui-styles/action-group";
import clsx from "clsx";
import { Children, cloneElement, Fragment } from "react";

import { contentSizeProps } from "../content-size";
import { DesignWrapper } from "../design-wrapper";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
import { useVariant, variantProps } from "../variant";

export interface ActionGroupSpecificProps {
  disabled?: boolean;
  color?: TPaletteColor;
  direction?: "horizontal" | "vertical";
  roundedEnds?: "start" | "end" | "both" | "none";
  innerDividers?: "none" | "partial" | "full";
}

export const actionGroupSpecificProps = createPropsKeys<ActionGroupSpecificProps>({
  color: null,
  disabled: null,
  direction: null,
  roundedEnds: null,
  innerDividers: null,
});

export const actionGroupProps = mergePropsKeys(
  actionGroupSpecificProps,
  variantProps,
  sizeProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
);

export type ActionGroupProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionGroupProps>>;

export function ActionGroup(inProps: ActionGroupProps) {
  const [[localActionGroupSpecific, localVariant, localSize, localContentSize, localPadding, localRounded], props] =
    extractProps(inProps, actionGroupProps.content);

  const { variant } = useVariant(localVariant, "surface");

  const { children, className, style, render, ...wrapperProps } = props;
  const {
    color,
    direction = "horizontal",
    innerDividers = "full",
    roundedEnds = "both",
    // TODO: handle disabled
    // disabled,
  } = localActionGroupSpecific;

  const childrenFiltered = Children.toArray(children).filter((c) => c);
  const childrenLength = Children.count(childrenFiltered);

  if (childrenLength === 0) return null;

  const roundedStart = roundedEnds === "start" || roundedEnds === "both";
  const roundedEnd = roundedEnds === "end" || roundedEnds === "both";

  const baseClass = actionGroupStylesClass({
    direction,
    color,
    variant,
  });
  const [separatorClass, separatorInline] = actionGroupSeparatorStyles({
    direction,
    variant,
    separatorVariant: innerDividers,
  });

  const renderInnerDividers = innerDividers !== "none";

  return (
    <DesignWrapper
      {...localVariant}
      color={color}
      className={clsx(baseClass, className)}
      style={style}
      {...wrapperProps}
      {...localSize}
      {...localContentSize}
      {...localPadding}
      {...localRounded}
    >
      {Children.map(childrenFiltered, (child, i) => {
        if (!child) return null;

        const isFirst = i === 0;
        const isLast = i === childrenLength - 1;
        const roundStart = roundedStart && isFirst;
        const roundEnd = roundedEnd && isLast;
        const roundedBase = roundStart && roundEnd ? "all" : roundStart ? "start" : roundEnd ? "end" : "none";

        return (
          <Fragment>
            {renderInnerDividers && !isFirst && <span className={separatorClass} style={separatorInline} />}
            {cloneElement(child as any, {
              ["data-first"]: roundedBase === "start" ? "true" : undefined,
              ["data-last"]: roundedBase === "end" ? "true" : undefined,
              ["data-between"]: roundedBase === "none" ? "true" : undefined,
            })}
          </Fragment>
        );
      })}
    </DesignWrapper>
  );
}
ActionGroup.displayName = "ActionGroup";
