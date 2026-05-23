import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePage from './components/CreatePage';

function App() {
  const [data, setData] = useState({
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
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="container">
      <Header />
      <CreatePage data={data} handleChange={handleChange} />
      <Footer />
    </div>
  );
}

export default App;
