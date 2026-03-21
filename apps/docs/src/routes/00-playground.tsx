import { Action, ActionNestedContent } from "@dldc/ui-components/action";
import { Prose } from "@dldc/ui-components/prose";
import { roundToQuarter } from "@dldc/ui-core/size";
import { createFileRoute } from "@tanstack/react-router";
import { HouseIcon } from "lucide-react";
import { useState } from "react";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/00-playground")({
  component: RouteComponent,
});

function RouteComponent() {
  const [padding, setPadding] = useState(1);
  const [innerPadding, setInnerPadding] = useState(1);

  return (
    <StoryLayout>
      <Prose invert>
        <h1>Playground</h1>
        <input
          type="range"
          min="0"
          max="32"
          step="0.1"
          value={padding}
          onChange={(e) => setPadding(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="32"
          step="0.1"
          value={innerPadding}
          onChange={(e) => setInnerPadding(Number(e.target.value))}
        />

        <p>
          Padding {roundToQuarter(padding)} - Inner Padding {roundToQuarter(innerPadding)}
        </p>
        <Action
          startSlot={<Action startIcon={<HouseIcon />} variant="solid" />}
          rounded={8}
          size={20}
          paddingMode="icon"
          padding={padding}
        >
          <span>Hello</span>
          <ActionNestedContent
            padding={innerPadding}
            endSlot={<Action startIcon={<HouseIcon />} variant="solid" />}
            className="flex-1"
          >
            World
          </ActionNestedContent>
        </Action>
      </Prose>
    </StoryLayout>
  );
}
