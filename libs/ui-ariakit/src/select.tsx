import * as AKSelect from "@ariakit/react/select";
import { ActionContentFragment } from "@dldc/ui-components/action-content";
import * as CSelect from "@dldc/ui-components/select";
import { ChevronDownIcon } from "lucide-react";
import { ReactElement } from "react";
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

export type SelectLabelProps = Merge<AKSelect.SelectLabelProps<"label">, CSelect.SelectLabelSpecificProps>;
export function SelectLabel({ render, ...props }: SelectLabelProps) {
  return <CSelect.SelectLabel render={<AKSelect.SelectLabel render={render} />} {...props} />;
}
SelectLabel.displayName = "SelectLabel";

export type SelectProps = Merge<AKSelect.SelectProps, CSelect.SelectSpecificProps & { render?: ReactElement }>;
export function Select({ render, children, ...props }: SelectProps) {
  const defaultChildren = (
    <ActionContentFragment endIcon={<SelectArrow />}>
      <AKSelect.SelectValue />
    </ActionContentFragment>
  );

  return (
    <CSelect.Select render={<AKSelect.Select render={render} />} {...props}>
      {children ?? defaultChildren}
    </CSelect.Select>
  );
}
Select.displayName = "Select";

export type SelectPopoverProps = Merge<
  AKSelect.SelectPopoverProps,
  CSelect.SelectPopoverSpecificProps & { render?: ReactElement }
>;
export function SelectPopover({ render, ...props }: SelectPopoverProps) {
  return <CSelect.SelectPopover render={<AKSelect.SelectPopover render={render} />} {...props} />;
}
SelectPopover.displayName = "SelectPopover";

export type SelectItemProps = Merge<
  AKSelect.SelectItemProps,
  CSelect.SelectItemSpecificProps & { render?: ReactElement }
>;
export function SelectItem({ render, disabled, ...props }: SelectItemProps) {
  return <CSelect.SelectItem render={<AKSelect.SelectItem disabled={disabled} render={render} />} {...props} />;
}
SelectItem.displayName = "SelectItem";
