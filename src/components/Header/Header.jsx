import React, {useContext} from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'

const Header = () => {
    const {itemCount} = useContext(CartContext);
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
                        <NavLink to="" className="cart-link">
                            <BsFillCartFill className='mt-1' />
                            {itemCount > 0 ? <span className='item-count'>{itemCount}</span>: null}
                            
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header