---
"@dldc/ui-core-tailwind-plugin": patch
"@dldc/ui-components": patch
"@dldc/react-utils": patch
"@dldc/ui-patterns": patch
"@dldc/ui-ariakit": patch
"@dldc/ui-styles": patch
"@dldc/ui-base": patch
"@dldc/ui-core": patch
"@dldc/hooks": patch
"@dldc/utils": patch
---

Fix published packages missing dist: add a `files` allowlist (`["dist"]`) to each package so npm includes the built output instead of falling back to `.gitignore` (which excludes `dist`). Also remove stray top-level `types` fields pointing to non-existent entry files.
