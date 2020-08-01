import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ProblemNav() {
  return (
    <div style={{width: '100%'}}>
      <Row>
        <Col md={4} lg={4}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={4} lg={4}>
          <Button variant="outline-secondary" block>Previous</Button>{' '}
        </Col>
        <Col md={4}>
          <Button variant="outline-secondary" block>Next</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProblemNav;
