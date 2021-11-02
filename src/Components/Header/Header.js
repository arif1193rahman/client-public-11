import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../LogIn/Hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand to="/home" className="main-text">Tourist Guid</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-text">
                <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/ourServices">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                {user?.email? 
                    <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> :
                    <Nav.Link as={HashLink} to="/orderDetails">Order details</Nav.Link>
                } 
                <Navbar.Collapse className="justify-content-end">
                    {user?.email ?
                        <Button onClick={logOut} variant="light"><i className="fas fa-sign-in-alt"></i> Log Out</Button>
                        : <Nav.Link as={Link} to="/signIn"><i className="fas fa-sign-out-alt"></i> Sign In</Nav.Link>}
                    
                    <Navbar.Text className="display-name">
                        Signed: <Link className="display-name" to="/signIn"> {user?.displayName}</Link>
                    </Navbar.Text>
                 </Navbar.Collapse>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;