import Preview from './Preview';
import Form from './Form';

function CreatePage({ data, handleChange }) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>

      <Preview data={data} />
      <Form data={data} handleChange={handleChange} />
    </main>
  );
}

export default CreatePage;
