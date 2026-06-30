function Card({ data, onClick }) {
  const { name, slogan, technologies, repo, demo, desc, autor, job, photo } =
    data;

  const handleClick = (ev) => {
    // Evitar que el clic en los enlaces de demo/repo dispare el clic de la tarjeta
    if (ev.target.tagName === 'A' || ev.target.closest('a')) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <article 
      className={`card ${onClick ? 'card--interactive' : ''}`} 
      onClick={handleClick}
    >
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Tarjeta del proyecto</span>
      </h2>

      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{ backgroundImage: photo ? `url(${photo})` : '' }}
        ></div>
        <p className="card__job">{job || 'Full stack Developer'}</p>
        <h3 className="card__name">{autor || 'Emmelie Bjôrklund'}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{name || 'Elegant Workspace'}</h3>
        <p className="card__slogan">{slogan || 'Diseños Exclusivos'}</p>
        {/* <h3 className="card__descriptionTitle">Product description</h3> */}
        <p className="card__description">
          {desc ||
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {technologies || 'React JS - HTML - CSS'}
          </p>

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
