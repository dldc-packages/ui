import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBase, ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createItemInputLook } from "@dldc/ui-styles/item-input";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { useMemo } from "react";

export interface ItemInputContentSpecificProps {
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  value?: string;
  onChange?: ComponentPropsBase<"input">["onChange"];
}

const itemInputProps = mergePropsKeys(
  createPropsKeys<ItemInputContentSpecificProps>({
    disabled: null,
    onValueChange: null,
    value: null,
    onChange: null,
  }),
);

export type ItemInputContentProps = ComponentPropsBaseWith<"input", TypeOfPropsKeys<typeof itemInputProps>>;

export function ItemInputContent(inProps: ItemInputContentProps) {
  const [[localProps], props] = extractProps(inProps, itemInputProps.content);
  const { onValueChange, onChange, disabled, value } = localProps;
  const { className, style, ...htmlProps } = props;

  const inputOnChange = useMemo(() => {
    if (!onValueChange && !onChange) {
      return undefined;
    }
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(event.target.value);
      onChange?.(event);
    };
  }, [onChange, onValueChange]);

  const itemInputLook = createItemInputLook();

  return (
    <input
      {...mergeLooks(itemInputLook, look(className, style))}
      onChange={inputOnChange}
      disabled={disabled}
      value={value}
      {...htmlProps}
    />
  );
}

ItemInputContent.displayName = "ItemInputContent";
