import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DialogBasicWidget } from "@/widgets/dialog/DialogBasicWidget";
import { DialogContainerBasicWidget } from "@/widgets/dialog/DialogContainerBasicWidget";
import { DialogSizeWidget } from "@/widgets/dialog/DialogSizeWidget";

export const Route = createFileRoute("/01-components/10-dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog</h1>

        <p>
          These components handle dialog styling and layout only. They do not provide open/close state, focus trapping,
          accessibility behavior, or dismissal logic.
        </p>
        <p>
          For behavior, compose them with a headless dialog implementation such as <code>@dldc/ui-ariakit/dialog</code>.
        </p>

        <h2>Low-level APIs</h2>
        <h3>DialogRoot</h3>
        <p>
          <code>DialogRoot</code> sets up the fixed viewport wrapper and scroll behavior for the dialog layer.
        </p>

        <h3>DialogPositioner</h3>
        <p>
          <code>DialogPositioner</code> manages sizing and centering constraints. Render your own dialog wrapper inside
          it, and it will take the proper dialog size behavior automatically.
        </p>
        <DialogContainerBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Dialog</h2>
        <p>
          The <code>Dialog</code> components renders <code>DialogRoot</code>, <code>DialogPositioner</code>, and{" "}
          <code>GeometryPaper</code> for you.
        </p>
        <DialogBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h3>Size</h3>
        <p>
          Use the <code>size</code> prop on <code>Dialog</code> to control max width. Available values are
          <code> sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>full</code>.
        </p>
        <DialogSizeWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
