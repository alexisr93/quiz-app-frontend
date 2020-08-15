import React from 'react';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function QuestionListItem(props) {
  return(
    <Card style={{ width: '100%'}} className="text-left mb-2">
      <Card.Body>
        <Card.Title>
          {props.question}
          <ButtonGroup className="float-right">
            <Button variant="outline-secondary">Edit</Button>
            <Button variant="outline-secondary">Delete</Button>
          </ButtonGroup>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default QuestionListItem;
