import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom'

function Create() {
  const [show, setShow] = useState(true);
  const history = useHistory();

  const handleSaveChanges = () => {
    setShow(false);
    history.push('/user');
  }

  const handleClose = () => {
    setShow(false);
    history.push('/user');
  }

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Create New Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Quiz Title</Form.Label>
              <Form.Control
                name="quizTitle"
                placeholder="Quiz Title"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                placeholder="Description"
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Create;
