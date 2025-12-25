import { ellipsisClass } from "@dldc/styles/ellipsis";
import { TFrameContentPaddingResolved } from "@dldc/styles/frame-content";
import { Fragment } from "react/jsx-runtime";
import { TPropsSplitter } from "../utils/propsSplitters.js";
import { FrameSideSlot } from "./FrameSideSlot.js";

export type TFrameContentPadding = "auto" | TFrameContentPaddingResolved;

export interface TFrameContentProps {
  startIcon?: React.ReactNode;
  loading?: boolean;
  startSlot?: React.ReactNode;
  endIcon?: React.ReactNode;
  endSlot?: React.ReactNode;

  /**
   * Apply padding to both sides of the content.
   */
  padding?: TFrameContentPadding;

  /**
   * Reduce left padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of startIcon or startSlot and content.
   * You only need need to set this if
   * - You pass a custom content that has a start icon
   * - You pass a startSlot that is not an icon
   */
  startPadding?: TFrameContentPadding;

  /**
   * Reduce right padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of endIcon or endSlot.
   * You only need need to set this if
   * - You pass a custom content that has an end icon
   * - You pass an endSlot that is not an icon
   */
  endPadding?: TFrameContentPadding;

  /**
   * If true, the padding and gap are not applied.
   */
  noLayout?: boolean;
}

export interface TFrameContentResult {
  fragment: React.ReactNode;
  startPadding: TFrameContentPaddingResolved;
  endPadding: TFrameContentPaddingResolved;
  noLayout: boolean;
}

export function useFrameContent(props: TFrameContentProps, content?: React.ReactNode): TFrameContentResult {
  const {
    startIcon,
    loading,
    startSlot,
    endIcon,
    endSlot,
    padding = "auto",
    endPadding = padding,
    startPadding = padding,
    noLayout = false,
  } = props;

  const hasStartSlot = Boolean(startSlot || startIcon || loading);
  const hasEndSlot = Boolean(endSlot || endIcon);
  const hasChildren = Boolean(content);
  // Special case for start icon/slot only
  const iconOnly = (hasStartSlot && !hasChildren && !hasEndSlot) || (hasEndSlot && !hasStartSlot && !hasChildren);
  const isEmpty = !hasStartSlot && !hasChildren && !hasEndSlot;

  const defaultStartPadding = noLayout ? "none" : isEmpty ? "icon" : iconOnly ? "icon" : hasStartSlot ? "icon" : "text";
  const startPaddingResolved: TFrameContentPaddingResolved =
    startPadding === "auto" ? defaultStartPadding : startPadding;

  const defaultEndPadding = noLayout ? "none" : isEmpty ? "icon" : iconOnly ? "icon" : hasEndSlot ? "icon" : "text";
  const endPaddingResolved: TFrameContentPaddingResolved = endPadding === "auto" ? defaultEndPadding : endPadding;

  const fragment = (
    <Fragment>
      {hasStartSlot && (
        <FrameSideSlot icon={startIcon} loading={loading} slot={startSlot} isItemMainIcon isIconOnly={iconOnly} />
      )}
      {hasChildren &&
        (typeof content === "string" ? (
          <span className={ellipsisClass} style={{ flex: 1, textAlign: "left" }}>
            {content}
          </span>
        ) : (
          content
        ))}
      {hasEndSlot && (
        <FrameSideSlot
          icon={endIcon}
          slot={endSlot}
          isItemMainIcon={false}
          isIconOnly={iconOnly}
          style={{ marginLeft: "auto" }}
        />
      )}
    </Fragment>
  );

  return {
    fragment,
    startPadding: startPaddingResolved,
    endPadding: endPaddingResolved,
    noLayout,
  };
}

const FRAME_CONTENT_PROPS_KEYS = Object.keys({
  startIcon: "startIcon",
  startSlot: "startSlot",
  endIcon: "endIcon",
  endSlot: "endSlot",
  padding: "padding",
  startPadding: "startPadding",
  endPadding: "endPadding",
  loading: "loading",
  noLayout: "noLayout",
} satisfies { [K in keyof Required<TFrameContentProps>]: K });

export const frameContentPropsSplitter: TPropsSplitter<TFrameContentProps> = (props) => {
  const result: Partial<TFrameContentProps> = {};
  FRAME_CONTENT_PROPS_KEYS.forEach((key) => {
    if (key in props) {
      result[key as keyof TFrameContentProps] = props[key as keyof TFrameContentProps];
    }
  });
  return result;
};

export function FrameContentFragment(props: TFrameContentProps & { children?: React.ReactNode }) {
  return useFrameContent(props, props.children).fragment;
}

FrameContentFragment.displayName = "FrameContentFragment";
