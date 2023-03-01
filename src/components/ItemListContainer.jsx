// Lista de productos
import { useState, useEffect, useContext } from 'react'
import { SimpleGrid, Heading, Button, Menu, MenuButton, MenuList, MenuItem, Container, Text, Flex, Center, Spacer, } from "@chakra-ui/react";
import { Link, useParams } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Filter from './Filter';
import { CatalogueContext } from '../Context/CatalogueContext';
import ItemList from './ItemList';
import Spinner from './Spinner';

function ItemListContainer({ greeting }) {
  const { catalogo } = useContext(CatalogueContext)
  const { categoryid } = useParams();
  const categorias = ['todas', 'fruta', 'verdura'];
  const [selectedCategory, setselectedCategory] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setcategoryProducts(categoryid
      ? filtrar(catalogo.filter((producto) => producto.categoria == categoryid)
        , inputText.toLowerCase())
      : filtrar(catalogo, inputText.toLowerCase())
    )
    setLoading(false)
  }, [catalogo, selectedCategory, inputText])

  // Filtrar productos
  const filtrar = (array, valor) => {
    let resultado = [];
    array.filter(producto => {
      if (JSON.stringify(producto.nombre).includes(valor)) {
        resultado.push(producto);
      }
    });
    return resultado;
  };


  return (
    <>
      <Container centerContent padding={10} >
        <Text>Nuestros Productos</Text>
        <Spacer padding={5} />
        <Flex >
          <Center w='100%' >
            <Filter setInputText={setInputText} />
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
          {loading
            ? <>
              <Container centerContent padding={10} >
                <Spinner />
              </Container>
            </>
            : categoryProducts.length > 0
              ? <ItemList productos={categoryProducts} />
              : (inputText == "" && catalogo.length > 0)
                ? <ItemList productos={catalogo} />
                : <Text>No se encontraron productos</Text>
            // <p>No se encontraron productos</p>
          }
        </SimpleGrid>
      </Container>
    </>
  );
}

export default ItemListContainer;
