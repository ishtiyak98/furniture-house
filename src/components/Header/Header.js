import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to={"/"} className='d-flex'><span style={{fontFamily: 'Raleway'}}>Furniture House</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{fontFamily: 'Raleway'}} className="ms-auto">
                        <Nav.Link className='mx-1' as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/blogs"}>Manage Items</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/about"}>Add Item</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/about"}>My Items</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/login"}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;