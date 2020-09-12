import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PublicQuizListItem from './PublicQuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

function PublicQuizList() {
  return (
    <>
      <FormGroup className="mt-4">
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup className="mt-4">
        <PublicQuizListItem/>
      </ListGroup>
    </>
  );
}

export default PublicQuizList;
