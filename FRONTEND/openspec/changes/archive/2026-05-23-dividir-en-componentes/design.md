## Context

The project is a React-based web application for creating and previewing project cards. Currently, all UI logic and markup are contained within a single `App.jsx` file. The application uses Sass for styling and is built with Vite.

## Goals / Non-Goals

**Goals:**
- Extract `Header`, `Footer`, `CreatePage`, `Preview`, `Card`, `Form`, `Button`, and `Heading` into dedicated components.
- Maintain existing functionality (state management, live preview).
- Organize the codebase by creating a `src/components/` directory.
- Improve component reusability and testability.

**Non-Goals:**
- Implementing a full state management library (Redux, Context API) - we will stick to prop drilling for now as the tree is shallow.
- Refactoring the entire Sass architecture into CSS Modules or styled-components.
- Changing the visual design or adding new features.

## Decisions

### 1. Component Hierarchy and State Management
**Decision**: Keep state in `App.jsx` and pass it down as props to children components.
**Rationale**: The application is small, and the state needs to be shared between the `Form` and the `Preview`. `App.jsx` acts as the single source of truth.
**Alternatives**: Using React Context API was considered but deemed overkill for this initial refactor.

### 2. Component Directory Structure
**Decision**: Create a flat or minimally nested structure in `src/components/`.
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/Form.jsx`
- `src/components/Preview.jsx`
- `src/components/Card.jsx`
- `src/components/Button.jsx`
- `src/components/Heading.jsx`
- `src/components/CreatePage.jsx`
**Rationale**: Keeps the project simple and easy to navigate.

### 3. Prop Naming Conventions
**Decision**: Use descriptive and consistent prop names that match the state object keys (e.g., `name`, `slogan`, `technologies`).
**Rationale**: Reduces cognitive load and makes data flow easier to trace.

## Risks / Trade-offs

- **[Risk] Prop Drilling** → [Mitigation] The component tree is only 2-3 levels deep (App -> CreatePage -> Form/Preview -> Card). If it grows, we will move to Context API in a future refactor.
- **[Risk] Styling Breakage** → [Mitigation] Ensure that the existing class names in `App.scss` are correctly applied in the new components. We will not change the CSS classes during this refactor.
