import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

let url = 'http://localhost:4000';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    fetch(url + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "email": email
      })
    })
    .then(res => res.json())
    .then(() => {
        history.push('/login');
    })
    .catch(console.log)
    event.preventDefault();
  }

  return (
    <Container className="d-flex justify-content-center mt-5 pt-5">
      <Row
        className="mt-5"
        style={{ backgroundColor: '#f8f9fa', height: '550px', width: '500px'}}
      >
        <Form
          onSubmit={handleSubmit}
          className="mt-5 ml-4 mr-4 text-left"
          style={{ width: '100%'}}
        >
          <h4>Sign up</h4>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              onChange={handleChangeUsername}
              placeholder="Username "
            />
            <Form.Text className="text-muted">
              Username must contain only alphanumeric characters.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleChangePassword}
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted">
              Password must be at least 10 characters long.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm_password"
              onChange={handleChangeConfirmPassword}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChangeEmail}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Button variant="outline-secondary algin-center" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Signup;
