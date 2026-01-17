import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { LoadingBlockBasicWidget } from "@/widgets/LoadingBlockBasicWidget";
import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/01-stories/08-loading-block")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>LoadingBlock</h1>
        <p>
          The <code>LoadingBlock</code> component displays a centered loading indicator with a loading icon and text.
          It's useful for showing loading states in your application.
        </p>
        <h2>Basic Usage</h2>
        <p>
          <code>LoadingBlock</code> is a simple component that requires no props. It displays a spinning loading icon
          with "Loading..." text below it.
        </p>
        <LoadingBlockBasicWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
