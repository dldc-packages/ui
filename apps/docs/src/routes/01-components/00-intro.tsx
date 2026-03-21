import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/01-components/00-intro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Components</h1>
      </Prose>
    </StoryLayout>
  );
}
