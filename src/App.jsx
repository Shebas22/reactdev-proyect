// App
import { Button, Container, Flex, Input, Tag, Stack, ButtonGroup, IconButton, Toast, useToast } from '@chakra-ui/react'
import './components/styles/App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import { useEffect, useState } from 'react'
import axios from "axios";
import products from "../bbdd.json"
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer';
import { createContext } from 'react';
import Spinner from './components/Spinner';
import Home from './components/Home';

const urlBbDd = "./src/bbdd.json";


function App() {
  const [inputText, setInputText] = useState("");
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    getProductos();
  }, [inputText])

  const getProductos = async () => {
    toast({
      title: 'Loading',
      description: "Cargando productos desde la BBDD",
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
    await fetch("../bbdd.json")
      .then(resp => resp.json())
      .then(productos => {
        setTimeout(() => {
          setLoading(false)
          setProductos(filtrar(productos, inputText.toLowerCase()));
          // setCarrito(productos)
        }, 500);
      })
      .catch(err => console.log("Error al cargar la BBDD"))
    // .then(productos => setProductos(filtrar(productos, inputText.toLowerCase())))
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
      <CartContext.Provider value={carrito}>
        <NavBar background={'transparent'} carrito={productos} />
        <Container maxW='1024px' padding={10} >
          {loading ? (<Spinner />) :
            <ul>
              <Routes>
                <ProductContext.Provider value={productos}>
                  <Route
                    path="/"
                    element={<><Home /></>} />

                  <Route path="/productos" element={<><ItemListContainer productos={productos} greeting="Nuestros pruductos" setInputText={setInputText}
                    setProductos={setProductos} inputText={inputText} /></>} />

                  <Route path="/category/:categoryid" element={<><ItemListContainer productos={productos} greeting="" setInputText={setInputText} setProductos={setProductos} inputText={inputText} /></>} />

                  <Route path="/contacto" element={<p>Página contacto en construcción 👷‍♂️</p>} />

                  <Route path="/item/:name" element={<ItemDetailContainer productos={productos} />} />
                </ProductContext.Provider>

                {/* <Route path="/cart" element={<ItemCartContainer productos={carrito} greeting="Carrito" />} /> */}
                <Route path="/cart" element={<ItemCartContainer productos={productos} greeting="Carrito" w='100%' />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ul>

          }
        </Container>
      </CartContext.Provider>
      <Footer background={'transparent'}></Footer>
    </div>
    </>
  );
}

export default App
export const ProductContext = createContext();
export const CartContext = createContext();