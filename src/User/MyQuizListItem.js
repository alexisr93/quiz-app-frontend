import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {
  Link
} from "react-router-dom";

function MyQuizListItem(props) {
  return (
    <Card style={{width: '100%'}} className="text-left mb-2">
      <Card.Body>
        <Card.Title>
          <Link to={{
            pathname: '/user/quizlist/quiz',
            state: {
              id: props.id
            }
          }}>{props.title}</Link>

          <ButtonGroup className="float-right">
            <Button variant="outline-secondary">Start Quiz</Button>
            <Button variant="outline-secondary">View Results</Button>
            <Button variant="outline-danger">Delete</Button>
          </ButtonGroup>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default MyQuizListItem;
