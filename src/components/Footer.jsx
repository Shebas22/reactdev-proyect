import { Container } from '@chakra-ui/react';
import React from 'react'
import './styles/Footer.css';

const Footer = ({ background }) => {

    return (
        <footer className={`footer background--${background}`}>
            <div className="logo-container">
                <Container className='body' centerContent padding={10}>
                    <p>👦Estudiante: Navarro Sebastián</p>
                    <p>👨‍💻Comisión: 34095</p>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
