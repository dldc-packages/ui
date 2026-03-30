import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { TypographyBasicWidget } from "@/widgets/typography/TypographyBasicWidget";
import { TypographyContentSizeWidget } from "@/widgets/typography/TypographyContentSizeWidget";
import { TypographyFontSizeWidget } from "@/widgets/typography/TypographyFontSizeWidget";

export const Route = createFileRoute("/01-components/11-typography")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog</h1>

        <TypographyBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <TypographyContentSizeWidget className={cn(notProseClass, proseBleedClass)} />
        <TypographyFontSizeWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
