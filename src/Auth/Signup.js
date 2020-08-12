import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';

let url = 'http://localhost:4000';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    fetch(url + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "email": this.state.email
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
        <Row className="mt-5" style={{ backgroundColor: '#f8f9fa', height: '500px', width: '500px'}}>
          <Form onSubmit={this.handleSubmit} className="mt-5 ml-4 mr-4 text-left" style={{ width: '100%'}}>
            <h4>Sign up</h4>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" onChange={this.handleChange} placeholder="Username " />
              <Form.Text className="text-muted">
                Username must contain only alphanumeric characters.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={this.handleChange}type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Password must be at least 10 characters long.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name="confirm_password" onChange={this.handleChange} type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Email" />
            </Form.Group>
            <Button variant="outline-secondary algin-center" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Signup;
