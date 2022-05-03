import React from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'
const Header = () => {
    const { cart } = useGlobalContext()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">E-Commerce</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavLink to="/login" className="dropdown-item">
                                Login
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/cart" className="cart-link">
                            <BsFillCartFill className='mt-1' />
                            <span className='item-count'>{cart.length}</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header