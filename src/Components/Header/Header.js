import React from 'react';
import { Container, Navbar,Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand to="/home" className="main-text">Tourist Guid</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-text">
                <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                <Nav.Link as={HashLink} to="/schedule">Schedule</Nav.Link>
                {/* <Navbar.Collapse className="justify-content-end">
                    {user?.email ?
                        <Button onClick={logOut} variant="light"><i class="fas fa-sign-in-alt"></i> Log Out</Button>
                        : <Nav.Link as={Link} to="/registration"><i class="fas fa-sign-out-alt"></i> Log In</Nav.Link>}
                    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                    <NavbarBrand.Text className="display-name">
                        Signed: <Link className="display-name" to="/logIn"> {user?.displayName}</Link>
                    </Navbar.Text> */}
                {/* </Navbar.Collapse> */}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;