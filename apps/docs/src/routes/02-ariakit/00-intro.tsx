import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/02-ariakit/00-intro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>UI - Ariakit</h1>
        <p>
          The <code>@dldc/ui-ariakit</code> package exposes the same components as <code>@ariakit/react</code>, but will
          render the components from <code>@dldc/ui-components</code> automatically.
        </p>
      </Prose>
    </StoryLayout>
  );
}
