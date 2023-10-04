
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


export default function Header() {
    return (
       <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand>
                Notes Application
            </Navbar.Brand>
        </Container>
       </Navbar>
    )
}