import { createTraceAnimation, spinClass } from "@dldc/ui-styles/animations";
import clsx from "clsx";

import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type LoadingIcon = ComponentPropsBaseWith<
  "div",
  {
    size?: number;
    strokeWidth?: number;
    color?: string;
  }
>;

export function LoadingIcon({ color = "currentColor", size = 24, strokeWidth = 2 }: LoadingIcon) {
  const [traceClass, traceInline] = createTraceAnimation(46);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(spinClass)}
      style={{ animationDuration: "1s" }}
      role="status"
      aria-label="Loading"
      aria-busy="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" className={traceClass} style={traceInline} />
    </svg>
  );
}
