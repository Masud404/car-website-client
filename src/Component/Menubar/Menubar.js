import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo_01_1.png'
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <>
            {/* navbar section */}
            <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    {/* Menubar item */}
                    <Navbar.Collapse className="justify-content-end nav-item">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ourcar">Our Cars</Nav.Link>
                        <Nav.Link as={Link} to="">Reviews</Nav.Link>
                        <Nav.Link as={Link} to="">About</Nav.Link>
                        <Nav.Link as={Link} to="">Contact Us</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a to="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;