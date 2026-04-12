import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, notProseContentClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { CodeHighlight } from "@/components/CodeHighlight";
import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";

export const Route = createFileRoute("/02-ariakit/00-intro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>UI - Ariakit</h1>
        <p>
          The <code>@dldc/ui-ariakit</code> package exports the same public components as <code>@ariakit/react</code>.
          The difference is the default render target: wrappers are preconfigured to render
          <code>@dldc/ui-components</code> components.
        </p>
        <p>
          In practice, this means you keep Ariakit APIs and behavior, while using the design-system components from this
          repository as the rendered UI primitives.
        </p>

        <h2>Render Behavior</h2>
        <p>
          Passing <code>render=&#123;...&#125;</code> to a component from <code>@dldc/ui-ariakit</code> does not replace
          the <code>@dldc/ui-components</code> wrapper. It is forwarded to the inner Ariakit component, which is itself
          rendered inside the Dldc wrapper.
        </p>

        <h2>Example</h2>
        <p>Using Button from @dldc/ui-ariakit:</p>
        <div className={cn(notProseClass, notProseContentClass)}>
          <CodeHighlight language="jsx" theme="dark-plus">
            {[
              'import { Button } from "@dldc/ui-ariakit/button";',
              "",
              "const elem = <Button render={<MyButton />} />",
            ].join("\n")}
          </CodeHighlight>
        </div>

        <p>Is equivalent to:</p>
        <div className={cn(notProseClass, notProseContentClass)}>
          <CodeHighlight language="jsx" theme="dark-plus">
            {[
              'import { Button as DldcButton } from "@dldc/ui-components/button";',
              'import { Button as AriakitButton } from "@ariakit/react";',
              "",
              "const elem = <DldcButton render={<AriakitButton render={<MyButton />} />} />",
            ].join("\n")}
          </CodeHighlight>
        </div>

        <p>
          So <code>render</code> is composed, not replaced: Dldc component outside, Ariakit component inside, and your
          custom render target passed to Ariakit.
        </p>
      </Prose>
    </StoryLayout>
  );
}
