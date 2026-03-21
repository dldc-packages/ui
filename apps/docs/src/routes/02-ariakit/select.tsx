import * as Select from "@dldc/ui-ariakit/select";
import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";
import { AppleIcon, BananaIcon, CircleIcon, GrapeIcon } from "lucide-react";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";

export const Route = createFileRoute("/02-ariakit/select")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Select</h1>
        <div className={cn(notProseClass, proseBleedClass, "flex flex-col items-center gap-2")}>
          <div className="gap-0x flex flex-col">
            <Select.SelectProvider defaultValue="Apple">
              <Select.SelectLabel>Favorite fruit</Select.SelectLabel>
              <Select.Select className="min-w-[150px]" />
              <Select.SelectPopover gutter={4} sameWidth className="p-1">
                <Select.SelectItem value="Apple" startIcon={<AppleIcon />}>
                  Apple
                </Select.SelectItem>
                <Select.SelectItem value="Banana" startIcon={<BananaIcon />}>
                  Banana
                </Select.SelectItem>
                <Select.SelectItem value="Grape" disabled startIcon={<GrapeIcon />}>
                  Grape
                </Select.SelectItem>
                <Select.SelectItem value="Orange" startIcon={<CircleIcon />}>
                  Orange
                </Select.SelectItem>
              </Select.SelectPopover>
            </Select.SelectProvider>
          </div>
        </div>
      </Prose>
    </StoryLayout>
  );
}
