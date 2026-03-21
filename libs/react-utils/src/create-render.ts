import { isIterable } from "@dldc/utils/iterable";
import {
  cloneElement,
  createElement,
  ElementType,
  ExoticComponent,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

import { mergeProps } from "./merge-props";

/**
 * From: https://github.com/ariakit/ariakit/blob/a31b051bf4bdcce793351cf9209c9311785d6856/site/src/examples/_lib/react-utils/create-render.ts
 *
 * Creates a React element from a component and a flexible prop value, merging
 * default props and supporting an element, a props object, or plain children.
 * @example
 * const element = createRender(Component, { children: "Hi" });
 * const element = createRender(Component, <Component />);
 * const element = createRender(Component, <Component />, { children: "Hi" });
 */
export function createRender<T extends ElementType<P> | ExoticComponent<P>, P extends object>(
  Component: T,
  props?: P | ReactNode,
  defaultProps?: P,
): ReactElement {
  if (props == null || (typeof props === "object" && "then" in props)) {
    return createElement(Component, defaultProps);
  }
  if (isValidElement<any>(props)) {
    const element = props as ReactElement<P>;
    if (defaultProps) {
      const mergedProps = mergeProps(defaultProps, element.props);
      return cloneElement(element, mergedProps);
    }
    return element;
  }
  if (typeof props !== "object" || isIterable(props)) {
    return createElement(Component, defaultProps, props);
  }
  const mergedProps = defaultProps ? mergeProps(defaultProps, props) : props;
  return createElement(Component, mergedProps);
}
