import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { CartContext } from '../Context/CartContext';



const Item = ({ producto }) => {
  const { agregarProducto, quitarProducto } = useContext(CartContext);
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
          <Button variant='ghost' colorScheme='red' >
            <MdOutlineRemoveShoppingCart size={30} onClick={()=>{quitarProducto(producto)}}/>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item
