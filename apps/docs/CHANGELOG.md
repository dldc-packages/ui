# @dldc/ui-docs

## 1.7.1

### Patch Changes

- 2c4dcd3: Fix fmt
- Updated dependencies [2c4dcd3]
  - @dldc/ui-components@1.7.1
  - @dldc/ui-patterns@1.6.1
  - @dldc/ui-ariakit@1.5.2
  - @dldc/ui-styles@1.6.1
  - @dldc/ui-core@1.5.2
  - @dldc/hooks@1.3.2

## 1.7.0

### Minor Changes

- ade0946: Dialog pattern and widget

### Patch Changes

- 04711d5: Upgrade deps
- b37b004: Upgrade deps
- Updated dependencies [04711d5]
- Updated dependencies [ade0946]
- Updated dependencies [b37b004]
  - @dldc/hooks@1.3.1
  - @dldc/ui-ariakit@1.5.1
  - @dldc/ui-components@1.7.0
  - @dldc/ui-core@1.5.1
  - @dldc/ui-patterns@1.6.0
  - @dldc/ui-styles@1.6.0

## 1.6.0

### Minor Changes

- c15c818: Refactor to extract item from action
- 93d5df1: Improve doc and fix providers issue

### Patch Changes

- Updated dependencies [7c4e40b]
- Updated dependencies [c15c818]
- Updated dependencies [6fc97ce]
- Updated dependencies [381e1de]
- Updated dependencies [2127c88]
- Updated dependencies [93d5df1]
  - @dldc/ui-components@1.6.0
  - @dldc/ui-patterns@1.5.0
  - @dldc/ui-styles@1.5.0
  - @dldc/ui-ariakit@1.5.0
  - @dldc/ui-core@1.5.0
  - @dldc/hooks@1.3.0

## 1.5.0

### Minor Changes

- 8081913: Improve typography doc

### Patch Changes

- 708ee31: Add Dialog scrollable prop and document dialog scroll behavior examples.
- 138dbfd: Add Ariakit dialog documentation and align dialog wrappers with dldc button, typography, backdrop, and render behavior.
- 8342dd7: Improve Ariakit intro documentation and code examples.
- 3b20b74: Add a composed dialog API to ui-patterns and update docs/readmes to clarify the architecture layers from ui-styles to ui-patterns.
- 66cef5e: Upgrade deps
- f8b820b: Clean up docs element-printing options by renaming `replacePropsRow` to `replacePropsRaw` and update related widgets.

  Simplify `DialogPositioner` props in `@dldc/ui-components/dialog` to use base div props.

- 0c3955f: Improve Dialog documentation with high-level vs low-level guidance and add interactive examples, including the Dialog size prop (`sm`, `md`, `lg`, `xl`, `full`).
- 72721c3: Document that dialog components do not manage body scroll lock or backdrop.
- Updated dependencies [708ee31]
- Updated dependencies [138dbfd]
- Updated dependencies [3b20b74]
- Updated dependencies [66cef5e]
- Updated dependencies [f8b820b]
- Updated dependencies [ac02046]
  - @dldc/ui-components@1.5.0
  - @dldc/ui-ariakit@1.4.2
  - @dldc/ui-patterns@1.4.0
  - @dldc/ui-styles@1.4.2
  - @dldc/ui-core@1.4.2

## 1.4.1

### Patch Changes

- adc4fbb: Force publish all
- Updated dependencies [adc4fbb]
  - @dldc/hooks@1.2.1
  - @dldc/ui-ariakit@1.4.1
  - @dldc/ui-components@1.4.1
  - @dldc/ui-core@1.4.1
  - @dldc/ui-patterns@1.3.1
  - @dldc/ui-styles@1.4.1

## 1.4.0

### Minor Changes

- 949ad94: Update Dialog component

### Patch Changes

- dc6d51a: Add typography primitives across core, styles, and components.

  - Introduce `Typography` in `@dldc/ui-components` with content-size, font-size, and font-weight support.
  - Add shared typography types in `@dldc/ui-core` and export typography style helpers in `@dldc/ui-styles`.
  - Update icon styles/components to support inline icon rendering.
  - Fix size token serialization usage in the tailwind plugin by using pixel-based serialization helpers.
  - Expand `applyProviders` typing in `@dldc/react-utils` to accept falsy provider entries.
  - Add typography documentation pages/widgets in `@dldc/ui-docs`.

- 9f46a9a: Minor fixes on button
- Updated dependencies [949ad94]
- Updated dependencies [dc6d51a]
- Updated dependencies [fd28eb9]
- Updated dependencies [9f46a9a]
  - @dldc/ui-components@1.4.0
  - @dldc/ui-ariakit@1.4.0
  - @dldc/ui-styles@1.4.0
  - @dldc/ui-core@1.4.0

## 1.3.0

### Minor Changes

- 99ae197: Force new version of all packages

### Patch Changes

- Updated dependencies [99ae197]
  - @dldc/hooks@1.2.0
  - @dldc/ui-ariakit@1.3.0
  - @dldc/ui-components@1.3.0
  - @dldc/ui-core@1.3.0
  - @dldc/ui-patterns@1.3.0
  - @dldc/ui-styles@1.3.0

## 1.2.0

### Minor Changes

- ee42064: Move logic to CSS calc and many refactors

### Patch Changes

- Updated dependencies [ee42064]
  - @dldc/hooks@1.1.0
  - @dldc/ui-ariakit@1.2.0
  - @dldc/ui-components@1.2.0
  - @dldc/ui-core@1.2.0
  - @dldc/ui-patterns@1.2.0
  - @dldc/ui-styles@1.2.0

## 1.1.0

### Minor Changes

- 2d10e43: Implement select components
- 2a424ed: Rename Frame into Action
- 2e76d22: Implement Geometry logic and component
- e1e4ce8: Add layers in styles

### Patch Changes

- b89d45c: Use Geometry in action
- 47df525: Add DesignWrapper component for applying design context to elements with CSS rendering. Refactor story routes with improved organization and content structure. Fix Frame component type signature and improve Button/ButtonLink implementations.
- 3d84f9f: Merge layers and make ActionGroup respect variant
- 8c0ca52: Add readme to all packages
- c263638: Many small changes and extract variant from design
- Updated dependencies [b89d45c]
- Updated dependencies [ac40257]
- Updated dependencies [47df525]
- Updated dependencies [3d84f9f]
- Updated dependencies [2d10e43]
- Updated dependencies [2a424ed]
- Updated dependencies [2e76d22]
- Updated dependencies [8c0ca52]
- Updated dependencies [e1e4ce8]
- Updated dependencies [5251a5c]
- Updated dependencies [c263638]
  - @dldc/ui-components@1.1.0
  - @dldc/ui-patterns@1.1.0
  - @dldc/ui-ariakit@1.1.0
  - @dldc/ui-styles@1.1.0
  - @dldc/ui-core@1.1.0
  - @dldc/hooks@1.0.3

## 1.0.2

### Patch Changes

- b9871c8: Remove css export from ui-components and ui-patterns
- 31a9801: Improve artchi and upgrade deps
- Updated dependencies [b9871c8]
- Updated dependencies [31a9801]
  - @dldc/ui-components@1.0.2
  - @dldc/ui-patterns@1.0.2
  - @dldc/ui-styles@1.0.2
  - @dldc/hooks@1.0.2
  - @dldc/ui-ariakit@1.0.2
  - @dldc/ui-core@1.0.2

## 1.0.1

### Patch Changes

- 5f52c32: Testing release flow
- Updated dependencies [5f52c32]
  - @dldc/hooks@1.0.1
  - @dldc/ui-ariakit@1.0.1
  - @dldc/ui-components@1.0.1
  - @dldc/ui-core@1.0.1
  - @dldc/ui-patterns@1.0.1
  - @dldc/ui-styles@1.0.1

## 1.0.0

### Major Changes

- 1cfe762: First release

### Patch Changes

- Updated dependencies [1cfe762]
  - @dldc/hooks@1.0.0
  - @dldc/ui-ariakit@1.0.0
  - @dldc/ui-components@1.0.0
  - @dldc/ui-core@1.0.0
  - @dldc/ui-patterns@1.0.0
  - @dldc/ui-styles@1.0.0
