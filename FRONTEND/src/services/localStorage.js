const KEY = 'coolProjects';
const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const get = () => {
  const localStorageData = localStorage.getItem(KEY);
  if (!localStorageData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(localStorageData);
    const { lastUpdated, projects } = parsedData;

    const isExpired = Date.now() - lastUpdated > EXPIRATION_TIME;

    if (isExpired) {
      localStorage.removeItem(KEY);
      return [];
    }

    return projects;
  } catch (error) {
    console.error('Error parsing localStorage data', error);
    return [];
  }
};

const save = (newProject) => {
  const projects = get();
  const updatedProjects = [...projects, newProject];

  const dataToSave = {
    lastUpdated: Date.now(),
    projects: updatedProjects,
  };

  localStorage.setItem(KEY, JSON.stringify(dataToSave));
};

const objectToExport = {
  get: get,
  save: save,
};

export default objectToExport;
