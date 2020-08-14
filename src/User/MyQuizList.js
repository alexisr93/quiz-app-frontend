import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import MyQuizListItem from './MyQuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

function MyQuizList() {
  return (
    <>
      <FormGroup className="mt-4">
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup className="mt-4">
        <MyQuizListItem/>
      </ListGroup>
    </>
  );
}

export default MyQuizList;
