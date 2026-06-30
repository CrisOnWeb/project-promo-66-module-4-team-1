## Context

The landing page displays a gallery of project cards retrieved from `localStorage`. These cards currently provide links to the project's demo and repository but do not link back to the generated project card hosted by the Adalab API. The user wants to enhance this by making the cards interactive, fetching the latest data from the API upon clicking, and opening the project card's URL in a new tab.

## Goals / Non-Goals

**Goals:**
- Make project cards on the landing page clickable.
- Fetch project details from the API using the stored project ID/URL.
- Open the project's hosted card URL in a new browser tab.
- Provide feedback (loading/error) during the fetch process.

**Non-Goals:**
- Modifying the project creation flow.
- Changing the visual design of the cards (unless necessary for interactivity).
- Persistent storage of the fetched data beyond the current action.

## Decisions

### 1. Centralized Click Handling in LandingPage
The `LandingPage` component will manage the click logic for all cards in the list. This avoids passing complex logic into the `Card` component and keeps the state management (loading, error) local to the view.

**Rationale:** Simplifies the `Card` component and makes the landing page logic easier to test and maintain.

### 2. Fetch-Before-Open Workflow
Upon clicking a card, the application will perform a GET request to the API using the project ID. This ensures the project still exists and retrieves the most up-to-date hosted URL if it has changed.

**Rationale:** Directly follows the user requirement to "fetch to the api".

### 3. API Service Extension
The `src/services/api.js` already has `getProjectById`. We will ensure this method is correctly used. If the `localStorage` only stores the full URL, we will extract the ID or add a generic `fetchFromUrl` method.

### 4. Visual Feedback
A loading indicator will be shown on the landing page while the fetch is in progress to prevent multiple clicks and inform the user.

## Risks / Trade-offs

- **[Risk]** API is down or project was deleted. → **[Mitigation]** Implement error handling and show a user-friendly message (e.g., alert or toast).
- **[Risk]** Pop-up blockers might prevent `window.open` if not handled correctly within the click event. → **[Mitigation]** Ensure `window.open` is called immediately after the fetch is initiated or within the promise resolution that started from a user gesture. Note: async `window.open` can sometimes be blocked; if so, we might open the tab first and then set its location.
