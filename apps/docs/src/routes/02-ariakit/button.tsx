import { Button } from "@dldc/ui-ariakit/button";
import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";
import { HouseIcon } from "lucide-react";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/02-ariakit/button")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Araikit Button</h1>
        <p>
          Renders <code>Ariakit.Button</code> with a render of <code>Button</code>
        </p>
        <div className="flex flex-row gap-3">
          <Button>Button</Button>
          <Button startIcon={<HouseIcon />}>Button</Button>
        </div>
      </Prose>
    </StoryLayout>
  );
}
