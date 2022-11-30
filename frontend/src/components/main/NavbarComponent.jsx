import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from '../modal/Login';

function NavbarComponent() {
  return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            
            <Navbar.Brand href="#">Restaurant Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />{/* Responsive hamburger menu Icon */}
            <Navbar.Collapse id="navbarScroll">
                  <Login />
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavbarComponent