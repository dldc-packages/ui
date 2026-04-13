# @dldc/ui-ariakit

> Ariakit behavior components pre-configured with `@dldc/ui-components` as render targets. This library bridges accessibility and behavior (from Ariakit) with visual design and defaults (from ui-components).

Each component exports the Ariakit public API while using `@dldc/ui-components` as the default render. Note that the `render` prop composes rather than replaces: your custom render is passed to the inner Ariakit component, which is itself rendered inside the Dldc wrapper.
