import type { PropsWithChildren } from "react";

export function StoryLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-2 *:col-span-2 py-10 px-auto gap-y-3 gap-x-4">{children}</div>
  );
}
