# @dldc/ui-components

## 1.4.1

### Patch Changes

- adc4fbb: Force publish all
- Updated dependencies [adc4fbb]
  - @dldc/hooks@1.2.1
  - @dldc/react-utils@1.2.1
  - @dldc/ui-core@1.4.1
  - @dldc/ui-styles@1.4.1
  - @dldc/utils@1.2.1

## 1.4.0

### Minor Changes

- 949ad94: Update Dialog component
- dc6d51a: Add typography primitives across core, styles, and components.
  - Introduce `Typography` in `@dldc/ui-components` with content-size, font-size, and font-weight support.
  - Add shared typography types in `@dldc/ui-core` and export typography style helpers in `@dldc/ui-styles`.
  - Update icon styles/components to support inline icon rendering.
  - Fix size token serialization usage in the tailwind plugin by using pixel-based serialization helpers.
  - Expand `applyProviders` typing in `@dldc/react-utils` to accept falsy provider entries.
  - Add typography documentation pages/widgets in `@dldc/ui-docs`.

### Patch Changes

- fd28eb9: Improve types and props
- 9f46a9a: Minor fixes on button
- Updated dependencies [949ad94]
- Updated dependencies [dc6d51a]
- Updated dependencies [fd28eb9]
  - @dldc/react-utils@1.2.0
  - @dldc/ui-styles@1.4.0
  - @dldc/ui-core@1.4.0

## 1.3.0

### Minor Changes

- 99ae197: Force new version of all packages

### Patch Changes

- Updated dependencies [99ae197]
  - @dldc/hooks@1.2.0
  - @dldc/react-utils@1.1.0
  - @dldc/ui-core@1.3.0
  - @dldc/ui-styles@1.3.0
  - @dldc/utils@1.2.0

## 1.2.0

### Minor Changes

- ee42064: Move logic to CSS calc and many refactors

### Patch Changes

- Updated dependencies [ee42064]
  - @dldc/hooks@1.1.0
  - @dldc/ui-core@1.2.0
  - @dldc/ui-styles@1.2.0
  - @dldc/utils@1.1.0

## 1.1.0

### Minor Changes

- 47df525: Add DesignWrapper component for applying design context to elements with CSS rendering. Refactor story routes with improved organization and content structure. Fix Frame component type signature and improve Button/ButtonLink implementations.
- 2d10e43: Implement select components
- 2a424ed: Rename Frame into Action
- 2e76d22: Implement Geometry logic and component
- e1e4ce8: Add layers in styles

### Patch Changes

- b89d45c: Use Geometry in action
- ac40257: Add ParityProvider and fix imports
- 3d84f9f: Merge layers and make ActionGroup respect variant
- 8c0ca52: Add readme to all packages
- c263638: Many small changes and extract variant from design
- Updated dependencies [b89d45c]
- Updated dependencies [ac40257]
- Updated dependencies [3d84f9f]
- Updated dependencies [2d10e43]
- Updated dependencies [2a424ed]
- Updated dependencies [2e76d22]
- Updated dependencies [8c0ca52]
- Updated dependencies [e1e4ce8]
- Updated dependencies [5251a5c]
- Updated dependencies [c263638]
  - @dldc/ui-styles@1.1.0
  - @dldc/ui-core@1.1.0
  - @dldc/hooks@1.0.3
  - @dldc/utils@1.0.3

## 1.0.2

### Patch Changes

- b9871c8: Remove css export from ui-components and ui-patterns
- 31a9801: Improve artchi and upgrade deps
- Updated dependencies [b9871c8]
- Updated dependencies [31a9801]
  - @dldc/ui-styles@1.0.2
  - @dldc/hooks@1.0.2
  - @dldc/ui-core@1.0.2
  - @dldc/utils@1.0.2

## 1.0.1

### Patch Changes

- 5f52c32: Testing release flow
- Updated dependencies [5f52c32]
  - @dldc/hooks@1.0.1
  - @dldc/ui-core@1.0.1
  - @dldc/ui-styles@1.0.1
  - @dldc/utils@1.0.1

## 1.0.0

### Major Changes

- 1cfe762: First release

### Patch Changes

- Updated dependencies [1cfe762]
  - @dldc/hooks@1.0.0
  - @dldc/ui-core@1.0.0
  - @dldc/ui-styles@1.0.0
  - @dldc/utils@1.0.0
