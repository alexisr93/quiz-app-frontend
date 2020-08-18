import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ProblemNav(props) {
  const createDropOptions = () => {
    return(Array.from(Array(props.numQuestions), (_, i) => i + 1).map((element) => {
      return (
        <option>{element}</option>
      );
    }));
  }

  const [dropOptions, setDropOptions] = useState(createDropOptions());
  const [current, setCurrent] = useState(props.currentQuestion);

  const clickHandleDropdownChange = (event) => {
    props.dropdownChange(event.target.value);
  }

  useEffect(() => {
    setDropOptions(createDropOptions());
  }, [props.numQuestions]);

  useEffect(() => {
    setCurrent(props.currentQuestion);
  }, [props.currentQuestion]);

  return (
    <div style={{width: '100%'}}>
      <Row>
        <Col md={4} lg={4}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" value={current} onChange={clickHandleDropdownChange}>
                {dropOptions}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={4} lg={4}>
          <Button variant="outline-secondary" onClick={props.clickPrevious} block>Previous</Button>{' '}
        </Col>
        <Col md={4}>
          <Button variant="outline-secondary" onClick={props.clickNext} block>Next</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProblemNav;
