## ADDED Requirements

### Requirement: Single Project Data Fetching
The system SHALL provide a way to fetch the complete data of a specific project card using its unique API URL.

#### Scenario: Successful project fetch
- **WHEN** a valid project card API URL is provided to the fetch service
- **THEN** the system SHALL return the project's details including name, slogan, author, and preview links.

#### Scenario: Project fetch failure
- **WHEN** an invalid or non-existent project card API URL is provided
- **THEN** the system SHALL handle the error gracefully and notify the user that the project could not be retrieved.
