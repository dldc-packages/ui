# @dldc/ui

> Everything I use to build UIs in a monorepo

## Component library structure

The component library is builed on a few layers mapping to different libraries:

1. `@dldc/ui-core`: The design tokens and css variables defining
2. `@dldc/ui-styles`: Styles, exporting css classes and functions to generate classes
3. `@dldc/ui-components`: Component version of styles. Styles + Basic element + Context
4. `@dldc/ui-ariakit`: Ariakit component with default `render` prop set to `@dldc/ui-components` version of the component
5. `@dldc/ui-patterns`: Higher level components built using `@dldc/ui-ariakit`

### Concrete example

- `@dldc/ui-core`: defines color variables, spacing variables, typography variables
- `@dldc/ui-styles`: defines a `frameStyles` function returning css classes for a frame component
- `@dldc/ui-components`: defines a `Frame` component using a `div` element with `frameStyles` applied and the proper context usage
- `@dldc/ui-ariakit`: defines a `Button` component wrapping, rendering `Ariakit`'s `Button` component with the `render` prop set to `@dldc/ui-components`'s `Frame`
- `@dldc/ui-patterns`: defines a `DeleteAlertDialog` component using `@dldc/ui-ariakit`'s `Dialog` and `Button` components with custom logic and layout
