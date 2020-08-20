import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {
  Link
} from "react-router-dom";

function MyQuizListItem(props) {
  const handleClickDelete = () => {
    fetch(process.env.REACT_APP_API_URL + '/quizzes/' + localStorage.getItem('username'), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": props.id,
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log('Will reload');
    })
   .catch(console.log)
  }

  return (
    <Card style={{width: '100%'}} className="text-left mb-2">
      <Card.Body>
        <Card.Title>
          <Link to={{
            pathname: '/user/quizlist/quiz',
            state: {
              id: props.id
            }
          }}>{props.title}</Link>

          <ButtonGroup className="float-right">
            <Button variant="outline-secondary">
              <Link to={{
                pathname: '/user/takequiz',
                state: {
                  id: props.id
                }
              }} style={{ color: 'inherit', textDecoration: 'none'}}>Start Quiz</Link>
            </Button>
            <Button variant="outline-secondary">View Results</Button>
            <Button variant="outline-danger" onClick={handleClickDelete}>Delete</Button>
          </ButtonGroup>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default MyQuizListItem;
