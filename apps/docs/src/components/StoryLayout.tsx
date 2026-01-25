import type { PropsWithChildren } from "react";

export function StoryLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-auto mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 py-10 *:col-span-2">{children}</div>
  );
}
