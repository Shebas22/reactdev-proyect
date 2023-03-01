import { Button, Image, Td, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { CartContext } from '../Context/CartContext';

export const ItemCart = ({ producto }) => {
    const { quitarProducto } = useContext(CartContext);

    return (
        <Tr key={`table${producto.id}`}>
            <Td><Image
                boxSize='35px'
                src={producto.imagen}
                alt={producto.nombre}
            /></Td>
            <Td>{producto.nombre}</Td>
            <Td isNumeric>{producto.cantidad}</Td>
            <Td isNumeric>{`$ ${producto.cantidad * producto.precio}`}</Td>
            <Td >
                <Button variant='ghost' colorScheme='red' >
                    <MdOutlineRemoveShoppingCart size={30} onClick={() => { quitarProducto(producto) }} />
                </Button></Td>
        </Tr>
    )
}
