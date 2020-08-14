// Doesn't look like this is being used anywhere
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MainNav() {
  return (
    <Row style={{backgroundColor: '#f8f9fa'}}>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>Quiz App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#Other">Other</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Signout">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default MainNav;
