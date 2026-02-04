import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DesignWrapperBasicWidget } from "@/widgets/DesignWrapperBasicWidget";
import { DesignWrapperPaginationWidget } from "@/widgets/DesignWrapperPaginationWidget";

export const Route = createFileRoute("/01-stories/04-design-wrapper")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Design Wrapper</h1>
        <p>
          The <code>DesignWrapper</code> component is similar to the <code>DefaultDesignProvider</code> component except
          it also render a wrapping element (by default a <code>div</code>) and hence can apply CSS properties such as
          colors and text size.
        </p>
        <h2>Basic Usage</h2>
        <DesignWrapperBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Example</h2>
        <h3>Pagination</h3>
        <p>
          Here is an example of using DesignWrapper to style a <code>Pagination</code> component:
        </p>
        <DesignWrapperPaginationWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          You can see that the <code>DesignWrapper</code> component set the proper colors and text size to the
          pagination wrapper.
        </p>
      </Prose>
    </StoryLayout>
  );
}
