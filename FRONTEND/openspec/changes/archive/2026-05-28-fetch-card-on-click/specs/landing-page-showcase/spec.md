## ADDED Requirements

### Requirement: Interactive Project Cards on Landing Page
The system SHALL allow users to click on project cards displayed on the Landing Page to view the project details.

#### Scenario: User clicks on a project card
- **WHEN** the user clicks on a project card in the gallery
- **THEN** the system SHALL fetch the project details from the API using the stored URL and open the project preview in a new browser tab.

#### Scenario: Project card click without stored URL
- **WHEN** the user clicks on a project card that does not have a valid API URL stored in LocalStorage
- **THEN** the system SHALL show an error message or take no action.
