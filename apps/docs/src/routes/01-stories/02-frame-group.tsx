import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { FrameGroupBasicWidget } from "@/widgets/FrameGroupBasicWidget";
import { FrameGroupColorsWidget } from "@/widgets/FrameGroupColorsWidget";
import { FrameGroupDirectionWidget } from "@/widgets/FrameGroupDirectionWidget";
import { FrameGroupDividersWidget } from "@/widgets/FrameGroupDividersWidget";
import { FrameGroupFormWidget } from "@/widgets/FrameGroupFormWidget";
import { FrameGroupMixedContentWidget } from "@/widgets/FrameGroupMixedContentWidget";
import { FrameGroupNavigationWidget } from "@/widgets/FrameGroupNavigationWidget";
import { FrameGroupNestedWidget } from "@/widgets/FrameGroupNestedWidget";
import { FrameGroupToolbarWidget } from "@/widgets/FrameGroupToolbarWidget";
import { FrameGroupVariantsWidget } from "@/widgets/FrameGroupVariantsWidget";
import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/01-stories/02-frame-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>FrameGroup</h1>
        <p>
          The <code>FrameGroup</code> component is a container that visually connects multiple frames into a cohesive
          unit. It automatically handles border radius adjustments and spacing to create seamless visual connections
          between frames.
        </p>
        <h2>Basic Usage</h2>
        <p>
          Wrap multiple <code>Frame</code> components in a <code>FrameGroup</code> to create connected frame interfaces
          like toolbars or action groups.
        </p>
        <FrameGroupBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Direction</h2>
        <p>
          Use the <code>direction</code> prop to control the layout direction. The default is <code>"horizontal"</code>,
          but you can also use <code>"vertical"</code> for stacked button groups.
        </p>
        <FrameGroupDirectionWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Mixed Content</h2>
        <p>
          <code>FrameGroup</code> can contain both <code>Frame</code> and <code>FrameLike</code> components. This is
          useful when you need interactive frames alongside static frame-styled elements.
        </p>
        <FrameGroupMixedContentWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Dividers</h2>
        <p>
          Control visual separators between buttons with the <code>innerDividers</code> prop. Inner dividers are enabled
          by default.
        </p>
        <FrameGroupDividersWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Nested Frame Groups</h3>
        <p>
          FrameGroups can be nested within each other. When nesting, use <code>roundedEnds="none"</code> on the inner
          group to blend the visual styles seamlessly.
        </p>
        <FrameGroupNestedWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Variants</h2>
        <p>
          The <code>variant</code> prop on FrameGroup affects both the frames' appearance and the dividers' styling. All
          variants work consistently across the group.
        </p>
        <FrameGroupVariantsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Colors</h2>
        <p>
          Use the <code>color</code> prop to apply consistent color theming across the entire button group. This affects
          both the buttons and any dividers.
        </p>
        <FrameGroupColorsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Use Cases</h2>
        <p>FrameGroup is perfect for creating cohesive interface elements. Here are some common patterns:</p>
        <h3>Toolbar Interfaces</h3>
        <p>Group related actions together for toolbars and action bars:</p>
        <FrameGroupToolbarWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Form Button Clusters</h3>
        <p>Organize form actions like Save, Cancel, and Reset:</p>
        <FrameGroupFormWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Navigation Segments</h3>
        <p>Create vertical navigation menus or sidebar sections:</p>
        <FrameGroupNavigationWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          The component automatically handles visual connections, border management, and ensures consistent spacing
          throughout the group, making it easy to create professional-looking interface elements.
        </p>
      </Prose>
    </StoryLayout>
  );
}
