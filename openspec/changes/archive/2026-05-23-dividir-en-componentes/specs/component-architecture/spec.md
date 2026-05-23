## ADDED Requirements

### Requirement: Modular Component Architecture
The application SHALL be refactored into a modular architecture using React components. Each major section of the UI (Header, Footer, Form, Preview) MUST be its own functional component.

#### Scenario: Successful component structure
- **WHEN** the project is inspected
- **THEN** separate files for Header, Footer, CreatePage, Form, Preview, and Card exist in `src/components/`

### Requirement: Reusable UI Elements (Atomic Components)
The application SHALL utilize small, reusable components for common UI elements such as Buttons and Headings to ensure consistency.

#### Scenario: Button reuse
- **WHEN** a button is needed in different parts of the application (e.g., Form, Landing)
- **THEN** the same `Button` component is used with appropriate props

### Requirement: Feature Parity
The refactored component-based application SHALL maintain all existing functionality, including live preview, form validation (if any), and layout responsiveness as defined in the original `App.jsx`.

#### Scenario: Live Preview Functionality
- **WHEN** a user enters data into the `Form` component
- **THEN** the `Preview` component updates in real-time to reflect the changes
