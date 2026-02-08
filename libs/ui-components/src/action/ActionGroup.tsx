import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionGroupSeparatorStyles, actionGroupStyles } from "@dldc/ui-styles/action-group";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { Children, cloneElement, Fragment } from "react";

import { DefaultDesignProvider, designPropsSplitter, TDesignProps } from "../design-context";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { designVariantPropsSplitter, TDesignVariantProps, useDesignVariant } from "../variant";

export type ActionGroupProps = ComponentPropsBaseWith<
  "div",
  TDesignProps &
    TDesignVariantProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      direction?: "horizontal" | "vertical";
      roundedEnds?: "start" | "end" | "both" | "none";
      innerDividers?: boolean;
    }
>;

export function ActionGroup(inProps: ActionGroupProps) {
  const [{ localDesignVariant, localDesign }, props] = pipePropsSplitters(inProps, {
    localDesignVariant: designVariantPropsSplitter,
    localDesign: designPropsSplitter,
  });

  const { variant } = useDesignVariant(localDesignVariant, "surface");
  const {
    color,
    className,
    children,
    direction = "horizontal",
    innerDividers = true,
    roundedEnds = "both",
    style,
    ...divProps
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
  });

  return (
    <DefaultDesignProvider {...localDesign}>
      <div className={clsx(baseClass, className)} style={{ ...baseInline, ...style }} {...divProps}>
        {Children.map(childrenFiltered, (child, i) => {
          if (!child) return null;

          const isFirst = i === 0;
          const isLast = i === childrenLength - 1;
          const roundStart = roundedStart && isFirst;
          const roundEnd = roundedEnd && isLast;
          const roundedBase = roundStart && roundEnd ? "all" : roundStart ? "start" : roundEnd ? "end" : "none";

          return (
            <Fragment>
              {innerDividers && !isFirst && <span className={separatorClass} style={separatorInline} />}
              {cloneElement(child as any, {
                ["data-first"]: roundedBase === "start" ? "true" : undefined,
                ["data-last"]: roundedBase === "end" ? "true" : undefined,
                ["data-between"]: roundedBase === "none" ? "true" : undefined,
              })}
            </Fragment>
          );
        })}
      </div>
    </DefaultDesignProvider>
  );
}

ActionGroup.displayName = "ActionGroup";
