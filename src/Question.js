import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Question() {
  return (
    <Card className='text-left'>
      <Card.Body style={{width: '100%'}}>
        <Card.Title>1.</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Question Title</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content. This is a question?
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Question;
