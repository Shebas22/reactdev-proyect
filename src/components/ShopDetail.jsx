import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


const ShopDetail = ({ }) => {
  const { cantidadProductos, totalCarrito } = useContext(CartContext);
  const tProductos = cantidadProductos();
  const tCarrito = totalCarrito();

  return (
    <>
      <Table variant='striped' colorScheme='gray'>
        <TableCaption>Resumen de compra*</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>Cantidad de productos</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>{tProductos}</Td>
            <Td isNumeric>{`$ ${tCarrito}`}</Td>
          </Tr>
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
    </>
  )
}

export default ShopDetail