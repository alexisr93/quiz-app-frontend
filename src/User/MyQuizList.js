import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import MyQuizListItem from './MyQuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

const url = 'http://localhost:4000'

function MyQuizList() {
  const [quizlist, setQuizlist] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    console.log(quizlist);
    setComponentList(quizlist.map((element) => {
      return(
        <MyQuizListItem
          key={element._id}
          id={element._id}
          title={element.title}
          description={element.description}
        />
      );
    }));
  }, [quizlist]);

  useEffect(() => {
    fetch(url + '/quizzes/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      setQuizlist(data.map(element => {
        return ({
          _id: element._id,
          title: element.title,
          description: element.description
        });
      }));
    })
    .catch(console.log)
  }, []);

  return (
    <>
      <FormGroup className="mt-4">
        <Form.Control placeholder="Search Quizzes"></Form.Control>
      </FormGroup>
      <ListGroup className="mt-4">
        {componentList}
      </ListGroup>
    </>
  );
}

export default MyQuizList;
