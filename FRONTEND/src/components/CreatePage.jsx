import Preview from './Preview';
import Form from './Form';

function CreatePage({ data, handleChange, updateData, handleSave, onNavigateToLanding }) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos Molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./" onClick={onNavigateToLanding}>
          Ver proyectos
        </a>
      </section>

      <Preview data={data} />
      <Form
        data={data}
        handleChange={handleChange}
        updateData={updateData}
        handleSave={handleSave}
      />
    </main>
  );
}

export default CreatePage;
