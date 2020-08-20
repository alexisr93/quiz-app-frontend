import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom'

function Create() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleSaveChanges = () => {
    fetch(process.env.REACT_APP_API_URL + '/quizzes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": title,
        "description": description,
        'createdBy': localStorage.getItem('username'),
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(console.log)
    // TODO: Tell the user that they have successfully created a quiz
    // TODO: Redirect to MyQuizzes so they can add questions
    history.push('/user');
  }

  const handleClose = () => {
    setShow(false);
    history.push('/user');
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
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
                name="title"
                placeholder="Quiz Title"
                onChange={handleChangeTitle}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                placeholder="Description"
                onChange={handleChangeDescription}
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
