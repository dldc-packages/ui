import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ActionAutoRoundedWidget } from "@/widgets/action/ActionAutoRoundedWidget";
import { ActionAutoSpacingWidget } from "@/widgets/action/ActionAutoSpacingWidget";
import { ActionBasicWidget } from "@/widgets/action/ActionBasicWidget";
import { ActionColorsWidget } from "@/widgets/action/ActionColorsWidget";
import { ActionContentHeightWidget } from "@/widgets/action/ActionContentHeightWidget";
import { ActionContentWidget } from "@/widgets/action/ActionContentWidget";
import { ActionDirectionalPaddingWidget } from "@/widgets/action/ActionDirectionalPaddingWidget";
import { ActionDisabledWidget } from "@/widgets/action/ActionDisabledWidget";
import { ActionHeightWidget } from "@/widgets/action/ActionHeightWidget";
import { ActionInteractiveWidget } from "@/widgets/action/ActionInteractiveWidget";
import { ActionPaddingWidget } from "@/widgets/action/ActionPaddingWidget";
import { ActionRoundedWidget } from "@/widgets/action/ActionRoundedWidget";
import { ActionSlotsAlignementWidget } from "@/widgets/action/ActionSlotsAlignementWidget";
import { ActionSlotsWidget } from "@/widgets/action/ActionSlotsWidget";
import { ActionSpacingAlignWidget } from "@/widgets/action/ActionSpacingAlignWidget";
import { ActionSpacingEquivalentWidget } from "@/widgets/action/ActionSpacingEquivalentWidget";
import { ActionVariantsWidget } from "@/widgets/action/ActionVariantsWidget";

export const Route = createFileRoute("/01-stories/01-action")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Action</h1>
        <p>
          <code>Action</code> is the basis for interactive UI elements such as <code>Button</code>,{" "}
          <code>ListItem</code>, <code>Input</code>, <code>MenuItem</code> and more. It provide the following
          functionalities:
        </p>
        <ul>
          <li>Design: background, colors, border and radius</li>
          <li>Color variants</li>
          <li>
            Changing defaults design props with <code>DefaultDesignProvider</code>
          </li>
          <li>
            Auto size and radius for nested <code>Action</code>s
          </li>
          <li>Interactive states (or not): hover, focus, disabled</li>
          <li>Content padding and gap</li>
        </ul>
        <p>
          You are not supposed to use <code>Action</code> directly but rather use one of the components built on top of
          it.
        </p>
        <h2>Basic</h2>
        <ActionBasicWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Interactive</h2>
        <p>
          The <code>interactive</code> prop controls whether the Action responds to user interactions like hover and
          focus states. When <code>interactive={`{true}`}</code>, the Action will show visual feedback on hover and
          focus, similar to buttons and other interactive elements.
        </p>
        <p>
          <strong>Note:</strong> The <code>interactive</code> prop only adds the visual styles for hover and focus
          states. It does not make the element actually interactive (clickable, focusable, etc.). For true
          interactivity, use components like <code>Button</code> or add appropriate event handlers and accessibility
          attributes.
        </p>
        <ActionInteractiveWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Disabled</h2>
        <p>
          The <code>disabled</code> prop controls the disabled state of Action components. When{" "}
          <code>disabled={`{true}`}</code>, the Action will have reduced opacity and pointer events will be disabled,
          providing clear visual feedback that the element is not interactive.
        </p>
        <p>
          <strong>Important:</strong> The <code>disabled</code> prop only takes effect when <code>interactive</code> is
          set to <code>true</code>. Non-interactive Actions cannot be disabled as they are not meant to respond to user
          interactions in the first place.
        </p>
        <p>
          The disabled state works consistently across all color variants and maintains accessibility by setting
          appropriate ARIA attributes.
        </p>
        <ActionDisabledWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Variants</h2>
        <p>Action comes with different visual variants to serve different purposes:</p>
        <ul>
          <li>
            <strong>solid:</strong> Primary action, can also be used to highlight a selected element
          </li>
          <li>
            <strong>surface:</strong> Default, for interactive elements
          </li>
          <li>
            <strong>subtle:</strong> Visually lighter, useful when lot of Actions
          </li>
          <li>
            <strong>ghost:</strong> No background, for even lower priority actions. Also used for list / menu items
          </li>
          <li>
            <strong>input:</strong> For input like elements
          </li>
        </ul>
        <p>
          <strong>Note:</strong> Here the <code>interactive</code> is enabled to show the hover effect on all variants.
        </p>
        <ActionVariantsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Colors</h2>
        <p>
          Action supports a comprehensive color palette through the <code>color</code> prop. The color system includes:
        </p>
        <ul>
          <li>
            <strong>Hue colors:</strong> red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue,
            indigo, violet, purple, fuchsia, pink, rose
          </li>
          <li>
            <strong>Grayscale colors:</strong> slate, gray, zinc, neutral, stone
          </li>
        </ul>
        <p>
          The default color is <code>neutral</code>.
        </p>
        <ActionColorsWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Height</h2>
        <p>
          Action components can be sized using the <code>height</code> prop. The default height is <code>7</code>.
        </p>
        <ActionHeightWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Content Height</h2>
        <p>
          The <code>contentHeight</code> prop controls the internal content sizing within a Action. This is particularly
          useful when you need to manage the size of inner content independently from the Action's overall height.
        </p>
        <p>
          When not specified, the content height is automatically calculated based on the Action's height and internal
          spacing to ensure optimal content display.
        </p>
        <ActionContentHeightWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>How Sizing Works</h2>
        <p>
          The design system uses a systematic sizing approach based on units of 4 pixels with support for fractional
          values:
        </p>
        <ul>
          <li>
            <strong>Base units:</strong> Each number represents multiples of 4px (<code>6 = 24px</code>,{" "}
            <code>7 = 28px</code>, <code>8 = 32px</code>)
          </li>
          <li>
            <strong>Half units (x):</strong> Add 2px to the base unit (<code>7x = 28px + 2px = 30px</code>)
          </li>
          <li>
            <strong>Quarter units (_x):</strong> Add 1px to the base unit (<code>7_x = 28px + 1px = 29px</code>)
          </li>
          <li>
            <strong>Eighth units (__x):</strong> Add 0.5px to the base unit (<code>7__x = 28px + 0.5px = 28.5px</code>)
          </li>
        </ul>
        <p>Examples:</p>
        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Unit</th>
              <th>x</th>
              <th>_x</th>
              <th>__x</th>
              <th>Calculation</th>
              <th>Pixels</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            <tr>
              <td>2</td>
              <td>2 × 4</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>2 × 4</td>
              <td>8px</td>
            </tr>
            <tr>
              <td>2__x</td>
              <td>2 × 4</td>
              <td>-</td>
              <td>-</td>
              <td>+0.5</td>
              <td>2 × 4 + 0.5</td>
              <td>8.5px</td>
            </tr>
            <tr>
              <td>2_x</td>
              <td>2 × 4</td>
              <td>-</td>
              <td>+1</td>
              <td>-</td>
              <td>2 × 4 + 1 </td>
              <td>9px</td>
            </tr>
            <tr>
              <td>2_xx</td>
              <td>2 × 4</td>
              <td>-</td>
              <td>+1</td>
              <td>+0.5</td>
              <td>2 × 4 + 1 + 0.5</td>
              <td>9.5px</td>
            </tr>
            <tr>
              <td>2x</td>
              <td>2 × 4</td>
              <td>+2</td>
              <td>-</td>
              <td>-</td>
              <td>2 × 4 + 2</td>
              <td>10px</td>
            </tr>
          </tbody>
        </table>
        <p>
          This fractional system applies to all size-related props including <code>height</code>,{" "}
          <code>contentHeight</code>,<code>rounded</code>, and <code>spacing</code>.
        </p>
        <h2>Rounded</h2>
        <p>
          The <code>rounded</code> prop controls the border radius of Action components. Like other sizing props, it
          follows the same 4px-based unit system with support for fractional values.
        </p>
        <p>
          The default rounded value is <code>1</code> (4px).
        </p>
        <ActionRoundedWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Auto Rounded</h2>
        <p>
          When nesting Action components, the rounded values are automatically computed to create harmonious visual
          relationships. The inner Action's radius is calculated based on the outer Action's radius and the spacing
          between them.
        </p>
        <p>
          In the example below, you can see how different <code>rounded</code> values on the outer Action (height 12)
          automatically affect the inner Actions (heights 10 and 8). Notice how the nested radii scale proportionally to
          maintain visual consistency.
        </p>
        <p>
          <strong>Note:</strong> For automatic rounded calculations to work, the parent Action must know the size of its
          content. This means you should use the <code>contentHeight</code> prop (not <code>height</code>) on nested
          Actions to ensure correct radius scaling.
        </p>
        <p>
          <strong>Note:</strong> The auto rounded calculation has a minimum of <code>0x</code> (2px), except if the
          parent radius is <code>0</code> in which case the child radius will also be <code>0</code>.
        </p>
        <ActionAutoRoundedWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Content</h2>
        <p>
          Action components can contain various types of content including text, icons, and complex layouts. The content
          system provides flexible ways to structure your Action components.
        </p>
        <h3>Basic Content</h3>
        <p>
          Use <code>children</code> for text content, <code>startIcon</code> and <code>endIcon</code> for simple icon
          placement:
        </p>
        <ActionContentWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Advanced Layout</h3>
        <p>
          For more complex layouts, use <code>startSlot</code> and <code>endSlot</code> to embed custom components like
          nested Actions or any other UI elements:
        </p>
        <ActionSlotsWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          When <code>children</code> is text, it will automatically get <code>flex: 1</code>, if you pass a custom
          element to <code>children</code> you might need to set <code>flex: 1</code> manually to get the proper{" "}
          <code>endSlot</code> alignment. You can also solve this by adding <code>margin-left: "auto"</code> on{" "}
          <code>endSlot</code> (we already do it for you with <code>endIcon</code>).
        </p>
        <ActionSlotsAlignementWidget className={cn(notProseClass, proseBleedClass)} />
        <h2>Spacing</h2>
        <p>
          Action provides comprehensive control over internal spacing through multiple props that affect padding and
          gaps between content elements.
        </p>
        <h3>Automatic Spacing</h3>
        <p>
          By default, spacing (padding and gap) is automatically computed from <code>height</code> and{" "}
          <code>contentHeight</code> to ensure visual consistency. Notice in the example below how the icon is always
          "centered" within the Action.
        </p>
        <ActionAutoSpacingWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Padding Types</h3>
        <p>
          The <code>padding</code>, <code>startPadding</code>, and <code>endPadding</code> props control how much space
          is added around the content:
        </p>
        <ul>
          <li>
            <strong>auto:</strong> The default. Automatically chooses the best padding based on the content (icon, text,
            or both).
          </li>
          <li>
            <strong>text:</strong> Larger padding that's visually pleasing for text content
          </li>
          <li>
            <strong>icon:</strong> Smaller padding that makes icons appear square (equal horizontal and vertical
            padding)
          </li>
          <li>
            <strong>none:</strong> No padding applied
          </li>
        </ul>
        <p>
          By default, <code>Action</code> will automatically detect and apply the appropriate padding size based on its
          content. This means you usually don't need to specify the <code>padding</code> prop manually.
        </p>
        <ActionPaddingWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Directional Padding Control</h3>
        <p>
          Use <code>startPadding</code> and <code>endPadding</code> to fine-tune padding on specific sides when you have
          mixed content or custom layouts.
        </p>
        <ActionDirectionalPaddingWidget className={cn(notProseClass, proseBleedClass)} />
        <h3>Manual Spacing Override</h3>
        <p>
          The <code>spacing</code> prop allows you to override the automatic spacing calculation. Note that this prop
          doesn't control the actual pixel size directly—instead, <code>spacing="8"</code> means "use the same spacing
          as a Action with height 8 and default contentHeight.".
        </p>
        <ActionSpacingEquivalentWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          This is particularly useful when you want to adjust the spacing for Actions with different heights to maintain
          a consistent visual rhythm. For this to work you need all the Actions to have the same{" "}
          <code>contentHeight</code>.
        </p>
        <ActionSpacingAlignWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
