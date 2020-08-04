import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function ViewQuiz() {
  return (
    <Container className="mt-4">
      <Row>
        <Card className="mb-4" style={{ width: '100%'}}>
          <Card.Body>
            <Card.Title>Quiz Title</Card.Title>
            <Card.Text>
              Quiz Description
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4">
        <ButtonGroup className="float-right">
          <Button variant="outline-secondary">Add Question</Button>
          <Button variant="outline-secondary">Select All</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ListGroup.Item className="text-left" style={{width: '100%'}}>
          <Nav.Item>
            <Row>
              <Col className="d-flex align-items-center" md={1}>
                <Form.Check type="checkbox" label="" />
              </Col>
              <Col md={9}>
                <h6>
                  Question 1
                </h6>
                <p>
                  This is a question?
                </p>
              </Col>
              <Col md={2}>
                <ButtonGroup className="float-right">
                  <Button variant="outline-secondary">Edit</Button>
                  <Button variant="outline-secondary">Delete</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Nav.Item>
        </ListGroup.Item>
      </Row>
    </Container>
  );
}

export default ViewQuiz;
