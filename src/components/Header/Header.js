import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = ()=>{
        Swal.fire({
            title: "Logged Out!",
            text: "Successfully logged Out",
            icon: "success",
          });
        signOut(auth);
    }

    return (
        <>
           <Navbar className="py-1" collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to={"/"} className='d-flex fw-bold'><span style={{fontFamily: 'Marck Script'}} className={"fs-1 fw-lighter"}>Furniture House</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{fontFamily: 'Raleway'}} className="ms-auto">
                        <Nav.Link className='mx-2' as={ActiveLink} to={"/"}>Home</Nav.Link>
                        {
                            user && <Nav.Link className='mx-2' as={ActiveLink} to={"/manage_inventory"}>Manage Inventory</Nav.Link>
                        }
                        {
                            user && <Nav.Link className='mx-2' as={ActiveLink} to={"/addItem"}>Add Item</Nav.Link>
                        }
                        {
                            user && <Nav.Link className='mx-2' as={ActiveLink} to={"/myItems"}>My Items</Nav.Link>
                        }
                        <Nav.Link className='mx-2' as={ActiveLink} to={"/blogs"}>Blogs</Nav.Link>
                        {
                            user ? <Nav.Link style={{color: "#FFFFFF"}} className='mx-2' onClick={handleSignOut}>Logout</Nav.Link> : <Nav.Link className='mx-2' as={ActiveLink} to={"/login"}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;