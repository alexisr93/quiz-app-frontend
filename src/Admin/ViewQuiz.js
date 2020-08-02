import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import EditQuiz from './EditQuiz';

function ViewQuiz() {
  return (
    <>
      <Card style={{ width: '100%'}}>
        <Card.Body>
          <Card.Title>Quiz Title</Card.Title>
          <Card.Text>
            Quiz Description
          </Card.Text>
        </Card.Body>
      </Card>
      <ListGroup.Item className="text-left">
        <Nav.Item>
          <Row>
            <Col>
              <Nav.Link>
                Question 1 Title
              </Nav.Link>
            </Col>
            <Col>
              <ButtonGroup className="float-right">
                <Button variant="outline-secondary">Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Nav.Item>
      </ListGroup.Item>
    </>
  );
}

export default ViewQuiz;
