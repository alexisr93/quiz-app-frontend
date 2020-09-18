import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {
  Link
} from "react-router-dom";

function MyQuizListItem(props) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [resultList, setResultList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetch(process.env.REACT_APP_API_URL + '/results/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      setResultList(data.map(element => {
        return ({
          quizTitle: element.quizTitle,
          quizScore: element.quizScore,
          dateQuizTaken: element.dateQuizTaken
        });
      }).filter(filterElement => {
        return filterElement.quizTitle == props.title;
      }));
    })
    .catch(console.log)

  }

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
      window.location.reload();
    })
   .catch(console.log)
  }
  useEffect(() => {

  }, [])
  return (
    <>
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
              <Button variant="outline-secondary" onClick={handleShow}>View Results</Button>
              <Button variant="outline-danger" onClick={handleClickDelete}>Delete</Button>
            </ButtonGroup>
            </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Results: {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Score</th>
              <th>Date Taken</th>
            </tr>
          </thead>
          <tbody>
            {resultList.map((element) => {
              return (
                <tr>
                  <td>{element.quizScore}</td>
                  <td>{element.dateQuizTaken}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyQuizListItem;
