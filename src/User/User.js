import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UserNav from './UserNav';
import MyQuizList from './MyQuizList';
import TakeQuizList from './TakeQuizList';
import Create from './Create';
import ViewQuiz from './ViewQuiz';
import Quiz from '../Quiz/Quiz'
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
              <h3 className="mt-5">Hello, {localStorage.getItem('username')}</h3>
            </>
          </Route>
          <Route exact path="/user/takequizlist">
            <TakeQuizList/>
          </Route>
          <Route exact path="/user/quizlist">
            <MyQuizList/>
          </Route>
          <Route exact path="/user/quizlist/quiz" component={ViewQuiz} />
          <Route exact path="/user/create">
            <Create/>
          </Route>
          <Route exact path="/user/takequiz" component={Quiz} />

        </Switch>
      </Container>
    </Router>
  );
}

export default User;
