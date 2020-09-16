import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultListItem(props) {
  return (
    <Card style={{width: '100%'}} className="text-left mb-2">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>
              Quiz Name:
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.quizName}</Card.Subtitle>
          </Col>
          <Col>
            <Card.Title>
              Score:
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.quizScore}</Card.Subtitle>
          </Col>
          <Col>
            <Card.Title>
              Date Taken:
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.dateQuizTaken}</Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

}

export default ResultListItem;
