import { Button, Container } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBack } from 'react-icons/md';
import { useContext } from "react";
import { CatalogueContext } from "../Context/CatalogueContext";
import Item from "./Item";


const ItemDetailContainer = function () {
    const { catalogo } = useContext(CatalogueContext)
    let navegate = useNavigate();
    const { id } = useParams();
    const item = catalogo.find((item) => item.id == id);

    return (
        <>
            <Container centerContent padding={10} >
                <Button variant='ghost' colorScheme='blue' onClick={() => navegate(-1)}>
                    <MdOutlineArrowBack size={30} />
                    {"Volver"}
                </Button>
                <Item producto={item} />
            </Container>
        </>
    );
};

export default ItemDetailContainer;