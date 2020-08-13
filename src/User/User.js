import React from 'react';
import Container from 'react-bootstrap/Container';
import UserNav from './UserNav';
import QuizList from './QuizList';
import Create from './Create';
import ViewQuiz from './ViewQuiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function User() {
  return (
    <Router>
      <UserNav/>

      <Container>
        <Switch>
          <Route exact path="/user/">
            <>
              Hello, {localStorage.getItem('username')}
            </>
          </Route>
          <Route exact path="/user/quizlist">
            <QuizList/>
          </Route>
          <Route exact path="/user/quizlist/quiz1">
            <ViewQuiz/>
          </Route>
          <Route exact path="/user/quizlist/myquizzes">
            <QuizList/>
          </Route>
          <Route exact path="/user/create">
            <Create/>
          </Route>

        </Switch>
      </Container>
    </Router>
  );
}

export default User;
