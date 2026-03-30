---
"@dldc/ui-components": minor
"@dldc/ui-core": minor
"@dldc/ui-styles": minor
"@dldc/ui-core-tailwind-plugin": patch
"@dldc/react-utils": patch
"@dldc/ui-docs": patch
---

Add typography primitives across core, styles, and components.

- Introduce `Typography` in `@dldc/ui-components` with content-size, font-size, and font-weight support.
- Add shared typography types in `@dldc/ui-core` and export typography style helpers in `@dldc/ui-styles`.
- Update icon styles/components to support inline icon rendering.
- Fix size token serialization usage in the tailwind plugin by using pixel-based serialization helpers.
- Expand `applyProviders` typing in `@dldc/react-utils` to accept falsy provider entries.
- Add typography documentation pages/widgets in `@dldc/ui-docs`.
