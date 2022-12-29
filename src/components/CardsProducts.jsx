// Cards de productos
import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CardsProducts = ({image, title, price, fraction}) => {
  return (
    <Card maxW='sm' mt={'5'}>
  <CardBody>
    <Image  
      src={image}
      alt={title}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title.toUpperCase()}</Heading>
      <Text>
      {`Por ${fraction}`}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {`$${price}`}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="blue" />

      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default CardsProducts