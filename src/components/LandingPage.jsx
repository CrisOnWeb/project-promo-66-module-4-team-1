import Heading from './Heading';
import Button from './Button';
import ProjectList from './ProjectList';

function LandingPage({ projects, onNavigateToCreate }) {
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

      <ProjectList projects={projects} />
    </main>
  );
}

export default LandingPage;
