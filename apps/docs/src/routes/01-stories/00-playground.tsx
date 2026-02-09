import { Geometry } from "@dldc/ui-components/geometry";
import { Prose } from "@dldc/ui-components/prose";
import { roundToQuarter } from "@dldc/ui-core/size";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/01-stories/00-playground")({
  component: RouteComponent,
});

function RouteComponent() {
  const [radius, setRadius] = useState(4);
  const [padding, setPadding] = useState(1);

  console.log({
    radius,
    padding,
    roundRadius: roundToQuarter(radius),
    roundedPadding: roundToQuarter(radius),
  });

  return (
    <StoryLayout>
      <Prose invert>
        <h1>Playground</h1>
        <div className="flex flex-col gap-4">
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="6">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="5">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="4">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="3">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="2">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="1">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <Geometry className="p-geometry bg-red-500" rounded="4" padding="0x">
            <Geometry className="p-geometry h-[50px] bg-red-700"></Geometry>
          </Geometry>
          <input
            type="range"
            min="0"
            max="32"
            step="0.1"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
          />
          <input
            type="range"
            min="0"
            max="32"
            step="0.1"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
          <Geometry
            className="p-geometry bg-blue-900"
            rounded={roundToQuarter(radius)}
            padding={roundToQuarter(padding)}
          >
            <Geometry className="p-geometry bg-blue-700" padding={roundToQuarter(padding)}>
              <Geometry className="p-geometry bg-blue-500" padding={roundToQuarter(padding)}>
                <Geometry className="p-geometry bg-blue-300" padding={roundToQuarter(padding)}>
                  <div className="flex h-[200px] items-center justify-center text-neutral-900">Hey</div>
                </Geometry>
              </Geometry>
            </Geometry>
          </Geometry>
        </div>
      </Prose>
    </StoryLayout>
  );
}
