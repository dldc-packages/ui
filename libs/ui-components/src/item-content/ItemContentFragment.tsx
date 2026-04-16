import { createPropsKeys } from "@dldc/react-utils/props-keys";
import { createEllipsisLook } from "@dldc/ui-styles/ellipsis";
import { TItemContentPaddingModeResolved } from "@dldc/ui-styles/item-content";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { Fragment } from "react/jsx-runtime";

import { IconSlot } from "../icon-slot/IconSlot";

export type TItemContentPaddingMode = "auto" | TItemContentPaddingModeResolved;

export interface TItemContentProps {
  startIcon?: React.ReactNode;
  loading?: boolean;
  startSlot?: React.ReactNode;
  endIcon?: React.ReactNode;
  endSlot?: React.ReactNode;

  /**
   * Apply padding to both sides of the content.
   */
  paddingMode?: TItemContentPaddingMode;

  /**
   * Reduce left padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of startIcon or startSlot and content.
   * You only need need to set this if
   * - You pass a custom content that has a start icon
   * - You pass a startSlot that is not an icon
   */
  startPaddingMode?: TItemContentPaddingMode;

  /**
   * Reduce right padding so the icon is squarely aligned.
   * By default, this is computed based on the presence of endIcon or endSlot.
   * You only need need to set this if
   * - You pass a custom content that has an end icon
   * - You pass an endSlot that is not an icon
   */
  endPaddingMode?: TItemContentPaddingMode;

  /**
   * If true, the padding and gap are not applied.
   */
  noLayout?: boolean;
}

export interface TItemContentResult {
  fragment: React.ReactNode;
  startPaddingMode: TItemContentPaddingModeResolved;
  endPaddingMode: TItemContentPaddingModeResolved;
  noLayout: boolean;
}

export function useItemContent(props: TItemContentProps, content?: React.ReactNode): TItemContentResult {
  const {
    startIcon,
    loading,
    startSlot,
    endIcon,
    endSlot,
    paddingMode = "auto",
    endPaddingMode = paddingMode,
    startPaddingMode = paddingMode,
    noLayout = false,
  } = props;

  const hasStartSlot = Boolean(startSlot || startIcon || loading);
  const hasEndSlot = Boolean(endSlot || endIcon);
  const hasChildren = Boolean(content);
  // Special case for start icon/slot only
  const iconOnly = (hasStartSlot && !hasChildren && !hasEndSlot) || (hasEndSlot && !hasStartSlot && !hasChildren);
  const isEmpty = !hasStartSlot && !hasChildren && !hasEndSlot;

  const defaultStartPadding = noLayout ? "none" : isEmpty ? "icon" : iconOnly ? "icon" : hasStartSlot ? "icon" : "text";
  const startPaddingResolved: TItemContentPaddingModeResolved =
    startPaddingMode === "auto" ? defaultStartPadding : startPaddingMode;

  const defaultEndPadding = noLayout ? "none" : isEmpty ? "icon" : iconOnly ? "icon" : hasEndSlot ? "icon" : "text";
  const endPaddingResolved: TItemContentPaddingModeResolved =
    endPaddingMode === "auto" ? defaultEndPadding : endPaddingMode;

  const fragment = (
    <Fragment>
      {hasStartSlot && (
        <IconSlot icon={startIcon} loading={loading} slot={startSlot} isItemMainIcon isIconOnly={iconOnly} />
      )}
      {hasChildren &&
        (typeof content === "string" ? (
          <span {...mergeLooks(createEllipsisLook(), look(null, { flex: 1, textAlign: "left" }))}>{content}</span>
        ) : (
          content
        ))}
      {hasEndSlot && (
        <IconSlot
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
    startPaddingMode: startPaddingResolved,
    endPaddingMode: endPaddingResolved,
    noLayout,
  };
}

export const itemContentProps = createPropsKeys<TItemContentProps>({
  startIcon: null,
  startSlot: null,
  endIcon: null,
  endSlot: null,
  paddingMode: null,
  startPaddingMode: null,
  endPaddingMode: null,
  loading: null,
  noLayout: null,
});

export function ItemContentFragment(props: TItemContentProps & { children?: React.ReactNode }) {
  return useItemContent(props, props.children).fragment;
}

ItemContentFragment.displayName = "ItemContentFragment";
