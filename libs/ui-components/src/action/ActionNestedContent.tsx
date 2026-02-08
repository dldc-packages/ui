import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { heightStyles } from "@dldc/ui-styles/common";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content/index";
import {
  DefaultDesignProvider,
  designPropsSplitter,
  SizeContextProvider,
  TDesignProps,
  useFrameDesignProps,
} from "../design-context";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

type ActionNestedContentProps = ComponentPropsBaseWith<"div", TActionContentProps & TDesignProps>;

/**
 * This component let you nest Action content
 */
export function ActionNestedContent(inProps: ActionNestedContentProps) {
  const [{ localDesign, localActionContent }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
    localActionContent: actionContentPropsSplitter,
  });

  const {
    children,

    style,
    className,

    ...htmlProps
  } = props;

  const { spacing, contentHeight, height, rounded, depth } = useFrameDesignProps(localDesign);
  const { startPadding, endPadding, fragment } = useActionContent(localActionContent, children);

  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = actionContentStyles(contentHeight, spacing, startPadding, endPadding, false);

  return (
    <div
      className={clsx(heightClass, contentClass, className)}
      style={{ ...style, ...heightInline, ...contentInline }}
      {...htmlProps}
    >
      <DefaultDesignProvider {...localDesign} height={null}>
        <SizeContextProvider height={height} contentHeight={contentHeight} rounded={rounded} depth={depth}>
          {fragment}
        </SizeContextProvider>
      </DefaultDesignProvider>
    </div>
  );
}

ActionNestedContent.displayName = "ActionNestedContent";
