import { Box, Button, Heading, Image, SimpleGrid, StackDivider, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import ShopDetail from './ShopDetail'


const ItemCartContainer = ({ carrito, greeting }) => {
    return (
        <>
            {carrito.length > 0 ? <><TableContainer>
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
                            return <Tr key={`table${producto.id}`}>
                                <Td><Image
                                    boxSize='35px'
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                /></Td>
                                <Td>{producto.nombre}</Td>
                                <Td isNumeric>{producto.cantidad}</Td>
                                <Td isNumeric>{`$ ${producto.cantidad * producto.precio}`}</Td>
                                <Td >
                                    <Button variant='ghost' colorScheme='blue' >
                                        <MdOutlineRemoveShoppingCart size={30} />
                                    </Button></Td>
                            </Tr>
                        })
                        }
                    </Tbody>
                    {/* <Tfoot>
                        <Tr>
                        <Th>Imagen</Th>
                            <Th>Nombre</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>Precio</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
                <ShopDetail carrito={carrito} />
                <Button variant='solid' colorScheme='teal' >
                    Finalizar compra
                </Button>

            </> :
                <p>Carrito se encuentra vacio</p>

            }
        </>
    )
}

export default ItemCartContainer