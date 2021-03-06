import React from 'react';
import Card from 'react-bootstrap/Card';

function Question(props) {
  return (
    <Card className='text-left' style={{width: '100%'}}>
      <Card.Body style={{width: '100%'}}>
        <Card.Title>Question {props.number}.</Card.Title>
        <Card.Text>
          <h4 style={{fontWeight: 'normal'}}>{props.question}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Question;
