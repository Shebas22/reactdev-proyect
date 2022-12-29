// App
import { Button, Container, Flex, Input, Tag, Stack, ButtonGroup, IconButton  } from '@chakra-ui/react'
import './components/styles/App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
  <>
    <NavBar background={'transparent'}></NavBar>
    <Container className='body'  centerContent padding={10} >
      <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
    </Container>
  </>
  );
}

export default App
