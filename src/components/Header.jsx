import AdalabIcon from '../assets/adalab.png';
import LaptopIcon from '../assets/laptop-code-solid.svg';

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={LaptopIcon}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src={AdalabIcon} alt="Logo Adalab" />
    </header>
  );
}

export default Header;
