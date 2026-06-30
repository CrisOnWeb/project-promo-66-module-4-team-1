import { useState } from 'react';
import Heading from './Heading';
import Button from './Button';
import ProjectList from './ProjectList';
import api from '../services/api';

function LandingPage({ projects, onNavigateToCreate }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCardClick = async (project) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      // Intentamos obtener el proyecto por su ID
      // El proyecto en localStorage tiene la propiedad 'id'
      const result = await api.getProjectById(project.id);

      if (result.success) {
        // La API de Adalab devuelve la URL en 'cardURL' al crear,
        // pero al obtener detalles podría ser diferente.
        // Si no viene una URL en el JSON (o no es JSON), usamos la que ya tenemos guardada.
        const cardURL = result.cardURL || project.url;
        
        if (cardURL) {
          window.open(cardURL, '_blank');
        } else {
          setError('No se pudo encontrar la URL de la tarjeta.');
        }
      } else {
        setError(result.error || 'No se pudo recuperar el proyecto de la API.');
      }
    } catch (err) {
      console.error('Error fetching project:', err);
      setError('Error de red al intentar recuperar el proyecto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="landing">
      <section className="hero">
        <Heading level={1} className="title hero__title">Proyectos Molones</Heading>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Button 
          className="button--link" 
          onClick={onNavigateToCreate}
          title="Haz click para empezar un nuevo proyecto"
        >
          Nuevo proyecto
        </Button>
      </section>

      {loading && <p className="loading-message">Cargando proyecto...</p>}
      {error && <p className="error-message">{error}</p>}

      <ProjectList projects={projects} onCardClick={handleCardClick} />
    </main>
  );
}

export default LandingPage;
