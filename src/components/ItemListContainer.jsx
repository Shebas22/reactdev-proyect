// Lista de productos
import { useState } from 'react'
import products from "../../bbdd.json"
import { SimpleGrid, Box, Heading, Input,  } from "@chakra-ui/react";
import CardsProducts from "./CardsProducts";

function ItemListContainer({ greeting}) {
    const [productos, setProductos] = useState(products);
    const [value, setValue] = useState('')
//  Actualizar lista de productos evento onChange
    const handleChange = (event) => {
        debugger
        setProductos([]) 
            setValue(event.target.value.toLowerCase())
          setProductos(filtrar(products,value))
      }
// Filtrar productos
      const filtrar = (array,valor) => {
        let resultado = [];
        array.filter (producto => {
            if(JSON.stringify(producto.nombre+producto.categoria).includes(valor)){
                resultado.push(producto);
            }
        });
        return (valor)?resultado:products;
      };


    return (
    <>
      <Box textAlign="center">
        <Heading as="h1"
          color="blue.400"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="tall"
          letterSpacing="wide"
          textAlign="center"
        >
          {greeting}

          <Input placeholder="Filtrar productos..." 
            color={'black'}
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            onChange={handleChange}/>
        </Heading>
      </Box>
      <SimpleGrid minChildWidth="250px" spacing="20px" m="6">
      {productos.map((producto) => {
        return <CardsProducts
        key={producto.codigo}
        title={producto.nombre}
        price={producto.precio}
        image={producto.imagen}
        fraction={producto.frac} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default ItemListContainer;
