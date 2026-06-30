## 1. Prepare Components for Interactivity

- [x] 1.1 Update `src/components/Card.jsx` to support an `onClick` prop and add a visual indicator (like a cursor pointer) for clickability.
- [x] 1.2 Update `src/components/ProjectList.jsx` to accept an `onCardClick` prop and pass it to each `Card` component.

## 2. Implement Fetch and Open Logic

- [x] 2.1 Add a loading state to `src/components/LandingPage.jsx` to manage the fetch process.
- [x] 2.2 Implement the `handleCardClick` function in `LandingPage.jsx` that extracts the project ID and calls `api.getProjectById`.
- [x] 2.3 Integrate `window.open` within the success callback of the API fetch to open the project's `cardURL` in a new tab.
- [x] 2.4 Add error handling to `handleCardClick` to show an alert or UI message if the project cannot be retrieved.

## 3. Verification and Polish

- [x] 3.1 Verify that clicking a card triggers the fetch and opens the new tab.
- [x] 3.2 Verify that the loading state correctly prevents multiple clicks.
- [x] 3.3 Test the error scenario by manually passing a non-existent ID to ensure the error message is displayed.
