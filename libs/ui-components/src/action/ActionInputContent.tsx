import { actionInputContentClass } from "@dldc/ui-styles/action-input";
import clsx from "clsx";
import { useMemo } from "react";

import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ActionInputContentProps = ComponentPropsBaseWith<
  "input",
  {
    disabled?: boolean;
    onValueChange?: (value: string) => void;
    value?: string;
  }
>;

export function ActionInputContent({ className, onValueChange, onChange, ...props }: ActionInputContentProps) {
  const inputOnChange = useMemo(() => {
    if (!onValueChange && !onChange) {
      return undefined;
    }
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(event.target.value);
      onChange?.(event);
    };
  }, [onChange, onValueChange]);

  return <input className={clsx(actionInputContentClass, className)} onChange={inputOnChange} {...props} />;
}

ActionInputContent.displayName = "ActionInputContent";
