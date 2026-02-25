# @dldc/ui

> Everything I use to build UIs in a monorepo

## Component library structure

The component library is built on a few layers mapping to different libraries:

1. `@dldc/ui-core`: The design tokens and css variables defining
2. `@dldc/ui-styles`: Styles, exporting css classes and functions to generate classes and inline styles
3. `@dldc/ui-components`: Component version of styles. Styles + Basic element + Context
4. `@dldc/ui-ariakit`: Ariakit component with default `render` prop set to `@dldc/ui-components` version of the component
5. `@dldc/ui-patterns`: Higher level components built using `@dldc/ui-ariakit`

### Vocabulary

Design

- `Variants`: styles for interactive elements like buttons, inputs, selects, etc.
- `Paper`: Neutral background + border
- `Geometry`: Radius & padding system.
- `Size`: Fixed height/width for interactive elements

Components

- `Geometry`: `Geometry` component
- `Action`: `Geometry` + `Size` + `Variants`, used for buttons, inputs, selects, etc.
- `Frame`: `Paper` + `Frame`, used for cards, dialogs, etc.

### How Geometry works

Geometry is the logic hanlding the relationship between Border radius and padding for nested elements

The basic idea is that when you have nested elements you want their radius and padding to be linked so that the inner space is constant.

```
nestedRadius = parentRadius - padding
```

This works well when the padding is small but with this rule you quickly get to 0 inner radius. We can fix this by using an exponential decay, making the radius decrease slower as the padding increases.

#### Size (fixed height/width layouts)

For elements like inputs, selects, buttons, etc. we want them to have a fixed height so that they align nicely together.
We also want nested elements to automatically adjust compute their height.

Properties:

- `Size`: Outer height/width of the element
- `ContentSize`: Size of the inner content area (size of icons for example)
- `Padding`: Space between inner content and outer border

For Cross-axis (height for horizontal layouts, width for vertical layouts) we are strictly limited by the Size:

- `Padding = (Size - ContentSize) / 2`
- `Size = ContentSize + 2 * Padding`
- `ContentSize = Size - 2 * Padding`

For Main-axis (width for horizontal layouts, height for vertical layouts) we don't expect to have a fixed size so the equations don't apply.

Also note that for both axis, the spacing between elements is equal to the `Padding` (to ensure icons is aligned properly).
