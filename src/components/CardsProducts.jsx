// Cards de productos
import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CardsProducts = ({ producto }) => {
  producto.cantidad = 1;

  return (
    <Card maxW='sm' mt={'5'}>
      <CardBody>
        <Link to={`/item/${producto.nombre}`}>
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
          <Button variant='solid' colorScheme='red' >
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue' >
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="blue" />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardsProducts