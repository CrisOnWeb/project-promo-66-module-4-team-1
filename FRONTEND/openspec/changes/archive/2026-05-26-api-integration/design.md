## Context

The current application manages project cards using React state and persists them in local storage. To enable sharing and official project registration, we need to integrate with the Adalab API. This involves moving from a synchronous "save-to-local" flow to an asynchronous "send-to-api-then-save" flow.

## Goals / Non-Goals

**Goals:**
- Implement `src/services/api.js` for Adalab API communication.
- Connect `App.jsx` save handler to the new API service.
- Ensure the `id` and `url` from the API are preserved in local storage.
- Prepare for future detail pages with a fetch-by-ID function.

**Non-Goals:**
- Implementing the actual detail page (only the service function).
- Changing the UI layout significantly (only adding the success link).
- Complex error handling for all edge cases (basic error notification is sufficient for now).

## Decisions

- **API Base URL**: `https://api-pw.dev.adalab.es/api/projectCard`.
- **Service Pattern**: Use a modular service approach in `src/services/api.js` similar to `localStorage.js`.
- **Asynchronous Flow**: `handleSave` in `App.jsx` will be converted to `async/await`.
- **LocalStorage Schema**: The project objects in `localStorage` will now optionally include `id` and `url`.

## Risks / Trade-offs

- **[Risk] API Downtime** → **[Mitigation]** Basic error message to the user if the fetch fails.
- **[Risk] Data mismatch** → **[Mitigation]** Ensure the project data keys exactly match the API requirements (name, slogan, technologies, repo, demo, desc, autor, job, image, photo).
