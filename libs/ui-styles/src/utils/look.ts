import { CSSProperties } from "./types";

export interface TLook {
  className?: string;
  styles?: CSSProperties;
}

export function look(className: string | null | undefined, styles?: CSSProperties | null): TLook {
  return { className: className || undefined, styles: styles ?? undefined };
}

export function mergeLooks(...looks: (TLook | null | false | 0 | undefined)[]): TLook {
  let className: string | undefined = undefined;
  let styles: CSSProperties | undefined = undefined;

  for (const look of looks) {
    if (!look) continue;

    if (look.className) {
      className = className ? className + " " + look.className : look.className;
    }

    if (look.styles) {
      styles = { ...(styles ?? {}), ...look.styles };
    }
  }

  return { className, styles };
}
