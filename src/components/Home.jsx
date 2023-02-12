import { Container, Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    return (
        <Container centerContent>
            <Image src={`../src/assets/img/shop.svg`}
                alt={"imagen de inicio"}
                borderRadius='lg' ></Image>
        </Container>
    )
}

export default Home