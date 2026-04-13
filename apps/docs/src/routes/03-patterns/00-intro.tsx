import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";

export const Route = createFileRoute("/03-patterns/00-intro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>UI - Patterns</h1>
        <p>
          The <code>@dldc/ui-patterns</code> package provides higher-level, pre-composed UI components built on top of{" "}
          <code>@dldc/ui-components</code> and <code>@dldc/ui-ariakit</code>. Instead of manually assembling primitives,
          patterns provide ready-made solutions for common use cases.
        </p>

        <h2>What Are Patterns?</h2>
        <p>
          Patterns are composition components that combine styled components, behavior, and sensible defaults. For
          example, a <code>Dialog</code> pattern includes the dialog container, title section, close button, and
          backdrop all pre-wired together.
        </p>

        <p>
          Each pattern is designed to work standalone while remaining flexible: you can still customize styling,
          override defaults, and compose them with other components as needed.
        </p>

        <h2>Architecture</h2>
        <p>UI patterns live at the top of the library stack and build on all lower layers:</p>
        <ul>
          <li>
            <strong>@dldc/ui-styles:</strong> CSS code, functions, and constants to apply design tokens and visual
            systems
          </li>
          <li>
            <strong>@dldc/ui-components:</strong> Styled-only components with provider logic (defaults, auto-rounded
            corners, palette colors, etc.)
          </li>
          <li>
            <strong>@dldc/ui-ariakit:</strong> Ariakit behavior components with <code>@dldc/ui-components</code> as
            pre-configured render targets
          </li>
          <li>
            <strong>@dldc/ui-patterns:</strong> Composition components built from ui-components and ui-ariakit,
            providing ready-made solutions for complex interactions
          </li>
        </ul>
      </Prose>
    </StoryLayout>
  );
}
