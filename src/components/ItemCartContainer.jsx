import { Button, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
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
            <Link to={`../orders`} key={"ordenes"}>
                {/* <Button variant='ghost' colorScheme='blue' onClick={() => navegate('/productos')}> */}
                <Button variant='ghost' colorScheme='blue' >
                    <MdOutlineArrowForward size={30} />
                    {"Historial de ordenes"}
                </Button>
            </Link>
            {loading
                ? <Spinner />
                : carrito.length
                    ? <>
                        <ItemCartList />
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