import Card from './Card';

function Preview({ data }) {
  const { image = '' } = data;
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{ backgroundImage: image ? `url(${image})` : '' }}
      ></div>
      <Card data={data} />
    </section>
  );
}

export default Preview;
