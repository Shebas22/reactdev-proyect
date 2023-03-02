import { Button, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { OrdersContext } from '../Context/OrdersContext';
import { ItemOrdersList } from './ItemOrdersList';
import Spinner from './Spinner';

const ItemOrdersContainer = ({ greeting }) => {
    let navegate = useNavigate();
    const { orders } = useContext(OrdersContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [orders])


    return (
        <>
            {loading
                ? <Spinner />
                : orders.length
                    ? <>
                        <ItemOrdersList />
                        <Button variant='ghost' colorScheme='blue' m={10} onClick={() => navegate("/cart")}>
                            <MdOutlineArrowBack size={30} />
                            {"Volver al carrito"}
                        </Button>
                    </>
                    : <>
                        <Text m='50'>No hay ordenes previas 🥱</Text>
                    </>
            }
        </>
    )
}

export default ItemOrdersContainer