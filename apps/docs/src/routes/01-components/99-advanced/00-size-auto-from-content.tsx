import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ActionSizeAutoFromContentWidget } from "@/widgets/action/ActionSizeAutoFromContentWidget";

export const Route = createFileRoute("/01-components/99-advanced/00-size-auto-from-content")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Size: autoFromContent</h1>
        <p>
          When placing a <code>Button</code> (or any <code>Action</code>-based component) inside an <code>endSlot</code>
          , its size is automatically inherited from the parent. However, if that nested button has its own{" "}
          <code>padding</code>, the icon inside it ends up smaller than the parent's <code>startIcon</code>, which looks
          inconsistent.
        </p>
        <p>To fix this, two special props work together:</p>
        <ul>
          <li>
            <code>contentSize="parentSize"</code> — sets the content size of the nested button to match the parent's
            content size (i.e. the icon size the parent Action uses).
          </li>
          <li>
            <code>size="autoFromContent"</code> — computes the total size as <code>contentSize + padding * 2</code>, so
            the button grows to accommodate the larger icon while keeping its own padding.
          </li>
        </ul>
        <p>
          Additionally, <code>className="-mx-paddingVar"</code> is used to pull the button's left and right edges flush
          with the parent's content area, compensating for the extra padding that would otherwise push it outward.
        </p>
        <p>
          With these three props set, the icon inside the <code>endSlot</code> button matches the size of the parent's{" "}
          <code>startIcon</code> exactly.
        </p>
        <p>Hover over the examples below to compare the two approaches:</p>
        <ActionSizeAutoFromContentWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
