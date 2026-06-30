import Button from './Button';
import Heading from './Heading';
import useFileReader from '../hooks/useFileReader';

function Form({ data, handleChange, updateData, handleSave }) {
  const { handleFile: handleProjectImage, error: projectImageError } =
    useFileReader((base64) => updateData('image', base64));
  const { handleFile: handleAuthorPhoto, error: authorPhotoError } =
    useFileReader((base64) => updateData('photo', base64));

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleSave();
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <Heading className="title">Información</Heading>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={data.name}
          onChange={handleChange}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={data.slogan}
          onChange={handleChange}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            value={data.repo}
            onChange={handleChange}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            value={data.demo}
            onChange={handleChange}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={data.technologies}
          onChange={handleChange}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          value={data.desc}
          onChange={handleChange}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={data.autor}
          onChange={handleChange}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          value={data.job}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label className="button">
          Subir foto del proyecto
          <input
            className="addForm__hidden"
            type="file"
            name="image"
            onChange={handleProjectImage}
          />
        </label>
        <label className="button">
          Subir foto de la autora
          <input
            className="addForm__hidden"
            type="file"
            name="photo"
            onChange={handleAuthorPhoto}
          />
        </label>
        {(projectImageError || authorPhotoError) && (
          <p className="addForm__error">
            {projectImageError || authorPhotoError}
          </p>
        )}
        <Button className="button--large">Guardar proyecto</Button>
      </fieldset>
    </form>
  );
}

export default Form;
