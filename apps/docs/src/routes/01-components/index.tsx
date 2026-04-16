import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/01-components/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Components</h1>
        <p>
          The <code>@dldc/ui-components</code> library provides styled-only, presentation-focused components that do not
          include interaction or accessibility behavior. They focus on visual design, provider defaults, and styling
          utilities.
        </p>
        <p>
          These components are designed to work as render targets for headless behavior libraries like Ariakit, or to be
          composed into higher-level patterns. They handle concerns like auto-rounded corners, palette colors, and
          provider-based defaults across your application.
        </p>
      </Prose>
    </StoryLayout>
  );
}
