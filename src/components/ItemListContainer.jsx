// Lista de productos
import { useState, useEffect } from 'react'
import { SimpleGrid, Box, Heading, Input, ButtonGroup, Button, Grid, Select, Menu, MenuButton, MenuList, MenuItem, Container, Text, Flex, Center, Spacer, } from "@chakra-ui/react";
import CardsProducts from "./CardsProducts";
import { Await, Link, useParams } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Filter from './Filter';

function ItemListContainer({ productos, greeting, setCarrito, carrito, setInputText, setProductos, inputText }) {
  const { categoryid } = useParams();
  const categorias = ['todas', 'fruta', 'verdura'];
  const [selectedCategory, setselectedCategory] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState([]);

  useEffect(() => {
    setInputText("")
    setcategoryProducts(
      productos.filter((producto) => producto.categoria == categoryid)
    )
  }, [selectedCategory])

  return (
    <>
      <Container centerContent padding={10} >
        <Text>Nuestros Productos</Text>
        <Spacer padding={5} />
        <Flex >
          <Center w='100%' >

            <Filter setInputText={setInputText}
              InputText={inputText}>
            </Filter>
            <Spacer w='10' />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {categoryid || "Categorias"}
              </MenuButton>
              <MenuList>
                {categorias.map((category) => {
                  return <Link to={category == 'todas' ? `../productos` : `../category/${category}`} key={category}>
                    <MenuItem onClick={() => setselectedCategory(category)}>
                      {category}
                    </MenuItem>
                  </Link>
                })
                }
              </MenuList>
            </Menu>
          </Center>
        </Flex>

        <SimpleGrid minChildWidth="250px" spacing="20px" m="6">

          <Heading as="h1"
            color="blue.400"
            fontSize="2xl"
            fontWeight="bold"
            lineHeight="tall"
            letterSpacing="wide"
            textAlign="center"
          >
          </Heading>

          {categoryProducts.length > 0
            ?
            categoryProducts.map((producto) => {
              return (<CardsProducts
                producto={producto}
                key={producto.id}
                carrito={carrito}
                setCarrito={setCarrito}
              />)
            })
            :
            productos.length > 0 ? productos.map((producto) => {
              return (<CardsProducts
                producto={producto}
                key={producto.id}
                carrito={carrito}
                setCarrito={setCarrito}
              />)
            }) :
              <p>No se encontraron productos</p>
          }

        </SimpleGrid>
      </Container>
    </>
  );
}

export default ItemListContainer;
