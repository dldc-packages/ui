import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { TypographyBasicWidget } from "@/widgets/typography/TypographyBasicWidget";
import { TypographyContentAndFontSizeWidget } from "@/widgets/typography/TypographyContentAndFontSizeWidget";
import { TypographyContentSizeWidget } from "@/widgets/typography/TypographyContentSizeWidget";
import { TypographyFontSizeWidget } from "@/widgets/typography/TypographyFontSizeWidget";
import { TypographyFontWeightWidget } from "@/widgets/typography/TypographyFontWeightWidget";
import { TypographyNestedWidget } from "@/widgets/typography/TypographyNestedWidget";

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

        <h2>
          Using <code>contentSize</code> and <code>fontSize</code> together
        </h2>
        <p>
          You can combine both props when you want explicit control over text size and line height at the same time.
          This is useful for fine-tuning dense or highly constrained layouts.
        </p>
        <TypographyContentAndFontSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Font Weight</h2>
        <p>
          <code>fontWeight</code> controls visual emphasis without changing the layout rhythm. Use it for hierarchy,
          contrast, and emphasis while keeping the same size scale.
        </p>
        <TypographyFontWeightWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Nested Typography</h2>
        <p>
          You can nest <code>Typography</code> components inside each other. Nested components will inherit the sizing (
          <code>contentSize</code> and <code>fontSize</code>) of the parent <code>Typography</code>.
        </p>
        <p>
          <strong>Note:</strong> <code>Typography</code> renders a <code>&lt;p&gt;</code> by default, when nesting, make
          sure to set <code>render=&lt;span /&gt;</code> on the child component to avoid invalid <code>&lt;p&gt;</code>{" "}
          inside <code>&lt;p&gt;</code> markup.
        </p>
        <TypographyNestedWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
