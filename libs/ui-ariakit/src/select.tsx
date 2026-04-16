import * as AKSelect from "@ariakit/react/select";
import { extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ItemContentFragment } from "@dldc/ui-components/item-content";
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

export type SelectLabelProps = Merge<AKSelect.SelectLabelProps<"label">, CSelect.SelectLabelSpecificProps>;
export function SelectLabel({ render, ...props }: SelectLabelProps) {
  return <CSelect.SelectLabel render={<AKSelect.SelectLabel render={render} />} {...props} />;
}
SelectLabel.displayName = "SelectLabel";

export type SelectProps = Merge<AKSelect.SelectProps, TypeOfPropsKeys<typeof CSelect.selectProps>>;
export function Select(inProps: SelectProps) {
  const [cProps, akProps] = extractProps(inProps, CSelect.selectProps);
  const { children, ...restAkProps } = akProps;
  const defaultChildren = (
    <ItemContentFragment endIcon={<SelectArrow />}>
      <AKSelect.SelectValue />
    </ItemContentFragment>
  );
  return (
    <CSelect.Select render={<AKSelect.Select {...restAkProps} />} {...cProps}>
      {children ?? defaultChildren}
    </CSelect.Select>
  );
}
Select.displayName = "Select";

export type SelectPopoverProps = Merge<AKSelect.SelectPopoverProps, TypeOfPropsKeys<typeof CSelect.selectPopoverProps>>;
export function SelectPopover(inProps: SelectPopoverProps) {
  const [cProps, akProps] = extractProps(inProps, CSelect.selectPopoverProps);
  return <CSelect.SelectPopover render={<AKSelect.SelectPopover {...akProps} />} {...cProps} />;
}
SelectPopover.displayName = "SelectPopover";

export type SelectItemProps = Merge<AKSelect.SelectItemProps, TypeOfPropsKeys<typeof CSelect.selectItemProps>>;
export function SelectItem(inProps: SelectItemProps) {
  const [cProps, akProps] = extractProps(inProps, CSelect.selectItemProps);
  return <CSelect.SelectItem render={<AKSelect.SelectItem disabled={cProps.disabled} {...akProps} />} {...cProps} />;
}
SelectItem.displayName = "SelectItem";
