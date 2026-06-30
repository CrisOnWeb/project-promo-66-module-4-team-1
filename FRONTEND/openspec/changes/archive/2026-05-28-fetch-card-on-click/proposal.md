## Why

Currently, the project cards displayed on the landing page are static and do not allow users to view the full project details or the generated card. This change enables interactivity on the landing page by allowing users to click on a card to fetch its data and view the project in a new tab, improving the user experience and showcasing the projects effectively.

## What Changes

- Add interactivity to the project cards in the `LandingPage` component.
- Implement a click handler that retrieves the project's API URL from `localStorage`.
- Perform a fetch request to the API to get the project details.
- Open the project preview URL (returned by the API or the stored link) in a new browser tab.

## Capabilities

### New Capabilities
- `fetch-project-details`: Implementation of a service to fetch detailed project information from the API using a specific card URL.

### Modified Capabilities
- `landing-page-showcase`: Enhance the landing page cards to support click actions and dynamic data fetching.

## Impact

- `src/components/LandingPage.jsx`: Will need to handle card clicks.
- `src/components/ProjectList.jsx`: May need updates to pass click handlers or include links.
- `src/services/api.js`: Might need a new method to fetch a single project by its URL.
- `localStorage`: Reliance on correctly stored project URLs.
