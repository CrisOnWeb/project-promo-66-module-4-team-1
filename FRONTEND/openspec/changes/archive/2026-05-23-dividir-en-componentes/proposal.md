## Why

The current implementation in `App.jsx` is a monolithic component that handles all markup and logic. This approach hinders maintainability, readability, and makes it difficult to reuse code or scale the application. Refactoring into a modular component architecture is essential for better organization and future growth.

## What Changes

- **Component Extraction**: Move logical sections of the UI into dedicated React components.
- **Header & Footer**: Extract global layout components to `src/components/`.
- **CreatePage**: Create a main page component to wrap the form and preview.
- **Preview & Card**: Separate the project preview section and the individual card rendering logic.
- **Form**: Extract the project creation form into its own component.
- **Atomic Components**: Create reusable `Button` and `Heading` components to maintain consistency across the app.

## Capabilities

### New Capabilities
- `component-architecture`: Establish a modular folder structure for React components and migrate existing monolithic code into these new components.

### Modified Capabilities
<!-- No requirement changes, only implementation refactoring. -->

## Impact

- `src/App.jsx`: Will be refactored to serve as the main router/orchestrator.
- New Directory: `src/components/` will house all new functional and atomic components.
- CSS/Sass: Styles might need to be split or imported specifically into components if we move towards CSS modules or component-specific styles (though we'll stick to the current Sass structure for now as per `GEMINI.md`).
