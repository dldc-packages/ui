import { useMergeRefs } from "@dldc/hooks/use-merge-refs";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement, useCallback, useRef } from "react";

import { Action, ActionInputContent } from "../action";
import { TActionContentProps } from "../action-content";
import { TDesignProps } from "../design-context";
import { ComponentPropsBaseWith, mergeRender } from "../utils";
import { TDesignVariantProps } from "../variant";

export type InputSpecificProps = TActionContentProps &
  TDesignProps &
  TDesignVariantProps & {
    disabled?: boolean;

    color?: TPaletteColor;
    highlightColor?: TPaletteColor;
    highlighted?: boolean;

    // Props forwarded to the native input
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    type?: string;
    readOnly?: boolean;
    required?: boolean;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type InputProps = ComponentPropsBaseWith<"div", InputSpecificProps>;

export function Input({
  onPointerDown: onPointerDownProps,
  children,
  render,
  // Input props
  value,
  onChange,
  placeholder,
  name,
  type,
  readOnly,
  disabled,
  required,
  ref: propsRef,
  ...frameProps
}: InputProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = useMergeRefs(localRef, propsRef);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      onPointerDownProps?.(event as React.PointerEvent<HTMLDivElement>);
      if (event.defaultPrevented) return;
      setTimeout(() => {
        // Find input in children and focus it
        const input = localRef.current?.querySelector("input");
        input?.focus();
      }, 0);
    },
    [onPointerDownProps],
  );

  const childrenResolved = children ?? (
    <ActionInputContent
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type={type}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
    />
  );

  return (
    <Action
      baseVariant="input"
      interactive
      onPointerDown={onPointerDown}
      disabled={disabled}
      ref={ref}
      render={mergeRender(render, <div />)}
      {...frameProps}
    >
      {childrenResolved}
    </Action>
  );
}

Input.displayName = "Input";
