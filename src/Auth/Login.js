import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  Link,
  useHistory,
} from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  let history = useHistory();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    fetch(process.env.REACT_APP_API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })
    .then(res => res.json())
    .then((data) => {
      if (data.error) {
        setShowAlert(true);
      }
      else {
        setShowAlert(false);
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
    })
    .then(() => {
      if (localStorage.getItem('token') !== 'undefined' && localStorage.getItem('username') == "admin"){
        history.push('/admin');
      }
      else if (localStorage.getItem('token') !== 'undefined' && localStorage.getItem('username')){
        history.push('/user');
      }
    })
    .catch(console.log)
    event.preventDefault();
  }
  // There may be a bug in useEffect or just above in the final .then()
  useEffect(() => {
    if (localStorage.getItem('token') !== 'undefined' && localStorage.getItem('username') == "admin"){
      history.push('/admin');
    }
    else if (localStorage.getItem('token') !== 'undefined' && localStorage.getItem('username')){
      history.push('/user');
    }
  })

  return (
    <Container className="d-flex justify-content-center mt-5 pt-5">
      <Row
        className="justify-content-center mt-5"
        style={{ backgroundColor: '#f8f9fa', height: '400px', width: '325px'}}
      >
        <Form className="mt-5" onSubmit={handleSubmit}>
          <h3>Quiz App</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name='username'
              onChange={handleChangeUsername}
              placeholder="Enter Username "
            />
          </Form.Group>

          <br/>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name='password'
              onChange={handleChangePassword}
              placeholder="Enter Password"
            />
          </Form.Group>
          <Button variant="outline-secondary" type="submit">
            Log in
          </Button>
          <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none'}}>
            <Button variant="outline-secondary">
              Sign up
            </Button>
          </Link>
        </Form>
        <Alert className="mt-4" show={showAlert} variant="danger">
         <p>
          Username and/or password are incorrect
         </p>
       </Alert>
      </Row>
    </Container>
  );
}

export default Login;
