import React from "react";

export interface PrintElementOptions {
  replacePropsRaw?: Record<string, any>;
  replaceChildrenReferences?: Map<any, string>;
}

/**
 * Given some JSX element, return a string representation of it.
 * printElement(<Button foo="bar" />) -> '<Button foo="bar" />'
 */
export function printElement(element: React.ReactElement, options: PrintElementOptions = {}): string {
  if (!element) {
    return "";
  }

  if (options.replaceChildrenReferences && options.replaceChildrenReferences.has(element)) {
    return options.replaceChildrenReferences.get(element) || "";
  }

  // Get the component name
  const componentName = getComponentName(element.type);

  // Extract props and children
  const props = element.props || {};
  const { children, ...otherProps } = props as any;

  // Special handling for React Fragment
  const isFragment = element.type === React.Fragment || (element.type as any) === Symbol.for("react.fragment");

  // Format props
  const propsString = formatProps(otherProps, options);

  // Format children
  const childrenString = formatChildren(children, options);

  // Handle Fragment with short syntax if no props
  if (isFragment && Object.keys(otherProps).length === 0) {
    return `<>${childrenString}</>`;
  }

  // Return the formatted element
  if (childrenString) {
    return `<${componentName}${propsString}>${childrenString}</${componentName}>`;
  } else {
    return `<${componentName}${propsString} />`;
  }
}

function getComponentName(type: any): string {
  if (typeof type === "string") {
    // HTML element
    return type;
  } else if (type === React.Fragment || type === Symbol.for("react.fragment")) {
    // React Fragment
    return "Fragment";
  } else if (typeof type === "function") {
    return getDisplayName(type);
  } else if (type && typeof type === "object" && type.$$typeof === Symbol.for("react.forward_ref")) {
    // ForwardRef component - extract name from render function
    const renderFunction = type.render;
    if (renderFunction) {
      return getDisplayName(renderFunction);
    }
    return "ForwardRef";
  } else {
    return "Unknown";
  }
}

function getDisplayName(type: any): string {
  if (!type.displayName) {
    return `MISSING_DISPLAY_NAME_${type.name}`;
  }
  // React component
  return type.displayName;
}

function formatProps(props: Record<string, any>, options: PrintElementOptions): string {
  if (!props || Object.keys(props).length === 0) {
    return "";
  }

  const propEntries = Object.entries(props);
  const propStrings = propEntries
    .map(([key, value]) => {
      if (options?.replacePropsRaw && key in options.replacePropsRaw) {
        return options.replacePropsRaw[key];
      }
      if (value === true) {
        // Boolean prop set to true - use shortcut
        return key;
      } else if (value === false || value === null || value === undefined) {
        // Skip false, null, undefined props
        return null;
      } else if (typeof value === "string") {
        // String prop
        return `${key}="${value}"`;
      } else if (React.isValidElement(value)) {
        // JSX element as prop
        return `${key}={${printElement(value)}}`;
      } else {
        // Other values (numbers, objects, etc.)
        return `${key}={${JSON.stringify(value)}}`;
      }
    })
    .filter(Boolean);

  return propStrings.length > 0 ? " " + propStrings.join(" ") : "";
}

function formatChildren(children: any, options: PrintElementOptions): string {
  if (options.replacePropsRaw && options.replacePropsRaw.children) {
    return options.replacePropsRaw.children;
  }

  if (!children) {
    return "";
  }

  if (typeof children === "string") {
    return children;
  }

  if (React.isValidElement(children)) {
    return printElement(children, options);
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => {
        if (typeof child === "string") {
          return child;
        } else if (React.isValidElement(child)) {
          return printElement(child, options);
        } else {
          return String(child);
        }
      })
      .join("");
  }

  return String(children);
}
