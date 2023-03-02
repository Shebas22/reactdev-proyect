// Generar CartWidget
import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.css';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext.jsx'

const CartWidget = () => {
  const { carrito, cantidadProductos } = useContext(CartContext);
  const itemsInCart = cantidadProductos();

  useEffect(() => {
  }, [carrito])


  return (
    <div className="cart-widget">
      <NavLink to="/cart" className={({ isActive }) => isActive ? "activeLink" : undefined}>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <div className={"qty-display"}>{itemsInCart}</div>
      </NavLink>
    </div>
  );
};

export default CartWidget;
