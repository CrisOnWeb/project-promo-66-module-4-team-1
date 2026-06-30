import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePage from './components/CreatePage';
import LandingPage from './components/LandingPage';
import storage from './services/localStorage';
import api from './services/api';

const initialData = {
  name: '',
  slogan: '',
  repo: '',
  demo: '',
  technologies: '',
  desc: '',
  autor: '',
  job: '',
  image: '',
  photo: '',
};

function App() {
  const [data, setData] = useState(initialData);
  const [projects, setProjects] = useState(() => storage.get());
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [view, setView] = useState('landing');

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSave = async () => {
    setError(null);
    setApiResponse(null);

    const result = await api.createProject(data);

    if (result.success) {
      // La API devuelve cardURL (ej: https://.../projectCard/12345)
      // Extraemos el ID del final de la URL
      const urlParts = result.cardURL.split('/');
      const cardID = urlParts[urlParts.length - 1];

      const projectToSave = { ...data, id: cardID, url: result.cardURL };
      storage.save(projectToSave);
      setProjects(storage.get());
      setData(initialData);
      setApiResponse(result.cardURL);
      setTimeout(() => {
        setApiResponse(null);
      }, 10000);
    } else {
      setError(result.error || 'Hubo un error al crear la tarjeta');
    }
  };

  const handleNavigateToCreate = () => setView('create');
  const handleNavigateToLanding = (ev) => {
    if (ev) ev.preventDefault();
    setView('landing');
  };

  return (
    <div className="container">
      <Header onNavigate={handleNavigateToLanding} />
      {apiResponse && (
        <div className="success-message">
          <p>¡Proyecto guardado con éxito!</p>
          <a href={apiResponse} target="_blank" rel="noreferrer">
            Ver tarjeta de proyecto
          </a>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      
      {view === 'landing' ? (
        <LandingPage 
          projects={projects} 
          onNavigateToCreate={handleNavigateToCreate} 
        />
      ) : (
        <CreatePage
          data={data}
          handleChange={handleChange}
          updateData={updateData}
          handleSave={handleSave}
          onNavigateToLanding={handleNavigateToLanding}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
