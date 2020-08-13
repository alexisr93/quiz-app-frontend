import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  Link
} from "react-router-dom";

function QuizListItem() {
  return (
    <>
      <ListGroup.Item className="text-left">
        <Row>
          <Col>
            <Link to="/user/quizlist/quiz1">
              Chapter 1 Section 1
            </Link>
          </Col>
          <Col>
            <ButtonGroup className="float-right">
              <Button variant="outline-secondary">Delete</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
}

export default QuizListItem;
