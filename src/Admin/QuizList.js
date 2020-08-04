import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import QuizListItem from './QuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

function Edit() {
  return (
    <>
      <FormGroup className="mt-4">
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup className="mt-4">
        <QuizListItem/>
      </ListGroup>
    </>
  );
}

export default Edit;
