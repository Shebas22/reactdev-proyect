// Lista de productos
import { useState, useEffect } from 'react'
import { SimpleGrid, Box, Heading, Input, ButtonGroup, Button, Grid, } from "@chakra-ui/react";
import CardsProducts from "./CardsProducts";
import { Link, useParams } from 'react-router-dom';

function ItemListContainer({ productos, greeting, setCarrito, carrito, setInputText, setProductos }) {
  const { categoryid } = useParams();
  const category = categoryid || '';
  const categorias = ['frutas', 'verduras'];

  useEffect(() => {
    setInputText("")
    // category?
    // setProductos(productos.filter((producto)=>producto.categoria == categoryid)):
    // setProductos(productos);
  }, [])

  return (
    <>

      <ButtonGroup spacing='2'>
        {categorias.map((category) => {
          return <Link to={`../category/${category}`} key={category}>
            <Button variant='solid' colorScheme='red' key={category}>
              {category}
            </Button>
          </Link>
        })
        }
      </ButtonGroup>

      <SimpleGrid minChildWidth="250px" spacing="20px" m="6">

        <Heading as="h1"
          color="blue.400"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="tall"
          letterSpacing="wide"
          textAlign="center"
        >
          {greeting}
        </Heading>

        {productos.map((producto) => {
          return <CardsProducts
            producto={producto}
            key={producto.codigo}
          />;
        })
        }

      </SimpleGrid>

    </>
  );
}

export default ItemListContainer;
