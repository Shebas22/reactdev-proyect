// Barra de navegación
import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ background }) => {
  //Ruta de la imagen
  const logo = '../src/assets/img/logo.png';

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
              <Link to="/" style={{ textDecoration: "none" }}>
                Inicio
              </Link>
            </li>
            <li className="products-item">
              <Link to="/productos" style={{ textDecoration: "none" }}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/contacto" style={{ textDecoration: "none" }}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;