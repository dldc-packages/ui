import { frameInputContentClass } from "@dldc/ui-styles/frame-input";
import clsx from "clsx";
import { useMemo } from "react";

import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type FrameInputContentProps = ComponentPropsBaseWith<
  "input",
  {
    disabled?: boolean;
    onValueChange?: (value: string) => void;
    value?: string;
  }
>;

export function FrameInputContent({ className, onValueChange, onChange, ...props }: FrameInputContentProps) {
  const inputOnChange = useMemo(() => {
    if (!onValueChange && !onChange) {
      return undefined;
    }
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(event.target.value);
      onChange?.(event);
    };
  }, [onChange, onValueChange]);

  return <input className={clsx(frameInputContentClass, className)} onChange={inputOnChange} {...props} />;
}

FrameInputContent.displayName = "FrameInputContent";
