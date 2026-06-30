import Card from './Card';

function ProjectList({ projects, onCardClick }) {
  if (projects.length === 0) {
    return (
      <section className="project-list project-list--empty">
        <p className="project-list__message">Aún no has creado ningún proyecto. ¡Anímate y empieza ahora!</p>
      </section>
    );
  }

  return (
    <section className="project-list">
      <ul className="project-list__items">
        {projects.map((project) => (
          <li key={project.id} className="project-list__item">
            <Card 
              data={project} 
              onClick={() => onCardClick && onCardClick(project)} 
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
