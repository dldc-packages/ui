import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ActionGroupBasicWidget } from "@/widgets/action-group/ActionGroupBasicWidget";
import { ActionGroupColorsWidget } from "@/widgets/action-group/ActionGroupColorsWidget";
import { ActionGroupDirectionWidget } from "@/widgets/action-group/ActionGroupDirectionWidget";
import { ActionGroupDividersWidget } from "@/widgets/action-group/ActionGroupDividersWidget";
import { ActionGroupFormWidget } from "@/widgets/action-group/ActionGroupFormWidget";
import { ActionGroupMixedContentWidget } from "@/widgets/action-group/ActionGroupMixedContentWidget";
import { ActionGroupNavigationWidget } from "@/widgets/action-group/ActionGroupNavigationWidget";
import { ActionGroupNestedWidget } from "@/widgets/action-group/ActionGroupNestedWidget";
import { ActionGroupToolbarWidget } from "@/widgets/action-group/ActionGroupToolbarWidget";
import { ActionGroupVariantsWidget } from "@/widgets/action-group/ActionGroupVariantsWidget";

export const Route = createFileRoute("/01-stories/02-action-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>ActionGroup</h1>
        <p>
          The <code>ActionGroup</code> component is a container that visually connects multiple actions into a cohesive
          unit. It automatically handles border radius adjustments and spacing to create seamless visual connections
          between actions.
        </p>
        <h2>Basic Usage</h2>
        <p>
          Wrap multiple <code>Action</code> components in a <code>ActionGroup</code> to create connected action
          interfaces like toolbars or action groups.
        </p>
        <ActionGroupBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Direction</h2>
        <p>
          Use the <code>direction</code> prop to control the layout direction. The default is <code>"horizontal"</code>,
          but you can also use <code>"vertical"</code> for stacked button groups.
        </p>
        <ActionGroupDirectionWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Mixed Content</h2>
        <p>
          <code>ActionGroup</code> can contain both <code>Action</code> and <code>ActionLike</code> components. This is
          useful when you need interactive actions alongside static action-styled elements.
        </p>
        <ActionGroupMixedContentWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Dividers</h2>
        <p>
          Control visual separators between buttons with the <code>innerDividers</code> prop. Inner dividers are enabled
          by default.
        </p>
        <ActionGroupDividersWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Nested Action Groups</h3>
        <p>
          ActionGroups can be nested within each other. When nesting, use <code>roundedEnds="none"</code> on the inner
          group to blend the visual styles seamlessly.
        </p>
        <ActionGroupNestedWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Variants</h2>
        <p>
          The <code>variant</code> prop on ActionGroup affects both the actions' appearance and the dividers' styling.
          All variants work consistently across the group.
        </p>
        <ActionGroupVariantsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Colors</h2>
        <p>
          Use the <code>color</code> prop to apply consistent color theming across the entire action group. This affects
          both the actions and any dividers.
        </p>
        <ActionGroupColorsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Use Cases</h2>
        <p>ActionGroup is perfect for creating cohesive interface elements. Here are some common patterns:</p>
        <h3>Toolbar Interfaces</h3>
        <p>Group related actions together for toolbars and action bars:</p>
        <ActionGroupToolbarWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Form Button Clusters</h3>
        <p>Organize form actions like Save, Cancel, and Reset:</p>
        <ActionGroupFormWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Navigation Segments</h3>
        <p>Create vertical navigation menus or sidebar sections:</p>
        <ActionGroupNavigationWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          The component automatically handles visual connections, border management, and ensures consistent spacing
          throughout the group, making it easy to create professional-looking interface elements.
        </p>
      </Prose>
    </StoryLayout>
  );
}
