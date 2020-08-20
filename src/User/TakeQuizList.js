import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TakeQuizListItem from './TakeQuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

function TakeQuizList() {
  return (
    <>
      <FormGroup className="mt-4">
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup className="mt-4">
        <TakeQuizListItem/>
      </ListGroup>
    </>
  );
}

export default TakeQuizList;
