import * as Ariakit from "@ariakit/react";
import { TPaletteColor } from "@dldc/design/colors";
import { TDesignVariant } from "@dldc/design/variants";
import { frameStyles } from "@dldc/styles/frame";
import { frameContentStyles } from "@dldc/styles/frame-content";
import clsx from "clsx";
import { ElementType, Ref } from "react";
import {
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

export type FrameProps = ComponentPropsBaseWith<
  ElementType,
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;
      highlightColor?: TPaletteColor;
      highlighted?: boolean;

      /**
       * Defines the variant used as the base for this Frame.
       * For example, Input components use the "input" variant by default.
       */
      baseVariant?: TDesignVariant;

      // Forward to Element
      render?: Ariakit.RoleProps["render"];

      interactive?: boolean;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function Frame(inProps: FrameProps) {
  const [{ localDesign, localFrameContent }, props] = pipePropsSplitters(
    inProps,
    {
      localDesign: designPropsSplitter,
      localFrameContent: frameContentPropsSplitter,
    },
  );

  const {
    color,
    highlightColor = "red",
    highlighted = false,

    baseVariant = "surface",
    interactive = false,

    children,
    disabled = false,
    style,
    className,
    ref,

    ...htmlProps
  } = props;

  const isDisabledAndInteractive = disabled && interactive;

  const {
    hoverVariant,
    variant,
    height,
    contentHeight,
    spacing,
    rounded,
    depth,
  } = useContainerDesignProps(localDesign, baseVariant);

  const { startPadding, endPadding, fragment, noLayout } = useFrameContent(
    localFrameContent,
    children,
  );

  const [baseClass, baseInline] = frameStyles({
    height,
    contentHeight,
    rounded,
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });

  const [contentClass, contentInline] = frameContentStyles(
    contentHeight,
    spacing,
    startPadding,
    endPadding,
    noLayout,
  );

  return (
    <Ariakit.Role
      className={clsx(baseClass, contentClass, className)}
      style={{ ...baseInline, ...contentInline, ...style }}
      aria-disabled={isDisabledAndInteractive}
      ref={ref as Ref<HTMLDivElement>}
      {...htmlProps}
    >
      <SizeContextProvider
        height={height}
        contentHeight={contentHeight}
        rounded={rounded}
        depth={depth}
      >
        {fragment}
      </SizeContextProvider>
    </Ariakit.Role>
  );
}

Frame.displayName = "Frame";
