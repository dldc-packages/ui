import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DialogBasicWidget } from "@/widgets/dialog/DialogBasicWidget";
import { DialogContainerBasicWidget } from "@/widgets/dialog/DialogContainerBasicWidget";
import { DialogNoScrollWidget } from "@/widgets/dialog/DialogNoScrollWidget";
import { DialogScrollWidget } from "@/widgets/dialog/DialogScrollWidget";
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
          They also do not manage body scroll lock or backdrop rendering. Compose those behaviors in your dialog state
          layer (for example with a headless dialog implementation).
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

        <h3>Scroll Behavior</h3>
        <p>
          <code>Dialog</code> uses a scrollable <code>DialogRoot</code> wrapper. When dialog content is taller than the
          viewport, you can scroll the dialog layer and still keep the dialog properly positioned.
        </p>
        <DialogScrollWidget className={cn(notProseClass, proseBleedClass)} />

        <h4>Using scrollable=false</h4>
        <p>
          Set <code>scrollable=&#123;false&#125;</code> when you do not want the dialog layer to scroll. In that case,
          handle overflow inside your dialog content.
        </p>
        <DialogNoScrollWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
