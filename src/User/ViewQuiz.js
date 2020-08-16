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
import QuestionListItem from './QuestionListItem';

let url = 'http://localhost:4000';

function ViewQuiz(props) {
  const [quizId, setQuizId] = useState(props.location.state.id);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [questionData, setQuestionData] = useState({
    'question': '',
    'option1': '',
    'option2': '',
    'option3': '',
    'option4': '',
    'correctAnswer': '',
  });

  const handleChangeQuestionData = (event) => {
    setQuestionData({ ...questionData, [event.target.name]: event.target.value });
  };

  const handleShowQuestionModal = () => {
    setShowQuestionModal(true);
  };

  const handleCloseQuestionModal = () => {
    setShowQuestionModal(false);
  };

  const handleSaveQuestion = () => {
    fetch(url + '/quiz/' + username + '/' + quizId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": quizId,
        "username": username,
        "question": questionData.question,
        "option1": questionData.option1,
        "option2": questionData.option2,
        "option3": questionData.option3,
        "option4": questionData.option4,
        "correctAnswer": questionData.correctAnswer,
      })
    })
    .then(res => res.json())
    .then((data) => {
      setQuizQuestions(data.questions);
    })
    .then(() => {
      setShowQuestionModal(false);
    })
   .catch(console.log)

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

  useEffect(() => {
    setQuestionList(quizQuestions.map((element) => {
      return(
        <QuestionListItem
          questionData={{
            'questionId': element._id,
            'question': element.question,
            'option1': element.option1,
            'option2': element.option2,
            'option3': element.option3,
            'option4': element.option4,
            'correctAnswer': element.correctAnswer,
          }}
          quizData={{
            'username': username,
            'quizId': quizId,
          }}
        />
      );
    }));
  }, [quizQuestions]);

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
          {questionList}
        </Row>
      </Container>

      <Modal show={showQuestionModal}>
        <Modal.Header closeButton onClick={handleCloseQuestionModal}>
          <Modal.Title>New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Question</Form.Label>
              <Form.Control
                as="textarea"
                name="question"
                placeholder="Question"
                onChange={handleChangeQuestionData}
                value={questionData.question}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Option 1</Form.Label>
              <Form.Control
                name="option1"
                placeholder="Option 1"
                onChange={handleChangeQuestionData}
                value={questionData.option1}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Option 2</Form.Label>
              <Form.Control
                name="option2"
                placeholder="Option 2"
                onChange={handleChangeQuestionData}
                value={questionData.option2}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Option 3</Form.Label>
              <Form.Control
                name="option3"
                placeholder="Option 3"
                onChange={handleChangeQuestionData}
                value={questionData.option3}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Option 4</Form.Label>
              <Form.Control
                name="option4"
                placeholder="Option 4"
                onChange={handleChangeQuestionData}
                value={questionData.option4}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                Select correct option
              </Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 1 "
                    name="correctAnswer"
                    id="formHorizontalRadios1"
                    value="option1"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 2"
                    name="correctAnswer"
                    id="formHorizontalRadios2"
                    value="option2"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 3"
                    name="correctAnswer"
                    id="formHorizontalRadios3"
                    value="option3"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 4"
                    name="correctAnswer"
                    id="formHorizontalRadios3"
                    value="option4"
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
};

export default ViewQuiz;
