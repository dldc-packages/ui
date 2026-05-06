import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DialogPatternWidget } from "@/widgets/dialog-pattern/DialogPatternWidget";

export const Route = createFileRoute("/03-patterns/dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog Pattern</h1>

        <p>
          <code>@dldc/ui-patterns/dialog</code> is a higher-level composition built on top of
          <code> @dldc/ui-ariakit/dialog</code>. It gives you a ready-to-use dialog shell with a title area and close
          control already wired.
        </p>
        <p>
          Use this pattern when you want a fast modal setup with consistent structure, while still keeping Ariakit
          behavior and props.
        </p>

        <h2>What It Adds</h2>
        <ul>
          <li>
            A precomposed <code>Dialog</code> with a default header
          </li>
          <li>
            A required <code>title</code> prop rendered as the dialog heading
          </li>
          <li>Full compatibility with base Ariakit dialog props</li>
        </ul>

        <h2>Example</h2>
        <DialogPatternWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
