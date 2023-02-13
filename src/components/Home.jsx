import { Container, Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    return (
        <Container centerContent>
            <Image src={`https://imgur.com/j4yM0ER`}
                alt={"imagen de inicio"}
                borderRadius='lg' ></Image>
        </Container>
    )
}

export default Home