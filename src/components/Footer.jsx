import { Container } from '@chakra-ui/react';
import React from 'react'
import './styles/Footer.css';

const Footer = ({ background }) => {
    const logo = '../src/assets/img/logo.png';
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
