import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  Link,
  useHistory,
} from "react-router-dom";

function AdminNav() {
  let history = useHistory();

  const handleSignout = () => {
    localStorage.clear();
    history.push('/login');
  }
  return (
    <Row style={{backgroundColor: '#f8f9fa'}}>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>Quiz App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/admin/">
                <Nav.Link href="#users">Users</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Link to="/admin/signout">
                <Nav.Link onClick={handleSignout}>Sign Out</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default AdminNav;
