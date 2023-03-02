import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { OrdersContext } from '../Context/OrdersContext'

export const ConfirmOrder = ({ props, vError, setVError }) => {
    const { vaciarCarrito } = useContext(CartContext)
    const { generarCompra, id, setId } = useContext(OrdersContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    useEffect(() => {
    }, [])


    return (
        <>
            <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
                onClick={vError ? null : () => {
                    generarCompra(props.values)
                    onOpen()
                }}
            >
                Finalizar compra
            </Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Fantástico
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Compra confirmada, muchas gracias por elegirnos!
                            <br />
                            {`ID de compra: ${id}`}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='teal' onClick={() => {
                                setId("")
                                vaciarCarrito()
                                onClose()
                            }} ml={3}>
                                Genial
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

