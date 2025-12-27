import type { PropsWithChildren } from "react";

export function StoryLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-7xl grid grid-cols-2 *:col-span-2 py-3 px-auto">{children}</div>;
}
