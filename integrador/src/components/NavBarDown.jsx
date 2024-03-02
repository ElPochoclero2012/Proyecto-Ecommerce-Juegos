import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Sección de intro sería

function NavBarDown() {


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Physical">Physical</NavDropdown.Item>
              <NavDropdown.Item href="/Digital">
                Digital
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarDown