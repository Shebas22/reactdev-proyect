import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text } from "@chakra-ui/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MdOutlineAddShoppingCart, MdOutlineArrowBack, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import CardsProducts from "./CardsProducts";
import { CartContext } from "../Context/CartContext";

const ItemDetailContainer = function ({ productos}) {
    let navegate = useNavigate();
    const { id } = useParams();
    const item = productos.find((item) => item.id == id);

    return (
        <>
            <Container centerContent padding={10} >
                <Button variant='ghost' colorScheme='blue' onClick={() => navegate(-1)}>
                    <MdOutlineArrowBack size={30} />
                    {"Volver"}
                </Button>
                <CardsProducts producto={item} />
            </Container>
        </>
    );
};

export default ItemDetailContainer;