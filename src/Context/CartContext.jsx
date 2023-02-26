import React, { createContext, useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react'

export const CartContext = createContext();

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("GauchitoCarrito")) || [];
}

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const toast = useToast()
    const localCart = recuperarCarrito()
    
    useEffect(() => {
            setCarrito(localCart)
        }, []);
        
        
        const guardarCarrito = () => {
            localStorage.setItem("GauchitoCarrito", JSON.stringify(carrito));
        }
        
    useEffect(() => {
        console.log(carrito);
        guardarCarrito();
    }, [carrito]);

    const agregarProducto = (item, cantidad) => {
        if (isInCart(item.id)) {
            const itemCarrito = carrito.find((it) => it.id === item.id);
            // itemCarrito.cantidad = itemCarrito.cantidad + cantidad;
            itemCarrito.cantidad = cantidad
            setCarrito([...carrito]);
            toast({
                title: 'Loading',
                description: `🟡 Se actualizó ${item.nombre} del carrito`,
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        } else {
            item.cantidad = cantidad;
            setCarrito([...carrito, item]);
            toast({
                title: 'Loading',
                description: `🟢 Se agregó ${item.nombre} al carrito`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    };

    const cantidadProductos = () => {
        return carrito.reduce((totalQ, prod) => totalQ + prod.cantidad, 0);
    };

    const totalCarrito = () => {
        return carrito.reduce((totalP, prod) => totalP + prod.cantidad * prod.precio, 0);
    };

    const isInCart = (id) => {
        return carrito.some((prod) => prod.id === id);
    };

    const quitarProducto = (item) => {
        const cart = carrito.filter((it) => it.id !== item.id);
        setCarrito(cart);
        toast({
            title: 'Loading',
            description: `🔴 Se quitó ${item.nombre} del carrito`,
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        toast({
            title: 'Loading',
            description: `🔵 Vaciando carrito`,
            status: 'info',
            duration: 2000,
            isClosable: true,
        })
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                totalCarrito,
                cantidadProductos,
                agregarProducto,
                vaciarCarrito,
                quitarProducto,
            }}>
            {children}
        </CartContext.Provider>
    );
};