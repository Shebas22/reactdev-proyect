import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Table, TableCaption, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { ItemCart } from './ItemCart';

export const ItemOrder = ({ order }) => {

    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                            {`${order.usuario.nombre} - ${order.usuario.email}`}
                            <br />
                            {order.fecha}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    <TableContainer>
                        <Table variant='striped' colorScheme='gray'>
                            <TableCaption>{`ID:  ${order.id}`}</TableCaption>
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
                                {order.productos.map((producto) => {
                                    return <ItemCart producto={producto} key={producto.id} botton={false} />
                                })
                                }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Total de la compra</Th>
                                    <Th>{`$ ${order.total}`}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

