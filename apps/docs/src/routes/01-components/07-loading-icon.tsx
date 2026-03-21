import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { LoadingIconBasicWidget } from "@/widgets/LoadingIconBasicWidget";
import { LoadingIconSizesWidget } from "@/widgets/LoadingIconSizesWidget";
import { LoadingIconStrokeWidthWidget } from "@/widgets/LoadingIconStrokeWidthWidget";

export const Route = createFileRoute("/01-components/07-loading-icon")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>LoadingIcon</h1>
        <p>
          The <code>LoadingIcon</code> component displays an animated spinning loading indicator. It works just like any
          other icon component and can be customized via props for size, color, and stroke width.
        </p>
        <h2>Basic Usage</h2>
        <p>
          By default, <code>LoadingIcon</code> renders with a regular weight <code>currentColor</code> stroke.
        </p>
        <LoadingIconBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Sizes</h2>
        <p>
          Control the size of the loading icon using the <code>size</code> prop. The value is in pixels.
        </p>
        <p>
          Note that just like other icons, the <code>strokeWidth</code> scales with the size to maintain visual balance.
        </p>
        <LoadingIconSizesWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Stroke Width</h2>
        <p>
          The <code>strokeWidth</code> prop controls the thickness of the loading icon's stroke. Adjust this to make the
          icon appear lighter or bolder.
        </p>
        <LoadingIconStrokeWidthWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
