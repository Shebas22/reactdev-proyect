import { Button, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import { ItemCartList } from './ItemCartList'
import Spinner from './Spinner';

const ItemCartContainer = ({ greeting }) => {
    let navegate = useNavigate();
    const { carrito, vaciarCarrito } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])


    return (
        <>
            {loading
                ? <Spinner />
                : carrito.length
                    ? <>
                        <ItemCartList />
                        <Button variant='solid' colorScheme='teal' m={10} onClick={() => { vaciarCarrito() }}>
                            Vaciar carrito
                        </Button>
                    </>
                    : <>
                        <Text m='50'>Carrito se encuentra vacio 🥱</Text>
                        <Button variant='ghost' colorScheme='blue' onClick={() => navegate('/productos')}>
                            <MdOutlineArrowBack size={30} />
                            {"Ir a la tienda"}
                        </Button>
                    </>
            }
        </>
    )
}

export default ItemCartContainer