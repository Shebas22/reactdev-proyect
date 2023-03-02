import React, { createContext, useContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase-config";
import { CartContext } from "./CartContext";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const { carrito, totalCarrito } = useContext(CartContext)
    const ordersCollectionRef = collection(db, "orders")
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        getOrders();
    }, [id])

    const getOrders = async () => {
        const querySnapshot = await getDocs(ordersCollectionRef);
        const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // debugger
        docs.sort(function (a, b) {
            if (a.date > b.date) {
                return 1;
            }
            if (a.date < b.date) {
                return -1;
            }
            return 0;
        });
        setOrders(docs)
    };

    const generarCompra = (user) => {
        let order = {
            usuario: {
                nombre: user.name,
                telefono: user.phone,
                email: user.email,
            },
            productos: carrito,
            total: totalCarrito(),
            fecha: new Date().toISOString().replace("T", " | ").slice(0, -5),
            // fecha: new Date().toUTCString(),
        };
        addDoc(ordersCollectionRef, order)
            .then(({ id }) => setId(id))
            .finally(() => {
            });
        return id
    };


    return (
        <OrdersContext.Provider
            value={{
                orders,
                generarCompra,
                id,
                setId
            }}>
            {children}
        </OrdersContext.Provider>
    );

};

