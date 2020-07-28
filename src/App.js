import React from 'react';
import './App.css';
import MainBodyQA from './MainBodyQA';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#Other">Other</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <MainBodyQA/>
    </div>
  );
}

export default App;
