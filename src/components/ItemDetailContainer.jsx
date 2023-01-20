import { Card, CardBody, CardFooter, Divider, Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = function ({ productos }) {
    const { name } = useParams();
    const item = productos.find((item) => item.nombre == name);

    return (
        <><Card maxW='sm' mt={'5'}>
            <CardBody>
                <Image
                    src={`../${item.imagen}`}
                    alt={item.nombre}
                    borderRadius='lg' />
            </CardBody>
            <Divider />
            <CardFooter>
                <li style={{ listStyleType: "none" }}>
                    <strong>{item.nombre}</strong>
                    <small>- {`por ${item.frac}`}</small>
                    <em> $ {item.precio}</em>
                </li>
            </CardFooter>
        </Card>
        </>
    );
};

export default ItemDetailContainer;