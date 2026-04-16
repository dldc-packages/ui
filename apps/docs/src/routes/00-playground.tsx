import { Action } from "@dldc/ui-components/action";
import { Button } from "@dldc/ui-components/button";
import { Item } from "@dldc/ui-components/item";
import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";
import { CircleIcon } from "lucide-react";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/00-playground")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Playground</h1>
        <Item startIcon={<CircleIcon />} className="bg-white/5" padding="2">
          Hello Item
        </Item>
        <Action startIcon={<CircleIcon />} className="bg-white/5" padding="2">
          Hello Action
        </Action>

        <Button startIcon={<CircleIcon />} className="bg-white/5" padding="2">
          Hello Button
        </Button>
      </Prose>
    </StoryLayout>
  );
}
