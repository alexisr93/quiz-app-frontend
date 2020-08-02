import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <Container className="d-flex justify-content-center mt-5 pt-5">
      <Row className="justify-content-center mt-5" style={{ backgroundColor: '#f8f9fa', height: '400px', width: '325px'}}>
        <Form className="mt-5">
          <h3>Quiz App</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username " />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Button variant="outline-secondary" type="submit">
            Sign in
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
