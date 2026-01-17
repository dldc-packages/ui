import { cloneElement, ReactElement } from "react";

export function mergeRender(render: ReactElement | undefined | null, defaultRender: ReactElement): ReactElement {
  if (render === undefined || render === null) {
    return defaultRender;
  }
  return cloneElement(render, defaultRender.props as any);
}
