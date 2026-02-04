import * as Select from "@dldc/ui-ariakit/select";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";
import { AppleIcon, BananaIcon, CircleIcon, GrapeIcon } from "lucide-react";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";

export const Route = createFileRoute("/03-ariakit/select")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Select</h1>
        <DesignWrapper height="10" color="blue" rounded="4" variant="solid">
          <div className={cn(notProseClass, proseBleedClass, "flex flex-col items-center gap-2")}>
            <div className="gap-0x flex flex-col">
              <Select.SelectProvider defaultValue="Apple">
                <Select.SelectLabel>Favorite fruit</Select.SelectLabel>
                <Select.Select className="min-w-[150px]" startIcon={<GrapeIcon />} />
                <Select.SelectPopover gutter={4} sameWidth className="p-1">
                  <Select.SelectItem value="Apple" startIcon={<AppleIcon />} />
                  <Select.SelectItem value="Banana" startIcon={<BananaIcon />} />
                  <Select.SelectItem value="Grape" disabled startIcon={<GrapeIcon />} />
                  <Select.SelectItem value="Orange" startIcon={<CircleIcon />} />
                </Select.SelectPopover>
              </Select.SelectProvider>
            </div>
          </div>
        </DesignWrapper>
      </Prose>
    </StoryLayout>
  );
}
