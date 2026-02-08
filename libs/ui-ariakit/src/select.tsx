import * as AKSelect from "@ariakit/react/select";
import { ActionContentFragment } from "@dldc/ui-components/action-content";
import * as CSelect from "@dldc/ui-components/select";
import { ChevronDownIcon } from "lucide-react";
import { Merge } from "type-fest";

export {
  SelectDismiss,
  SelectGroup,
  SelectGroupLabel,
  SelectHeading,
  SelectItemCheck,
  SelectList,
  SelectProvider,
  SelectRow,
  SelectSeparator,
  SelectValue,
} from "@ariakit/react/select";
export type {
  SelectDismissProps,
  SelectGroupLabelProps,
  SelectGroupProps,
  SelectHeadingProps,
  SelectItemCheckProps,
  SelectListProps,
  SelectProviderProps,
  SelectRowProps,
  SelectSeparatorProps,
  SelectValueProps,
} from "@ariakit/react/select";

export type SelectArrowProps = AKSelect.SelectArrowProps;
export function SelectArrow(props: SelectArrowProps) {
  return <AKSelect.SelectArrow {...props} render={<ChevronDownIcon />} children={null} />;
}
SelectArrow.displayName = "SelectArrow";

export type SelectLabelProps = Merge<AKSelect.SelectLabelProps, CSelect.SelectLabelSpecificProps>;
export function SelectLabel({ render, ...props }: SelectLabelProps) {
  return <AKSelect.SelectLabel render={<CSelect.SelectLabel render={render} />} {...props} />;
}
SelectLabel.displayName = "SelectLabel";

export type SelectProps = Merge<AKSelect.SelectProps, CSelect.SelectSpecificProps>;
export function Select({ render, endPadding, startPadding, padding, children, ...props }: SelectProps) {
  const defaultChildren = (
    <ActionContentFragment endIcon={<SelectArrow />}>
      <AKSelect.SelectValue />
    </ActionContentFragment>
  );

  const endPaddingResolved = endPadding ?? padding ?? "icon";
  const startPaddingResolved = startPadding ?? padding ?? "text";

  return (
    <AKSelect.Select
      render={<CSelect.Select endPadding={endPaddingResolved} startPadding={startPaddingResolved} render={render} />}
      {...props}
    >
      {children ?? defaultChildren}
    </AKSelect.Select>
  );
}
Select.displayName = "Select";

export type SelectPopoverProps = Merge<AKSelect.SelectPopoverProps, CSelect.SelectPropoverSpecificProps>;
export function SelectPopover({ render, ...props }: SelectPopoverProps) {
  return <AKSelect.SelectPopover render={<CSelect.SelectPopover render={render} />} {...props} />;
}
SelectPopover.displayName = "SelectPopover";

export type SelectItemProps = Merge<AKSelect.SelectItemProps, CSelect.SelectItemSpecificProps>;
export function SelectItem({ render, ...props }: SelectItemProps) {
  return <AKSelect.SelectItem render={<CSelect.SelectItem render={render} />} {...props} />;
}
SelectItem.displayName = "SelectItem";
