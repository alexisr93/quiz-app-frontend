import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import QuestionListItem from './QuestionListItem';

function ViewQuiz(props) {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showEditQuizModal, setShowEditQuizModal] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [questionData, setQuestionData] = useState({
    'question': '',
    'option1': '',
    'option2': '',
    'option3': '',
    'option4': '',
    'correctAnswer': '',
  });
  const [quizData, setQuizData] = useState({
    'quizId': props.location.state.id,
    'quizTitle': '',
    'quizDescription': '',
  })

  const handleChangeQuestionData = (event) => {
    setQuestionData({ ...questionData, [event.target.name]: event.target.value });
  };

  const handleChangeQuizData = (event) => {
    setQuizData({ ...quizData, [event.target.name]: event.target.value });
  };

  // Can probably change these to one for each Modal.
  const handleShowQuestionModal = () => {
    setShowQuestionModal(true);
  };

  const handleCloseQuestionModal = () => {
    setShowQuestionModal(false);
  };

  const handleShowEditQuiz = () => {
    setShowEditQuizModal(true);
  }

  const handleCloseEditQuiz = () => {
    setShowEditQuizModal(false);
  }

  const handleSaveQuestion = () => {
    fetch(process.env.REACT_APP_API_URL + '/quiz/' + username + '/' + quizData.quizId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //"id": quizData.quizId,
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

  const handleSaveQuizDetails = () => {
    fetch(process.env.REACT_APP_API_URL + '/quizzes/' + username, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': quizData.quizId,
        'username': username,
        'quizTitle': quizData.quizTitle,
        'quizDescription': quizData.quizDescription,
      })
    })
    .then(res => res.json())
    .then(() => {
      setShowEditQuizModal(false);
    })
   .catch(console.log)
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/quiz/' + username + '/' + quizData.quizId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setQuizData({
        ...quizData,
        'quizTitle': data.title,
        'quizDescription': data.description,
      });
      setQuizQuestions(data.questions);
    })
   .catch(console.log)
 }, [quizData.quizId]);

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
            'quizId': quizData.quizId,
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
              <Card.Title>{quizData.quizTitle}</Card.Title>
              <Card.Text>
                {quizData.quizDescription}
              </Card.Text>
              <ButtonGroup className="float-right">
                <Button variant="outline-secondary" onClick={handleShowEditQuiz}>Edit</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mb-4">
          <ButtonGroup className="float-right">
            <Button variant="outline-secondary" onClick={handleShowQuestionModal}>Add Question</Button>
            <Button variant="outline-secondary">Select All</Button>
            <Button variant="outline-danger">Delete</Button>
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
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 2"
                    name="correctAnswer"
                    id="formHorizontalRadios2"
                    value="option2"
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 3"
                    name="correctAnswer"
                    id="formHorizontalRadios3"
                    value="option3"
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Option 4"
                    name="correctAnswer"
                    id="formHorizontalRadios3"
                    value="option4"
                    onChange={handleChangeQuestionData}
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

      <Modal show={showEditQuizModal}>
        <Modal.Header closeButton onClick={handleCloseEditQuiz}>
          <Modal.Title>Edit Quiz Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="quizTitle"
                placeholder="Title"
                onChange={handleChangeQuizData}
                value={quizData.quizTitle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="quizDescription"
                placeholder="Description"
                onChange={handleChangeQuizData}
                value={quizData.quizDescription}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseEditQuiz}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSaveQuizDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewQuiz;
