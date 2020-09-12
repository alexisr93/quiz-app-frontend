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
          <Navbar.Brand>Quiz App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/user">
                <Nav.Link href="/user">Home</Nav.Link>
              </Link>
              <Link to="/user/takequizlist">
                <Nav.Link href="/user/takequizlist">Take Quiz</Nav.Link>
              </Link>
              <Link to="/user/quizlist/">
                <Nav.Link href="/user/quizlist">My Quizzes</Nav.Link>
              </Link>
              <Link to="/user/create">
                <Nav.Link href="/user/create">Create</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login" onClick={handleSignout}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default UserNav;
