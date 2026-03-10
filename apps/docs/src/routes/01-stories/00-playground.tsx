import { Action } from "@dldc/ui-components/action";
import { Prose } from "@dldc/ui-components/prose";
import { roundToQuarter } from "@dldc/ui-core/size";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/01-stories/00-playground")({
  component: RouteComponent,
});

function RouteComponent() {
  const [rounded, setRounded] = useState(4);
  const [padding, setPadding] = useState(1);

  return (
    <StoryLayout>
      <Prose invert>
        <h1>Playground</h1>
        <input
          type="range"
          min="0"
          max="32"
          step="0.1"
          value={rounded}
          onChange={(e) => setRounded(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="32"
          step="0.1"
          value={padding}
          onChange={(e) => setPadding(Number(e.target.value))}
        />
        <p>
          Padding {roundToQuarter(padding)} - Radius {roundToQuarter(rounded)}
        </p>
        <Action rounded={rounded} size={20} paddingMode="icon" padding={padding}>
          <Action paddingMode="icon" padding={padding}>
            <Action>Nested</Action>
          </Action>
        </Action>
      </Prose>
    </StoryLayout>
  );
}
