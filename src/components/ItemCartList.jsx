import { Button, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import FormikCheckout from './FormikCheckout';
import { ItemCart } from './ItemCart';
import ShopDetail from './ShopDetail';

export const ItemCartList = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext);

    return (
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                    <TableCaption></TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Imagen</Th>
                            <Th>Nombre</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>Precio</Th>
                            <Th ></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {carrito.map((producto) => {
                            return <ItemCart producto={producto} key={producto.id} botton={true} />
                        })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <ShopDetail />
            <Button variant='solid' colorScheme='teal' m={10} onClick={() => { vaciarCarrito() }}>
                Vaciar carrito
            </Button>
            <FormikCheckout />
        </>
    )
}
