// Barra de navegación
import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = ({ background }) => {
  //Ruta de la imagen
  const logo ='./src/assets/img/logo.png';
 
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a>Inicio</a>
            </li>
            <li className="products-item">
              <a>
                Productos
              </a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;