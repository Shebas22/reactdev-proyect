// App
import { Button, Container, Flex, Input, Tag, Stack, ButtonGroup, IconButton, Toast, useToast } from '@chakra-ui/react'
import './components/styles/App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import { useEffect, useState, useContext } from 'react'
import axios from "axios";
import products from "../bbdd.json"
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer';
// import { createContext } from 'react';
import Spinner from './components/Spinner';
import Home from './components/Home';
import { db } from "../db/firebase-config";
import { collection, getDocs, } from "firebase/firestore";
// import { CartContext } from './Context/CartContext.jsx'


const urlBbDd = "./src/bbdd.json";

function App() {
  const productsCollectionRef = collection(db, "products")
  const [inputText, setInputText] = useState("");
  const [productos, setProductos] = useState([]);
  // const {carrito, setCarrito} = useContext(CartContext);
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    getProductos();
  }, [inputText])

  const getProductos = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    setLoading(false)
    const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setProductos(filtrar(docs, inputText.toLowerCase()))
  };

  // Filtrar productos
  const filtrar = (array, valor) => {
    let resultado = [];
    array.filter(producto => {
      if (JSON.stringify(producto.nombre).includes(valor)) {
        resultado.push(producto);
      }
    });
    return (valor) ? resultado : array;
  };

  return (
    <><div className='body'>
        <NavBar background={'transparent'}/>
        <Container maxW='1024px' padding={10} >
          {loading ? (<Spinner />) :
            <ul>
              <Routes>
                {/* <ProductContext.Provider value={productos}> */}
                <Route
                  path="/"
                  element={<><Home /></>} />

                <Route path="/productos" element={<><ItemListContainer productos={productos} setInputText={setInputText}
                  setProductos={setProductos} inputText={inputText} 
                  /></>} />

                <Route path="/category/:categoryid" element={<><ItemListContainer productos={productos} greeting="" setInputText={setInputText} setProductos={setProductos} inputText={inputText} /></>} />

                <Route path="/contacto" element={<p>Página contacto en construcción 👷‍♂️</p>} />

                <Route path="/item/:id" element={<ItemDetailContainer productos={productos} 
                />} />
                {/* </ProductContext.Provider> */}

                <Route path="/cart" element={<ItemCartContainer greeting="Carrito" w='100%' />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ul>

          }
        </Container>
      <Footer background={'transparent'}></Footer>
    </div>
    </>
  );
}

export default App