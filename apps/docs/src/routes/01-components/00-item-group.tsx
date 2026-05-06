import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ItemGroupBasicWidget } from "@/widgets/item-group/ItemGroupBasicWidget";
import { ItemGroupDirectionWidget } from "@/widgets/item-group/ItemGroupDirectionWidget";
import { ItemGroupMixedContentWidget } from "@/widgets/item-group/ItemGroupMixedContentWidget";

export const Route = createFileRoute("/01-components/00-item-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>ItemGroup</h1>
        <p>
          The <code>ItemGroup</code> component is a container that visually connects multiple <code>Item</code>{" "}
          components into a cohesive unit. It automatically handles border radius adjustments and spacing to create
          seamless visual connections between items.
        </p>
        <p>
          You are not supposed to use <code>ItemGroup</code> directly but rather use one of the components built on top
          of it such as <code>ActionGroup</code>.
        </p>

        <h2>Basic Usage</h2>
        <p>
          Wrap multiple <code>Item</code> components in a <code>ItemGroup</code> to create connected item interfaces
          like toolbars or action groups.
        </p>
        <ItemGroupBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Direction</h2>
        <p>
          Use the <code>direction</code> prop to control the layout direction. The default is <code>"horizontal"</code>,
          but you can also use <code>"vertical"</code> for stacked button groups.
        </p>
        <ItemGroupDirectionWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Mixed Content</h2>
        <p>
          <code>ItemGroup</code> can contain any component that extends from <code>Item</code>, allowing you to mix
          different types of items and content within the same group.
        </p>
        <ItemGroupMixedContentWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
