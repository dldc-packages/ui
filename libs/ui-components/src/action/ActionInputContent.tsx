import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBase, ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { actionInputContentClass } from "@dldc/ui-styles/action-input";
import clsx from "clsx";
import { useMemo } from "react";

export interface ActionInputContentSpecificProps {
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  value?: string;
  className?: string;
  onChange?: ComponentPropsBase<"input">["onChange"];
}

const actionInputProps = mergePropsKeys(
  createPropsKeys<ActionInputContentSpecificProps>({
    disabled: null,
    onValueChange: null,
    value: null,
    className: null,
    onChange: null,
  }),
);

export type ActionInputContentProps = ComponentPropsBaseWith<"input", TypeOfPropsKeys<typeof actionInputProps>>;

export function ActionInputContent(inProps: ActionInputContentProps) {
  const [[localProps], htmlProps] = extractProps(inProps, actionInputProps.content);
  const { className, onValueChange, onChange, disabled, value } = localProps;

  const inputOnChange = useMemo(() => {
    if (!onValueChange && !onChange) {
      return undefined;
    }
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(event.target.value);
      onChange?.(event);
    };
  }, [onChange, onValueChange]);

  return (
    <input
      className={clsx(actionInputContentClass, className)}
      onChange={inputOnChange}
      disabled={disabled}
      value={value}
      {...htmlProps}
    />
  );
}

ActionInputContent.displayName = "ActionInputContent";
