import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DialogBasicWidget } from "@/widgets/dialog/DialogBasicWidget";
import { DialogContainerBasicWidget } from "@/widgets/dialog/DialogContainerBasicWidget";

export const Route = createFileRoute("/01-components/10-dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog</h1>

        <DialogBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <DialogContainerBasicWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
