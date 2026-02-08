import { TActionContentPaddingResolved } from "@dldc/ui-styles/action-content";
import { ellipsisClass } from "@dldc/ui-styles/ellipsis";
import { TPropsSplitter } from "@dldc/utils/props-splitters";
import { Fragment } from "react/jsx-runtime";

import { ActionSideSlot } from "./ActionSideSlot";

export type TActionContentPadding = "auto" | TActionContentPaddingResolved;

export interface TActionContentProps {
  startIcon?: React.ReactNode;
  loading?: boolean;
  startSlot?: React.ReactNode;
  endIcon?: React.ReactNode;
  endSlot?: React.ReactNode;

  /**
   * Apply padding to both sides of the content.
   */
  padding?: TActionContentPadding;

  /**
   * Reduce left padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of startIcon or startSlot and content.
   * You only need need to set this if
   * - You pass a custom content that has a start icon
   * - You pass a startSlot that is not an icon
   */
  startPadding?: TActionContentPadding;

  /**
   * Reduce right padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of endIcon or endSlot.
   * You only need need to set this if
   * - You pass a custom content that has an end icon
   * - You pass an endSlot that is not an icon
   */
  endPadding?: TActionContentPadding;

  /**
   * If true, the padding and gap are not applied.
   */
  noLayout?: boolean;
}

export interface TActionContentResult {
  fragment: React.ReactNode;
  startPadding: TActionContentPaddingResolved;
  endPadding: TActionContentPaddingResolved;
  noLayout: boolean;
}

export function useActionContent(props: TActionContentProps, content?: React.ReactNode): TActionContentResult {
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
  const startPaddingResolved: TActionContentPaddingResolved =
    startPadding === "auto" ? defaultStartPadding : startPadding;

  const defaultEndPadding = noLayout ? "none" : isEmpty ? "icon" : iconOnly ? "icon" : hasEndSlot ? "icon" : "text";
  const endPaddingResolved: TActionContentPaddingResolved = endPadding === "auto" ? defaultEndPadding : endPadding;

  const fragment = (
    <Fragment>
      {hasStartSlot && (
        <ActionSideSlot icon={startIcon} loading={loading} slot={startSlot} isItemMainIcon isIconOnly={iconOnly} />
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
        <ActionSideSlot
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

const ACTION_CONTENT_PROPS_KEYS = Object.keys({
  startIcon: "startIcon",
  startSlot: "startSlot",
  endIcon: "endIcon",
  endSlot: "endSlot",
  padding: "padding",
  startPadding: "startPadding",
  endPadding: "endPadding",
  loading: "loading",
  noLayout: "noLayout",
} satisfies { [K in keyof Required<TActionContentProps>]: K });

export const actionContentPropsSplitter: TPropsSplitter<TActionContentProps> = (props) => {
  const result: Partial<TActionContentProps> = {};
  ACTION_CONTENT_PROPS_KEYS.forEach((key) => {
    if (key in props) {
      result[key as keyof TActionContentProps] = props[key as keyof TActionContentProps];
    }
  });
  return result;
};

export function ActionContentFragment(props: TActionContentProps & { children?: React.ReactNode }) {
  return useActionContent(props, props.children).fragment;
}

ActionContentFragment.displayName = "ActionContentFragment";
