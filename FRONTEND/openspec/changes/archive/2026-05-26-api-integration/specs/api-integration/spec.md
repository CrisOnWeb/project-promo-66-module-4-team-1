## ADDED Requirements

### Requirement: Send project data to API
The system SHALL provide a service to send the project card data to the Adalab API via a POST request.

#### Scenario: Successful card creation
- **WHEN** the user clicks "Crear Tarjeta" and all required fields are valid
- **THEN** the system SHALL send the data to `https://api-pw.dev.adalab.es/api/projectCard`
- **AND** the system SHALL receive a response containing the project `id` and `url`

### Requirement: Update persistence with API response
The system SHALL update the project information in local storage to include the `id` and `url` returned by the API after a successful creation.

#### Scenario: Saving project with API metadata
- **WHEN** the API returns a success response
- **THEN** the system SHALL save the project data along with its new `id` and `url` to local storage

### Requirement: Fetch project detail from API
The system SHALL provide a service to retrieve a specific project's details using its ID.

#### Scenario: Retrieve project by ID
- **WHEN** requested with a valid project ID
- **THEN** the system SHALL fetch the project details from the API

## MODIFIED Requirements

### Requirement: Component Architecture (Modified for API flow)
The communication between components for project creation SHALL now include an asynchronous API call before finalizing the save process.

#### Scenario: Complete project creation flow
- **WHEN** user submits the form
- **THEN** the system SHALL call the API
- **AND** if successful, the system SHALL save the result to local storage and reset the form
