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
import { db } from "../db/firebase-config";
import { collection, getDocs, } from "firebase/firestore";

const urlBbDd = "./src/bbdd.json";

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
  const productsCollectionRef = collection(db, "products")
  const [inputText, setInputText] = useState("");
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
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

  // // Vacia carrito
  // vaciarCarrito() {
  //   carrito.length = 0;
  //   guardarCarrito();
  //   toast({
  //     title: 'Loading',
  //     description: "Vaciando carrito",
  //     status: 'info',
  //     duration: 2000,
  //     isClosable: true,
  //   })
  // }

  // // Agrega productos al carrito, si ya se encuentra modifica la cantidad del mismo
  // agregarProducto(producto) {
  //   let index = carrito.findIndex(valor => valor.id === producto.id);
  //   if (index < 0) {
  //     carrito.push(producto);
  //     toast({
  //       title: 'Loading',
  //       description: `🟢 Se agregó ${producto.nombre} al carrito`,
  //       status: 'success',
  //       duration: 2000,
  //       isClosable: true,
  //     })
  //   } else {
  //     carrito[index].cantidad = producto.cantidad;
  //     toast({
  //       title: 'Loading',
  //       description: `🟡 Se actualizó ${producto.nombre} del carrito`,
  //       status: 'warning',
  //       duration: 2000,
  //       isClosable: true,
  //     })
  //   }
  //   guardarCarrito();
  // }

  // // Quita productos del carrito
  // quitarProducto(producto) {
  //   let index = carrito.findIndex(valor => valor.id === producto.id);
  //   if (index >= 0) {
  //     carrito.splice(index, 1);
  //     toast({
  //       title: 'Loading',
  //       description: `🟠 Se quitó ${producto.nombre} del carrito`,
  //       status: 'error',
  //       duration: 2000,
  //       isClosable: true,
  //     })
  //   }
  //   guardarCarrito();
  // }




  return (
    <><div className='body'>
      <CartContext.Provider value={[carrito, setCarrito]}>
        <NavBar background={'transparent'} carrito={carrito}/>
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
                  carrito={carrito}
                  setCarrito={setCarrito}/></>} />

                <Route path="/category/:categoryid" element={<><ItemListContainer productos={productos} greeting="" setInputText={setInputText} setProductos={setProductos} inputText={inputText} /></>} />

                <Route path="/contacto" element={<p>Página contacto en construcción 👷‍♂️</p>} />

                <Route path="/item/:id" element={<ItemDetailContainer productos={productos} 
                carrito={carrito}
                setCarrito={setCarrito}/>} />
                {/* </ProductContext.Provider> */}

                <Route path="/cart" element={<ItemCartContainer carrito={carrito} greeting="Carrito" w='100%' />} />

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