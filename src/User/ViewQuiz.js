import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

let url = 'http://localhost:4000';

function ViewQuiz(props) {
  const [quizId, setQuizId] = useState(props.location.state.id);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  const handleShowQuestionModal = () => {
    setShowQuestionModal(true);
  };

  const handleCloseQuestionModal = () => {
    setShowQuestionModal(false);
  };

  const handleSaveQuestion = () => {

  };

  useEffect(() => {
    fetch(url + '/quiz/' + username + '/' + quizId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setQuizTitle(data.title);
      setQuizDescription(data.description);
      setQuizQuestions(data.questions);
    })
   .catch(console.log)
  }, [quizId]);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Card className="mb-4" style={{ width: '100%'}}>
            <Card.Body>
              <Card.Title>{quizTitle}</Card.Title>
              <Card.Text>
                {quizDescription}
              </Card.Text>
              <ButtonGroup className="float-right">
                <Button variant="outline-secondary">Edit</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mb-4">
          <ButtonGroup className="float-right">
            <Button variant="outline-secondary" onClick={handleShowQuestionModal}>Add Question</Button>
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

      <Modal show={showQuestionModal}>
        <Modal.Header closeButton onClick={handleCloseQuestionModal}>
          <Modal.Title>Add New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Question</Form.Label>
              <Form.Control
                as="textarea"
                name="question"
                placeholder="Question"
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 1</Form.Label>
              <Form.Control
                name="answer1"
                placeholder="Answer 1"
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 2</Form.Label>
              <Form.Control
                name="answer2"
                placeholder="Answer 2"
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 3</Form.Label>
              <Form.Control
                name="answer3"
                placeholder="Answer 3"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Answer 4</Form.Label>
              <Form.Control
                name="title"
                placeholder="Answer 4"
                />
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">
                Select correct answer
              </Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Answer 1 "
                    name="answer"
                    id="formHorizontalRadios1"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Answer 2"
                    name="answer"
                    id="formHorizontalRadios2"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Answer 3"
                    name="answer"
                    id="formHorizontalRadios3"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Answer 5"
                    name="answer"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseQuestionModal}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSaveQuestion}>
            Save Question
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewQuiz;
