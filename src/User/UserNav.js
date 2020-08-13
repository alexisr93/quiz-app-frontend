import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  Link,
  useHistory,
} from "react-router-dom";


function UserNav() {
  let history = useHistory();

  const handleSignout = () => {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <Row style={{backgroundColor: '#f8f9fa'}}>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/user/">
                <Nav.Link href="#Home">Home</Nav.Link>
              </Link>
              <Link to="/user/quizlist">
                <Nav.Link href="#Quizzes">Take Quiz</Nav.Link>
              </Link>
              <Link to="/user/quizlist/myquizzes">
                <Nav.Link href="#Quizzes">My Quizzes</Nav.Link>
              </Link>
              <Link to="/user/create">
                <Nav.Link href="#Create">Create</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Signout" onClick={handleSignout}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default UserNav;
