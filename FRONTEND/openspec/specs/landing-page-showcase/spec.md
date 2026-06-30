## Requirements

### Requirement: Showing the Landing Page
The system SHALL provide a Landing Page as the main entry point, showing a welcome (Hero) section and a list of existing projects.

#### Scenario: Landing Page Load
- **WHEN** the user visits the root URL of the application
- **THEN** the system SHALL show the Landing Page with a Hero section and a gallery of saved projects.

### Requirement: Project Gallery Visualization
The system SHALL display all projects stored in LocalStorage within a gallery section on the Landing Page.

#### Scenario: Gallery with projects
- **WHEN** there are projects saved in LocalStorage
- **THEN** the system SHALL show each project as a `Card` within the gallery.

#### Scenario: Gallery without projects
- **WHEN** there are no projects saved in LocalStorage
- **THEN** the system SHALL show a message indicating that no projects have been created yet.

### Requirement: Navigation to Project Creation
The system SHALL allow the user to navigate from the Landing Page to the Project Creation page.

#### Scenario: Click on "New Project"
- **WHEN** the user clicks the button to create a new project on the Landing Page
- **THEN** the system SHALL navigate to the Project Creation view.

### Requirement: Integration in the Component Architecture
The system SHALL integrate the `LandingPage` and `ProjectList` components into the existing component architecture.

#### Scenario: Verify architecture
- **WHEN** the component tree is inspected
- **THEN** `LandingPage` SHALL be a top-level component, and `ProjectList` SHALL be a child of `LandingPage` that reuses the `Card` component.

### Requirement: Interactive Project Cards on Landing Page
The system SHALL allow users to click on project cards displayed on the Landing Page to view the project details.

#### Scenario: User clicks on a project card
- **WHEN** the user clicks on a project card in the gallery
- **THEN** the system SHALL fetch the project details from the API using the stored URL and open the project preview in a new browser tab.

#### Scenario: Project card click without stored URL
- **WHEN** the user clicks on a project card that does not have a valid API URL stored in LocalStorage
- **THEN** the system SHALL show an error message or take no action.

