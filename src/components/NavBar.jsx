import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo3 from '../imagenes/logo3.jpg';
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar expand="lg" className='bg-green'>
            <Container fluid>
                <Navbar.Brand >
                    <Link to={"/"}>
                        <img src={logo3} alt="Logo" width="100" height="75" className="d-inline-block align-text-top" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="ms-auto" >
                        <Nav.Link href="/Conocenos" className="fs-5 nav-color">Conócenos</Nav.Link>
                        <Nav.Link href="/Servicios" className="fs-5 nav-color">Servicios</Nav.Link>
                        <NavDropdown className="fs-5" title={<span className="nav-color1">Categoría</span>} id="basic-nav-dropdown nav-color1">
                            <NavDropdown.Item href={`/category/${"juvenil"}`} className="text-center category-nav">Juvenil</NavDropdown.Item>
                            <NavDropdown.Item href={`/category/${"plantula"}`} className="text-center category-nav">Plantula</NavDropdown.Item>
                            <NavDropdown.Item href={`/category/${"flor"}`} className="text-center category-nav">Flor</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Link href="/Cart">
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar


