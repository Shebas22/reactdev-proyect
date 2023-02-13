// Cards de productos
import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text, useToast } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';

import CartContext from '../App'


const CardsProducts = ({ producto, carrito, setCarrito }) => {
  // const [carrito, setCarrito] = useState(useContext(CartContext));
  const toast = useToast()
  const [value, setValue] = useState(1)

  // Agrega productos al carrito, si ya se encuentra modifica la cantidad del mismo
  const agregarProducto = () => {
    let index = carrito.findIndex(valor => valor.id === producto.id);
    producto.cantidad = value
    if (index < 0) {
      setCarrito([...carrito, producto])
      toast({
        title: 'Loading',
        description: `🟢 Se agregó ${producto.nombre} al carrito`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } else {
      let aux = carrito;
      aux[index].cantidad = producto.cantidad
      setCarrito(aux)
      toast({
        title: 'Loading',
        description: `🟡 Se actualizó ${producto.nombre} del carrito`,
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
  }


  //   const createItem = async () =>{
  //     const item ={
  //         nombre: producto.nombre,
  //         imagen: producto.imagen,
  //         categoria: producto.categoria,
  //         precio: producto.precio,
  //         stock: producto.stock,
  //         frac: producto.frac
  //     };
  //     const itemCollectionRef = collection (db, "carrito");
  //     await addDoc(itemCollectionRef, item)
  //     const data = await getDocs(itemCollectionRef);
  //     // carrito.find((item) => item.id == id)
  //     // setCarrito(data.docs.map((doc) =>(({...doc.data(), id: doc.id}))));
  // }



  return (
    <Card maxW='sm' mt={'5'}>
      <CardBody>
        <Link to={`/item/${producto.id}`}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            borderRadius='lg'
          />
        </Link>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre.toUpperCase()}</Heading>
          <Text>
            {`Por ${producto.frac}`}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {`$${producto.precio}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <NumberInput defaultValue={1} min={1} max={producto.stock} onChange={(e) => setValue(e)} >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button variant='ghost' colorScheme='blue' >
            <MdOutlineAddShoppingCart size={30} onClick={agregarProducto} />
          </Button>
          {/* <Button variant='ghost' colorScheme='blue' >
            <MdOutlineRemoveShoppingCart size={30} />
          </Button> */}
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardsProducts

// ()=>{
//   producto.cantidad = value
//   setCarrito([...carrito, producto])}