// App
import { Container, Text } from '@chakra-ui/react'
import './components/styles/App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer';
import ItemOrdersContainer from './components/ItemOrdersContainer';
import Home from './components/Home';

function App() {

  return (
    <><div className='body'>
      <NavBar background={'transparent'} />
      <Container maxW='1024px' minH='560px' padding={10} >
        {
          // loading
          //   ? <Spinner />
          //   :
          <ul>
            <Routes>
              <Route
                path="/"
                element={<><Home /></>} />
              <Route path="/productos" element={<><ItemListContainer greeting="Productos" /></>} />
              <Route path="/category/:categoryid" element={<><ItemListContainer greeting="Categoría" /></>} />
              <Route path="/contacto" element={<Text m='50'>Página en construcción 👷‍♂️</Text>} />
              <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle de producto" />} />
              <Route path="/cart" element={<ItemCartContainer greeting="Carrito" w='100%' />} />
              <Route path="/orders" element={<ItemOrdersContainer greeting="Ordenes" w='100%' />} />
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