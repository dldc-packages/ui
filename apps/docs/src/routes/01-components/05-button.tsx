import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ButtonColorsVariantsWidget } from "@/widgets/button/ButtonColorsVariantsWidget";
import { ButtonContentSizeWidget } from "@/widgets/button/ButtonContentSizeWidget";
import { ButtonDisabledWidget } from "@/widgets/button/ButtonDisabledWidget";
import { ButtonHoverVariantsWidget } from "@/widgets/button/ButtonHoverVariantsWidget";
import { ButtonIconsWidget } from "@/widgets/button/ButtonIconsWidget";
import { ButtonInteractiveStatesWidget } from "@/widgets/button/ButtonInteractiveStatesWidget";
import { ButtonLikeBasicWidget } from "@/widgets/button/ButtonLikeBasicWidget";
import { ButtonLikeColorsWidget } from "@/widgets/button/ButtonLikeColorsWidget";
import { ButtonLikeComparisonWidget } from "@/widgets/button/ButtonLikeComparisonWidget";
import { ButtonLikeIconsWidget } from "@/widgets/button/ButtonLikeIconsWidget";
import { ButtonLikeSizesWidget } from "@/widgets/button/ButtonLikeSizesWidget";
import { ButtonLoadingWidget } from "@/widgets/button/ButtonLoadingWidget";
import { ButtonPaddingSizesWidget } from "@/widgets/button/ButtonPaddingSizesWidget";
import { ButtonPaddingWidget } from "@/widgets/button/ButtonPaddingWidget";
import { ButtonSizeWidget } from "@/widgets/button/ButtonSizeWidget";
import { ButtonSlotsWidget } from "@/widgets/button/ButtonSlotsWidget";

export const Route = createFileRoute("/01-components/05-button")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Button</h1>
        <h2>Button Sizes</h2>
        <p>
          Button size is controlled by the <code>size</code> prop
        </p>
        <ButtonSizeWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Button Content Size</h3>
        <p>
          The size of the content is controlled by the <code>contentSize</code> prop.
        </p>
        <p>Notice how the left and right padding automatically adjusts to be the same as the top and bottom padding.</p>
        <ButtonContentSizeWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Colors and Variants</h2>
        <ButtonColorsVariantsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Hover Variants</h2>
        <p>
          You can specify a different variant when the button is hovered using the <code>hoverVariant</code> prop. (by
          default it matches the <code>variant</code>).
        </p>
        <ButtonHoverVariantsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Icons</h2>
        <p>
          Buttons support icons on either side of the text content using <code>startIcon</code> and <code>endIcon</code>{" "}
          props. Icons are automatically sized and spaced appropriately.
        </p>
        <ButtonIconsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Loading States</h2>
        <p>
          Use the <code>loading</code> prop to show a loading indicator. When loading is active, the button shows a
          spinner in place of the start icon (or at the start position if no start icon is present).
        </p>
        <ButtonLoadingWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Disabled States</h2>
        <p>
          Use the <code>disabled</code> prop to disable button interactions. Disabled buttons are visually muted and
          cannot be clicked or focused.
        </p>
        <ButtonDisabledWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Padding Control</h2>
        <p>
          The <code>spacing</code> prop controls the internal spacing between elements inside the button. This affects
          the gaps between icons and text content.
        </p>
        <ButtonPaddingWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          This is particularly useful when you want to adjust the spacing for buttons with different sizes to maintain a
          consistent visual rhythm.
        </p>
        <ButtonPaddingSizesWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Advanced Slots</h2>
        <p>
          Beyond simple icons, you can use <code>startSlot</code> and <code>endSlot</code> to embed more complex content
          like nested buttons or custom components.
        </p>
        <ButtonSlotsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Interactive States</h2>
        <p>
          For demonstration or testing purposes, you can manually trigger hover and focus states using{" "}
          <code>data-hover</code> and <code>data-focus-visible</code> attributes.
        </p>
        <ButtonInteractiveStatesWidget className={cn(notProseClass, proseBleedClass)} />
        <h1>ButtonLike</h1>
        <p>
          The <code>ButtonLike</code> component renders a div that looks like a Button but without interactive states
          like hover effects. This makes it perfect for displaying button-styled content that isn't meant to be
          clickable, such as status indicators, labels, or static UI elements.
        </p>
        <h2>Basic Usage</h2>
        <p>
          <code>ButtonLike</code> shares the same visual styling as <code>Button</code> but renders as a div element
          without any interactive behavior.
        </p>
        <ButtonLikeBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Comparison with Button</h2>
        <p>
          Here's a side-by-side comparison showing how <code>ButtonLike</code> maintains the same visual appearance as{" "}
          <code>Button</code> but without hover states or interactive behavior.
        </p>
        <ButtonLikeComparisonWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Sizes</h2>
        <p>
          Like buttons, <code>ButtonLike</code> supports all the same size options through the <code>size</code> prop.
        </p>
        <ButtonLikeSizesWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Colors and Variants</h2>
        <p>
          <code>ButtonLike</code> supports the same variants and colors as <code>Button</code>: solid, surface, subtle,
          and ghost variants with full color palette support.
        </p>
        <ButtonLikeColorsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Icons and Content</h2>
        <p>
          <code>ButtonLike</code> supports the same content options as <code>Button</code>, including{" "}
          <code>startIcon</code> and <code>endIcon</code> props for adding icons alongside text content.
        </p>
        <ButtonLikeIconsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>When to Use ButtonLike</h2>
        <p>
          Use <code>ButtonLike</code> when you need:
        </p>
        <ul>
          <li>Status indicators that look like buttons but aren't interactive</li>
          <li>Static labels with button-like styling</li>
          <li>Placeholder elements in button groups</li>
          <li>Read-only display elements that match button styling</li>
        </ul>
        <p>
          For interactive elements, always use <code>Button</code> instead to provide proper accessibility and user
          feedback.
        </p>
      </Prose>
    </StoryLayout>
  );
}
