import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { TypographyBasicWidget } from "@/widgets/typography/TypographyBasicWidget";
import { TypographyContentAndFontSizeWidget } from "@/widgets/typography/TypographyContentAndFontSizeWidget";
import { TypographyContentSizeWidget } from "@/widgets/typography/TypographyContentSizeWidget";
import { TypographyFontSizeWidget } from "@/widgets/typography/TypographyFontSizeWidget";

export const Route = createFileRoute("/01-components/11-typography")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Typography</h1>

        <p>
          <code>Typography</code> is the base text component for consistent sizing and rhythm across the UI. It renders
          a <code>span</code> by default and can be styled through semantic sizing props.
        </p>
        <p>
          In most cases, use <code>contentSize</code> to align text with the surrounding layout scale and control line
          height. Use <code>fontSize</code> when you need a precise font-size override.
        </p>
        <p>
          When only <code>fontSize</code> is provided, line height is computed automatically. If you provide both{" "}
          <code>contentSize</code> and <code>fontSize</code>, <code>fontSize</code> controls text size while{" "}
          <code>contentSize</code> controls line height.
        </p>

        <h2>Basic Usage</h2>
        <p>Start with the default component and add props only when you need to adapt the text to the local context.</p>

        <TypographyBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Content Size</h2>
        <p>
          <code>contentSize</code> ties typography to the design system scale and is the recommended way to control line
          height in layouts and components.
        </p>
        <TypographyContentSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Font Size</h2>
        <p>
          <code>fontSize</code> applies a direct font-size override. If <code>contentSize</code> is not set, line height
          is computed from <code>fontSize</code>.
        </p>
        <TypographyFontSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Using contentSize and fontSize Together</h2>
        <p>
          You can combine both props when you want explicit control over text size and line height at the same time.
          This is useful for fine-tuning dense or highly constrained layouts.
        </p>
        <TypographyContentAndFontSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Props Overview</h2>
        <ul>
          <li>
            <code>contentSize</code>: semantic size scale used to control line height.
          </li>
          <li>
            <code>fontSize</code>: explicit font-size override. If used alone, line height is computed automatically.
          </li>
          <li>
            <code>fontWeight</code>: controls text weight (regular, medium, bold, etc.).
          </li>
        </ul>
      </Prose>
    </StoryLayout>
  );
}
