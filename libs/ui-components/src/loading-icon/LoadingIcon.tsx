import { spinClass } from "@dldc/ui-core/animations";
import { srOnlyClass } from "@dldc/ui-core/helpers";
import { TDesignHeight } from "@dldc/ui-core/size";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type LoadingIcon = ComponentPropsBaseWith<
  "div",
  {
    alt?: string;
    color?: string;
    size?: TDesignHeight;
  }
>;

export function LoadingIcon({ alt, color, size }: LoadingIcon) {
  // TODO
  console.log({ alt, color, size });

  // const strokeWidth = pick(weight, {
  //   thin: 8,
  //   light: 12,
  //   regular: 16,
  //   bold: 24,
  //   duotone: 16,
  //   fill: 16,
  // });

  // const bgStrokeWidth = weight === "duotone" ? 28 : strokeWidth;
  // const bgFill = weight === "duotone" ? color : "none";

  return (
    <div role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={spinClass}
        fill="none"
        // style={{ width: size, height: size }}
        viewBox="0 0 256 256"
      >
        <path fill="none" d="M0 0H256V256H0z"></path>
        <path
          fill="none"
          // stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          // strokeWidth={strokeWidth}
          d="M 128 32 A 96 96 0 0 1 224 128"
        />
        <circle
          cx="128"
          cy="128"
          r="96"
          // stroke={color}
          // strokeWidth={bgStrokeWidth}
          // fill={bgFill}
          opacity={0.2}
        />
      </svg>
      <span className={srOnlyClass}>Loading...</span>
    </div>
  );
}

LoadingIcon.displayName = "LoadingIcon";
