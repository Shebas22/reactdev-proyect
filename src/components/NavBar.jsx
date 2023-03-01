// Barra de navegación
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = ({ background }) => {
  const logo = 'https://i.imgur.com/obuyVRX.png';

  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>
        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                Inicio
              </NavLink>
            </li>
            <li className="products-item">
              <NavLink to="/productos" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* logo de la marca */}
        <div className="logo-container">
          <NavLink to="/" >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;