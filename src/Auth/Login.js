import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

let url = 'http://localhost:4000';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    fetch(url + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      })
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      })
     .catch(console.log)
    event.preventDefault();
  }

  render() {
    return (
      <Container className="d-flex justify-content-center mt-5 pt-5">
        <Row className="justify-content-center mt-5" style={{ backgroundColor: '#f8f9fa', height: '400px', width: '325px'}}>
          <Form className="mt-5" onSubmit={this.handleSubmit}>
            <h3>Quiz App</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name='username' onChange={this.handleChange} placeholder="Enter Username " />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' onChange={this.handleChange} placeholder="Enter Password" />
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
        </Row>
      </Container>
    );
  }
}

export default Login;