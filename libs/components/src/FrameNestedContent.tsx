import { heightStyles } from "@dldc/styles/common";
import { frameContentStyles } from "@dldc/styles/frame-content";
import clsx from "clsx";
import {
  DefaultDesignProvider,
  designPropsSplitter,
  SizeContextProvider,
  TDesignProps,
  useContainerDesignProps,
} from "./DesignContext/index.js";
import {
  frameContentPropsSplitter,
  TFrameContentProps,
  useFrameContent,
} from "./FrameContent/index.js";
import { pipePropsSplitters } from "./utils/propsSplitters.js";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

type FrameNestedContentProps = ComponentPropsBaseWith<
  "div",
  TFrameContentProps & TDesignProps
>;

/**
 * This component let you nest Frame content
 */
export function FrameNestedContent(inProps: FrameNestedContentProps) {
  const [{ localDesign, localFrameContent }, props] = pipePropsSplitters(
    inProps,
    {
      localDesign: designPropsSplitter,
      localFrameContent: frameContentPropsSplitter,
    },
  );

  const {
    children,

    style,
    className,

    ...htmlProps
  } = props;

  const { spacing, contentHeight, height, rounded, depth } =
    useContainerDesignProps(localDesign, "subtle");

  const { startPadding, endPadding, fragment } = useFrameContent(
    localFrameContent,
    children,
  );

  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = frameContentStyles(
    contentHeight,
    spacing,
    startPadding,
    endPadding,
    false,
  );

  return (
    <div
      className={clsx(heightClass, contentClass, className)}
      style={{ ...style, ...heightInline, ...contentInline }}
      {...htmlProps}
    >
      <DefaultDesignProvider {...localDesign} height={null}>
        <SizeContextProvider
          height={height}
          contentHeight={contentHeight}
          rounded={rounded}
          depth={depth}
        >
          {fragment}
        </SizeContextProvider>
      </DefaultDesignProvider>
    </div>
  );
}

FrameNestedContent.displayName = "FrameNestedContent";
