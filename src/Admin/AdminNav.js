import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AdminNav() {
  return (
    <Row style={{backgroundColor: '#f8f9fa'}}>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>Quiz App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/admin/home">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/admin/quizzes">
                <Nav.Link href="#quizzes">Quizzes</Nav.Link>
              </Link>
              <Link to="/admin/create">
                <Nav.Link href="#create">Create</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Link to="/admin/signout">
                <Nav.Link href="#signout">Sign Out</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default AdminNav;
