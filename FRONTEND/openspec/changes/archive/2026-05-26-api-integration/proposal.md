## Why

The application currently lacks persistence beyond simple local storage and doesn't support card sharing via a unique URL. Integrating with the Adalab API will allow users to officially create project cards, receive a permanent URL for sharing, and ensure their work is saved with a unique identifier.

## What Changes

- **New API Service**: A dedicated service (`src/services/api.js`) to handle communication with the Adalab project API.
- **Card Creation Integration**: Update the "Crear Tarjeta" functionality to send data to the API and handle the response.
- **Enhanced Local Storage**: Update local storage logic to include the API-returned `id` and `url` after a successful POST request.
- **Project Detail Fetching**: Implement a function to retrieve project details by ID for future detail page implementation.

## Capabilities

### New Capabilities
- `api-integration`: Handles all asynchronous communication with the external Adalab API for project creation and retrieval.

### Modified Capabilities
- `component-architecture`: The flow of data between the form, local storage, and the final project card creation will be updated to include API interaction.

## Impact

- **Services**: New `src/services/api.js` file.
- **Components**: `src/components/CreatePage.jsx` (or wherever the submit handler lives) will be updated to use the new service.
- **Persistence**: `src/services/localStorage.js` will handle the new `id` field.
- **UX**: Users will now see a link to their created card after submission.
