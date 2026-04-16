import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";

import { StoryLayout } from "@/components/StoryLayout";
import { cn } from "@/utils/styles";
import { ItemAutoRoundedWidget } from "@/widgets/item/ItemAutoRoundedWidget";
import { ItemAutoSpacingWidget } from "@/widgets/item/ItemAutoSpacingWidget";
import { ItemBasicWidget } from "@/widgets/item/ItemBasicWidget";
import { ItemContentSizeWidget } from "@/widgets/item/ItemContentSizeWidget";
import { ItemContentWidget } from "@/widgets/item/ItemContentWidget";
import { ItemDirectionalPaddingWidget } from "@/widgets/item/ItemDirectionalPaddingWidget";
import { ItemPaddingFixContentSizeWidget } from "@/widgets/item/ItemPaddingFixContentSizeWidget";
import { ItemPaddingModesWidget } from "@/widgets/item/ItemPaddingModesWidget";
import { ItemPaddingWidget } from "@/widgets/item/ItemPaddingWidget";
import { ItemRoundedFromSizeWidget } from "@/widgets/item/ItemRoundedFromSizeWidget";
import { ItemRoundedWidget } from "@/widgets/item/ItemRoundedWidget";
import { ItemSizeWidget } from "@/widgets/item/ItemSizeWidget";
import { ItemSlotsAlignementWidget } from "@/widgets/item/ItemSlotsAlignementWidget";
import { ItemSlotsWidget } from "@/widgets/item/ItemSlotsWidget";

export const Route = createFileRoute("/01-components/00-item")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Item</h1>
        <p>
          The <code>Item</code> is the basis for inline UI elements such as <code>Button</code>, <code>ListItem</code>,{" "}
          <code>Input</code>, <code>MenuItem</code> and more. It provide the following functionalities:
        </p>
        <ul>
          <li>Automatic padding and content sizing based on the size, with support for manual overrides</li>
          <li>
            Auto size and radius for nested <code>Item</code>s
          </li>
          <li>Content padding and gap</li>
        </ul>
        <p>
          You are not supposed to use <code>Item</code> directly but rather use one of the components built on top of
          it.
        </p>
        <p>
          <strong>Note:</strong> The <code>Item</code> does not have any background or text color. In this documentation
          we use add <code>bg-white/5</code> to make it visible.
        </p>

        <h2>Basic</h2>
        <ItemBasicWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Size</h2>
        <p>
          <code>Item</code> components can be sized using the <code>size</code> prop. The default size is <code>7</code>
          .
        </p>
        <ItemSizeWidget className={cn(notProseClass, proseBleedClass)} />
        <p className="italic">
          Notice how the padding and content size are automatically adjusted based on the size to maintain a balanced
          and visually consistent design.
        </p>

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
          This fractional system applies to all size-related props including <code>size</code>, <code>contentSize</code>
          , <code>rounded</code>, and <code>padding</code>.
        </p>

        <h2>Content Size</h2>
        <p>
          The <code>contentSize</code> prop controls the internal content sizing within an Item. This is particularly
          useful when you need to manage the size of inner content independently from the Item's overall size.
        </p>
        <ItemContentSizeWidget className={cn(notProseClass, proseBleedClass)} />
        <p className="italic">
          In the example above, you can see how changing the content size automatically adjusts the padding to maintain
          visual harmony.
        </p>

        <h2>Padding</h2>
        <p>
          The <code>padding</code> prop controls the internal spacing of Item components. It also follows the same
          4px-based unit system with support for fractional values. The default padding is automatically calculated
          based on the size of the Item and its content to maintain visual balance.
        </p>
        <ItemPaddingWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          You can see that as the padding value increases, the space around the content grows accordingly and the{" "}
          <code>contentSize</code> decreases to maintain the overall size of the Item.
        </p>
        <p>
          It might look like the <code>padding</code> is applied on all four sides but that's not actually the case. The
          padding is applied on the horizontal axis only. The vertical padding is just a consequence of the automatic{" "}
          <code>contentSize</code> adjustment to maintain the overall size of the Item.
        </p>
        <p>
          You can see this if you set a fixed <code>contentSize</code> and then increase the <code>padding</code>:
        </p>
        <ItemPaddingFixContentSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Rounded</h2>
        <p>
          The <code>rounded</code> prop controls the border radius of Item components. Like other sizing props, it
          follows the same 4px-based unit system with support for fractional values.
        </p>
        <ItemRoundedWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          The default rounded value <code>2</code>. You can pass <code>rounded="autoFromSize"</code> to automatically
          compute the rounded value based on the size of the Item.
        </p>
        <ItemRoundedFromSizeWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Content</h2>
        <p>
          Item components can contain various types of content including text, icons, and complex layouts. The content
          system provides flexible ways to structure your Item components.
        </p>
        <p>
          Use <code>children</code> for text content, <code>startIcon</code> and <code>endIcon</code> for simple icon
          placement:
        </p>
        <ItemContentWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Automatic Spacing</h2>
        <p>
          As mentioned before, <code>Item</code> automatically calculates <code>padding</code> and{" "}
          <code>contentSize</code> based on the <code>size</code> prop. This also applies to <code>gap</code> when you
          have multiple children or icons. This automatic spacing ensures that the visual rhythm is maintained across
          different sizes and content configurations without needing manual adjustments.
        </p>
        <p>
          The automatic spacing also ensures that icons are always perfectly centered within the Item, regardless of the
          Item's size or content configuration. For example, see how in the example below the icon is always "centered"
          with equal space on all 4 sides.
        </p>
        <ItemAutoSpacingWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Padding Modes</h2>
        <p>
          The <code>paddingMode</code>, <code>startPaddingMode</code>, and <code>endPaddingMode</code> props control how
          much space is added around the content:
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
          By default, <code>Item</code> will automatically detect and apply the appropriate padding size based on its
          content. This means you usually don't need to specify the <code>paddingMode</code> prop manually.
        </p>
        <ItemPaddingModesWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          Use <code>startPaddingMode</code> and <code>endPaddingMode</code> to fine-tune padding on specific sides when
          you have mixed content or custom layouts.
        </p>
        <ItemDirectionalPaddingWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Auto nested Rounded</h2>
        <p>
          When nesting Item components, the rounded values are automatically computed to create harmonious visual
          relationships. The inner Item's radius is calculated based on the outer Item's radius and the spacing between
          them.
        </p>
        <p>
          In the example below, you can see how different <code>rounded</code> values on the outer Item (size 12)
          automatically affect the inner Items (sizes 10 and 8). Notice how the nested radii scale proportionally to
          maintain visual consistency.
        </p>
        <ItemAutoRoundedWidget className={cn(notProseClass, proseBleedClass)} />

        <h2>Advanced Content Layout</h2>
        <p>
          For more complex layouts, use <code>startSlot</code> and <code>endSlot</code> to embed custom components like
          nested Actions or any other UI elements:
        </p>
        <ItemSlotsWidget className={cn(notProseClass, proseBleedClass)} />
        <p>
          When <code>children</code> is text, it will automatically get <code>flex: 1</code>, if you pass a custom
          element to <code>children</code> you might need to set <code>flex: 1</code> manually to get the proper{" "}
          <code>endSlot</code> alignment. You can also solve this by adding <code>margin-left: "auto"</code> on{" "}
          <code>endSlot</code> (we already do it for you with <code>endIcon</code>).
        </p>
        <ItemSlotsAlignementWidget className={cn(notProseClass, proseBleedClass)} />
      </Prose>
    </StoryLayout>
  );
}
