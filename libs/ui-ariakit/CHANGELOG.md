# @dldc/ui-ariakit

## 1.5.3

### Patch Changes

- 44b3200: Fix published packages missing dist: add a `files` allowlist (`["dist"]`) to each package so npm includes the built output instead of falling back to `.gitignore` (which excludes `dist`). Also remove stray top-level `types` fields pointing to non-existent entry files.
- Updated dependencies [44b3200]
  - @dldc/ui-components@1.7.2
  - @dldc/react-utils@1.3.3

## 1.5.2

### Patch Changes

- 2c4dcd3: Fix fmt
- Updated dependencies [2c4dcd3]
  - @dldc/ui-components@1.7.1
  - @dldc/react-utils@1.3.2

## 1.5.1

### Patch Changes

- 04711d5: Upgrade deps
- Updated dependencies [04711d5]
- Updated dependencies [ade0946]
- Updated dependencies [e60b588]
- Updated dependencies [b37b004]
  - @dldc/react-utils@1.3.1
  - @dldc/ui-components@1.7.0

## 1.5.0

### Minor Changes

- c15c818: Refactor to extract item from action

### Patch Changes

- 381e1de: Simplify the dialog pattern API around built-in disclosure and header composition.
- 2127c88: Forward SelectItem disabled state to the underlying Ariakit SelectItem renderer.
- Updated dependencies [7c4e40b]
- Updated dependencies [c15c818]
- Updated dependencies [6fc97ce]
- Updated dependencies [381e1de]
- Updated dependencies [93d5df1]
  - @dldc/ui-components@1.6.0
  - @dldc/react-utils@1.3.0

## 1.4.2

### Patch Changes

- 138dbfd: Add Ariakit dialog documentation and align dialog wrappers with dldc button, typography, backdrop, and render behavior.
- 3b20b74: Add a composed dialog API to ui-patterns and update docs/readmes to clarify the architecture layers from ui-styles to ui-patterns.
- Updated dependencies [708ee31]
- Updated dependencies [138dbfd]
- Updated dependencies [3b20b74]
- Updated dependencies [66cef5e]
- Updated dependencies [f8b820b]
- Updated dependencies [78c7c15]
- Updated dependencies [ac02046]
  - @dldc/ui-components@1.5.0
  - @dldc/react-utils@1.2.2

## 1.4.1

### Patch Changes

- adc4fbb: Force publish all
- Updated dependencies [adc4fbb]
  - @dldc/react-utils@1.2.1
  - @dldc/ui-components@1.4.1

## 1.4.0

### Minor Changes

- 949ad94: Update Dialog component

### Patch Changes

- fd28eb9: Improve types and props
- 9f46a9a: Minor fixes on button
- Updated dependencies [949ad94]
- Updated dependencies [dc6d51a]
- Updated dependencies [fd28eb9]
- Updated dependencies [9f46a9a]
  - @dldc/ui-components@1.4.0
  - @dldc/react-utils@1.2.0

## 1.3.0

### Minor Changes

- 99ae197: Force new version of all packages

### Patch Changes

- Updated dependencies [99ae197]
  - @dldc/react-utils@1.1.0
  - @dldc/ui-components@1.3.0

## 1.2.0

### Minor Changes

- ee42064: Move logic to CSS calc and many refactors

### Patch Changes

- Updated dependencies [ee42064]
  - @dldc/ui-components@1.2.0

## 1.1.0

### Minor Changes

- 2d10e43: Implement select components
- 2a424ed: Rename Frame into Action

### Patch Changes

- b89d45c: Use Geometry in action
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
- Updated dependencies [c263638]
  - @dldc/ui-components@1.1.0

## 1.0.2

### Patch Changes

- 31a9801: Improve artchi and upgrade deps
- Updated dependencies [b9871c8]
- Updated dependencies [31a9801]
  - @dldc/ui-components@1.0.2

## 1.0.1

### Patch Changes

- 5f52c32: Testing release flow
- Updated dependencies [5f52c32]
  - @dldc/ui-components@1.0.1

## 1.0.0

### Major Changes

- 1cfe762: First release

### Patch Changes

- Updated dependencies [1cfe762]
  - @dldc/ui-components@1.0.0
