import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase-config";
import { LoaderContext } from "./LoaderContext";

export const CatalogueContext = createContext();

export const CatalogueProvider = ({ children }) => {
    const { loading , setLoading } = useContext(LoaderContext);
    const productsCollectionRef = collection(db, "products")
    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        getProductos();
    }, [])

    const getProductos = async () => {
        console.log(loading);
        const querySnapshot = await getDocs(productsCollectionRef);
        const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        docs.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
        setCatalogo(docs)
        setLoading(false)
        console.log(loading);
    };

    return (
        <CatalogueContext.Provider
            value={{
                catalogo
            }}>
            {children}
        </CatalogueContext.Provider>
    );
};