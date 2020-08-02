import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditQuiz from './EditQuiz';

function QuizListItem() {
  return (
    <>
      <FormGroup>
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup.Item className="text-left">
        <Nav.Item>
          <Row>
            <Col>
              <Nav.Link>
                Chapter 1 Section 1
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

export default QuizListItem;
