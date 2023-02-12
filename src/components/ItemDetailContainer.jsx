import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text } from "@chakra-ui/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MdOutlineAddShoppingCart, MdOutlineArrowBack, MdOutlineRemoveShoppingCart } from 'react-icons/md';

const ItemDetailContainer = function ({ productos }) {
    let navegate = useNavigate();
    const { name } = useParams();
    const item = productos.find((item) => item.nombre == name);

    return (
        <>
            <Container centerContent padding={10} >
                <Button variant='ghost' colorScheme='blue' onClick={() => navegate(-1)}>
                    <MdOutlineArrowBack size={30} />
                    {"Voler"}
                </Button>
                <Card maxW='sm' mt={'5'}>
                    <CardBody>
                        <Image
                            src={`../${item.imagen}`}
                            alt={item.nombre}
                            borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.nombre.toUpperCase()}</Heading>
                            <Text>
                                {`Por ${item.frac}`}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {`$${item.precio}`}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <NumberInput defaultValue={1} min={0} max={item.stock}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Button variant='ghost' colorScheme='blue' >
                                <MdOutlineAddShoppingCart size={30} color={'green'} />
                            </Button>
                            <Button variant='ghost' colorScheme='blue' >
                                <MdOutlineRemoveShoppingCart size={30} color={'red'} />
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
};

export default ItemDetailContainer;