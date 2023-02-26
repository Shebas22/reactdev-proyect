// Cards de productos
import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text, useToast } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { CartContext } from '../Context/CartContext';



const CardsProducts = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [value, setValue] = useState(1)

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
            <MdOutlineAddShoppingCart size={30} onClick={()=>{agregarProducto(producto, parseInt(value,10))}} />
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
