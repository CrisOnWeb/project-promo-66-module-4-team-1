## 1. Create API Service

- [x] 1.1 Create `src/services/api.js` file.
- [x] 1.2 Implement `createProject` function using `fetch` with POST method.
- [x] 1.3 Implement `getProjectById` function using `fetch` with GET method.
- [x] 1.4 Export the API service object.

## 2. Refactor App.jsx for API Integration

- [x] 2.1 Import `apiService` from `./services/api`.
- [x] 2.2 Convert `handleSave` to an `async` function.
- [x] 2.3 Add state for handling API response URL and potential errors.
- [x] 2.4 Update `handleSave` logic: call API first, extract `id` from `cardURL`, then save to local storage.
- [x] 2.5 Ensure the success message displays the URL link returned by the API.

## 3. Verification and Cleanup

- [x] 3.1 Verify that the card is successfully created and the URL is displayed.
- [x] 3.2 Check that local storage contains the new `id` and `url` fields.
- [x] 3.3 Ensure the form resets correctly after a successful save.
