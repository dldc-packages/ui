import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionGroupSeparatorStyles, actionGroupStyles } from "@dldc/ui-styles/action-group";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { Children, cloneElement, Fragment } from "react";

import { TContentSizeProps } from "../content-size";
import { DesignWrapper } from "../design-wrapper";
import { TPaddingProps } from "../padding";
import { TRoundedProps } from "../rounded";
import { TSizeProps } from "../size";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TVariantProps, useVariant, variantPropsSplitter } from "../variant";

export type ActionGroupProps = ComponentPropsBaseWith<
  "div",
  TPaddingProps &
    TRoundedProps &
    TSizeProps &
    TContentSizeProps &
    TVariantProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      direction?: "horizontal" | "vertical";
      roundedEnds?: "start" | "end" | "both" | "none";
      innerDividers?: "none" | "partial" | "full";
    }
>;

export function ActionGroup(inProps: ActionGroupProps) {
  const [{ localVariant }, props] = pipePropsSplitters(inProps, {
    localVariant: variantPropsSplitter,
  });

  const { variant } = useVariant(localVariant, "surface");

  const {
    color,
    className,
    children,
    direction = "horizontal",
    innerDividers = "full",
    roundedEnds = "both",
    style,
    ...wrapperProps
  } = props;

  const childrenFiltered = Children.toArray(children).filter((c) => c);
  const childrenLength = Children.count(childrenFiltered);

  if (childrenLength === 0) return null;

  const roundedStart = roundedEnds === "start" || roundedEnds === "both";
  const roundedEnd = roundedEnds === "end" || roundedEnds === "both";

  const [baseClass, baseInline] = actionGroupStyles({
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
      style={{ ...baseInline, ...style }}
      {...wrapperProps}
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
