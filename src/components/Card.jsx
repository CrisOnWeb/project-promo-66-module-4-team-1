function Card({ data }) {
  const {
    name = 'Elegant Workspace',
    slogan = 'Diseños Exclusivos',
    technologies = 'React JS - HTML - CSS',
    repo = '#',
    demo = '#',
    desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione',
    autor = 'Emmelie Bjôrklund',
    job = 'Full stack Developer',
    photo = '',
  } = data;

  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{ backgroundImage: photo ? `url(${photo})` : '' }}
        ></div>
        <p className="card__job">{job}</p>
        <h3 className="card__name">{autor}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{name}</h3>
        <p className="card__slogan">{slogan}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">{desc}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">{technologies}</p>

          <a
            className="icon icon__www"
            href={demo}
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={repo}
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
