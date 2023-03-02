import { Accordion } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { OrdersContext } from '../Context/OrdersContext'
import { ItemOrder } from './ItemOrder'

export const ItemOrdersList = () => {
    const { orders } = useContext(OrdersContext)

    return (
        <>
            <Accordion allowToggle>
                {orders.map((order) => {
                    return (<ItemOrder
                        order={order}
                        key={order.id}
                    />
                    )
                })
                }
            </Accordion>
        </>
    )
}


