import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'

const ShopDetail = ({}) => {
  const [totalProductos, setTotalProductos] = useState(0)
  const [totalCarrito, setTotalCarrito] = useState(0)
const carrito = useContext(CartContext);


  useEffect(() => {
    setTotalProductos(0)
    setTotalCarrito(0)
    carrito.map((item) =>{
      setTotalProductos(totalProductos+1)
      setTotalCarrito(totalCarrito+(item.cantidad * item.precio))
})
  }, [])

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
              <Td isNumeric>{totalProductos}</Td>
              <Td isNumeric>{totalCarrito}</Td>
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