// Generar CartWidget
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.css';
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../App'

const CartWidget = ({}) => {
const carrito = useContext(CartContext);
const [itemsTotal, setItemsTotal] = useState(0)

useEffect(() => {
  setItemsTotal(0)
  carrito?carrito.map((item) =>{setItemsTotal(itemsTotal+item.cantidad)}):null
}, [carrito])


  return (
    <div className="cart-widget">
      <NavLink to="/cart" className={({ isActive }) => isActive ? "activeLink" : undefined}>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <div className={"qty-display"}>{itemsTotal}</div>
      </NavLink>
    </div>
  );
};

export default CartWidget;
