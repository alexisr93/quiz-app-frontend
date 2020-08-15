import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

let url = 'http://localhost:4000';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showAlert: false,
      username: this.props.username,
      email: this.props.email
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSaveChanges = this.handleClickSaveChanges.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  handleCloseAlert() {
    this.setState({showAlert: false});
  }

  handleShowAlert() {
    this.setState({showAlert: true});
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleClickSaveChanges(event) {
    fetch(url + '/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
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

  handleDelete(event) {
    this.setState({showAlert: true});
  }

  handleConfirm(event) {
    fetch(url + '/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
      })
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({showAlert: false});
        this.props.refreshUsers();
      })
     .catch(console.log)
    event.preventDefault();
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
              <Button variant="outline-secondary" onClick={this.handleDelete}>Delete</Button>
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
                <Form.Control
                  name="username"
                  type="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClickSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showAlert} onHide={this.handleCloseAlert}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> Are you sure you want to delete {this.state.username} </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={this.handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserList;
