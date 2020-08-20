import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function QuestionListItem(props) {
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
  const [questionData, setQuestionData] = useState({
    'question': props.questionData.question,
    'option1': props.questionData.option1,
    'option2': props.questionData.option2,
    'option3': props.questionData.option3,
    'option4': props.questionData.option4,
    'correctAnswer': props.questionData.correctAnswer
  });

  const handleChangeQuestionData = (event) => {
    setQuestionData({ ...questionData, [event.target.name]: event.target.value });
  };

  const handleCloseQuestionModal = () =>{
    setShowEditQuestionModal(false);
  };

  const handleClickEdit = () => {
      setShowEditQuestionModal(true);
  };

  const handleSaveChanges = () => {
    fetch(process.env.REACT_APP_API_URL + '/quiz/' + props.quizData.username + '/' + props.quizData.quizId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "questionId": props.questionData.questionId,
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
      console.log('Question saved')
    })
    .then(() => {
      setShowEditQuestionModal(false);
    })
   .catch(console.log)
  };

  const handleClickDeleteQuestion = () => {
    fetch(process.env.REACT_APP_API_URL + '/quiz/' + props.quizData.username + '/' + props.quizData.quizId, {
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
                onChange={handleChangeQuestionData}
                value={questionData.question}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 1</Form.Label>
              <Form.Control
                name="option1"
                placeholder="Answer 1"
                onChange={handleChangeQuestionData}
                value={questionData.option1}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 2</Form.Label>
              <Form.Control
                name="option2"
                placeholder="Answer 2"
                onChange={handleChangeQuestionData}
                value={questionData.option2}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 3</Form.Label>
              <Form.Control
                name="option3"
                placeholder="Answer 3"
                onChange={handleChangeQuestionData}
                value={questionData.option3}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Answer 4</Form.Label>
              <Form.Control
                name="option4"
                placeholder="Answer 4"
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
                    checked={questionData.correctAnswer == 'option1'}
                    label="Answer 1"
                    name="correctAnswer"
                    id="formHorizontalRadios1"
                    value="option1"
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    checked={questionData.correctAnswer == 'option2'}
                    label="Answer 2"
                    name="correctAnswer"
                    id="formHorizontalRadios2"
                    value="option2"
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    checked={questionData.correctAnswer == 'option3'}
                    label="Answer 3"
                    name="correctAnswer"
                    id="formHorizontalRadios3"
                    value="option3"
                    onChange={handleChangeQuestionData}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    checked={questionData.correctAnswer == 'option4'}
                    label="Answer 4"
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
          <Button variant="outline-secondary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default QuestionListItem;
