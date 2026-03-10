import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { DefaultVariantProviderBasicWidget } from "@/widgets/default-providers/DefaultVariantProviderBasicWidget";
import { ProvideColorPaletteWidget } from "@/widgets/default-providers/ProvideColorPaletteWidget";

export const Route = createFileRoute("/01-stories/03-default-providers")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Default Providers</h1>
        <p>
          The different design properties of the design suystem (height, contentHeight, rounded, padding, variant) each
          expose a component to chnage the default value for all the children components. These providers are named{" "}
          <code>Default[Property]Provider</code>
        </p>

        <h2>Basic Usage</h2>
        <p>
          Here is an example using <code>DefaultSizeProvider</code> and <code>DefaultVariantProvider</code>:
        </p>
        <DefaultVariantProviderBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Color</h2>
        <p>
          Color is not provided using a context but instead it rely on CSS variables. To provide a color palette to a
          group of elements, you need to set the proper <code>colorPaletteClass</code> CSS class on a parent element.
        </p>
        <ProvideColorPaletteWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
