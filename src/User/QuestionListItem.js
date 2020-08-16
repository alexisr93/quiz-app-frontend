import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

let url = 'http://localhost:4000';

function QuestionListItem(props) {
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);

  /*
  Eventually use this for the question data
  const [questionData, setQuestionData] = useState({
    'question': props.questionData.question,
    'option1': props.questionData.option1,
    'option2': props.questionData.option2,
    'option3': props.questionData.option3,
    'option4': props.questionData.option4,
    'correctAnswer': props.questionDAta.correctAnswer
  })

  Going to use something like this
  function handleHoursInput(e) {
    let hours = e.target.value;
    setEditing({...editing, hours});
}
  */

  const [newQuestion, setNewQuestion] = useState(props.questionData.question);
  const [newAnswer1, setNewAnswer1] = useState(props.questionData.answer1);
  const [newAnswer2, setNewAnswer2] = useState(props.questionData.answer2);
  const [newAnswer3, setNewAnswer3] = useState(props.questionData.answer3);
  const [newAnswer4, setNewAnswer4] = useState(props.questionData.answer4);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState(props.questionData.correctAnswer);

  const handleChangeNewQuestion = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleChangeNewAnswer1 = (event) => {
    setNewAnswer1(event.target.value);
  };

  const handleChangeNewAnswer2 = (event) => {
    setNewAnswer2(event.target.value);
  };

  const handleChangeNewAnswer3 = (event) => {
    setNewAnswer3(event.target.value);
  };

  const handleChangeNewAnswer4 = (event) => {
    setNewAnswer4(event.target.value);
  };

  const handleChangeNewCorrectAnswer = (event) => {
    setNewCorrectAnswer(event.target.value);
  };


  const handleCloseQuestionModal = () =>{
    setShowEditQuestionModal(false);
  }

  const handleClickEdit = () => {
      setShowEditQuestionModal(true);
  }

  const handleSaveChanges = () => {
    fetch(url + '/quiz/' + props.quizData.username + '/' + props.quizData.quizId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "questionId": props.questionData.questionId,
        "question": newQuestion,
        "answer1": newAnswer1,
        "answer2": newAnswer2,
        "answer3": newAnswer3,
        "answer4": newAnswer4,
        "correctAnswer": newCorrectAnswer,
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log('Question saved')
    })
    .then(() => {
      setShowEditQuestionModal(false);
    })
   .catch(console.log)
  };

  const handleClickDeleteQuestion = () => {
    fetch(url + '/quiz/' + props.quizData.username + '/' + props.quizData.quizId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "questionId": props.questionData.questionId,
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log('Question Deleted');
    })
   .catch(console.log)
  };

  return(
    <>
      <Card style={{ width: '100%'}} className="text-left mb-2">
        <Card.Body>
          <Card.Title>
            {props.questionData.question}
            <ButtonGroup className="float-right">
              <Button variant="outline-secondary" onClick={handleClickEdit}>Edit</Button>
              <Button variant="outline-danger" onClick={handleClickDeleteQuestion}>Delete</Button>
            </ButtonGroup>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={showEditQuestionModal}>
        <Modal.Header closeButton onClick={handleCloseQuestionModal}>
          <Modal.Title>Edit Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Question</Form.Label>
              <Form.Control
                as="textarea"
                name="question"
                placeholder="Question"
                onChange={handleChangeNewQuestion}
                value={newQuestion}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 1</Form.Label>
              <Form.Control
                name="answer1"
                placeholder="Answer 1"
                onChange={handleChangeNewAnswer1}
                value={newAnswer1}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 2</Form.Label>
              <Form.Control
                name="answer2"
                placeholder="Answer 2"
                onChange={handleChangeNewAnswer2}
                value={newAnswer2}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 3</Form.Label>
              <Form.Control
                name="answer3"
                placeholder="Answer 3"
                onChange={handleChangeNewAnswer3}
                value={newAnswer3}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Answer 4</Form.Label>
              <Form.Control
                name="title"
                placeholder="Answer 4"
                value={newAnswer4}
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
          <Button variant="outline-secondary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default QuestionListItem;
