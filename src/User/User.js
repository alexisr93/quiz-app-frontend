import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UserNav from './UserNav';
import QuizList from './QuizList';
import TakeQuizList from './TakeQuizList';
import Create from './Create';
import ViewQuiz from './ViewQuiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function User() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('token') || !localStorage.getItem('username')) {
      history.push('/login');
    }
  });

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
          <Route exact path="/user/takequizlist">
            <TakeQuizList/>
          </Route>
          <Route exact path="/user/quizlist">
            <QuizList/>
          </Route>
          <Route exact path="/user/quizlist/quiz1">
            <ViewQuiz/>
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
