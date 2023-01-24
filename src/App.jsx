// App
import { Button, Container, Flex, Input, Tag, Stack, ButtonGroup, IconButton } from '@chakra-ui/react'
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

const urlBbDd = "./src/bbdd.json";

function App() {
  const [inputText, setInputText] = useState("");
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getProductos();
  }, [inputText])

  const getProductos = () => {
    fetch("../bbdd.json")
    .then(resp =>resp.json())
    .then(productos =>setProductos(filtrar(productos, inputText.toLowerCase())))
  };

  //  Actualizar lista de productos evento onChange
  const handleChange = (event) => {
    getProductos();
  }

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
    <>
      <NavBar background={'transparent'}></NavBar>
      <Container className='body' centerContent padding={10} >
        <ul>
          <Routes>
            <Route
              path="/"
              element={<><Filter handleChange={handleChange}
                setInputText={setInputText}
                InputText={inputText}>
              </Filter>
                <ItemListContainer productos={productos} greeting="Bienvenido a nuestra tienda!" setInputText={setInputText}
                  setProductos={setProductos} /></>}
            />

            <Route path="/productos" element={<><Filter handleChange={handleChange}
              setInputText={setInputText}
              InputText={inputText}>
            </Filter><ItemListContainer productos={productos} greeting="Nuestros pruductos" setInputText={setInputText}
              setProductos={setProductos} /></>} />

            <Route path="/category/:categoryid" element={<><Filter handleChange={handleChange}
              setInputText={setInputText}
              InputText={inputText}
            >
            </Filter><ItemListContainer productos={productos} greeting="" setInputText={setInputText} setProductos={setProductos} /></>} />

            <Route path="/contacto" element={<p>Página contacto en construcción 👷‍♂️</p>} />

            <Route path="/item/:name" element={<ItemDetailContainer productos={productos} />} />


            <Route path="/cart" element={carrito.length ? <ItemListContainer productos={carrito} greeting="Carrito" /> : <p>Carrito vacio 😓</p>} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ul>

      </Container>
      <Footer background={'transparent'}></Footer>
    </>
  );
}

export default App
