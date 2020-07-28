import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Question() {
  return (
    <div>
      <Card bg="light" border="light" style={{ width: '24rem', height: '20rem'}}>
        <Card.Body>
          <Card.Text style={{ color: 'black'}}>
            Is this the correct question?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Question;
