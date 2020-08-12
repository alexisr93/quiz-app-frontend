import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: this.props.username,
      email: this.props.email
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({show: false});
  }
  handleShow() {
    this.setState({show: true});
  }
  render() {
    return (
      <>
        <tr>
          <td>{this.state.username}</td>
          <td>{this.state.email}</td>
          <td>
            <ButtonGroup>
              <Button variant="outline-secondary" onClick={this.handleShow}>Update</Button>
              <Button variant="outline-secondary">Delete</Button>
            </ButtonGroup>
          </td>
        </tr>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username"/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserList;
