import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UserNav from './UserNav';
import MyQuizList from './MyQuizList';
import PublicQuizList from './PublicQuizList';
import Create from './Create';
import ViewQuiz from './ViewQuiz';
import Quiz from '../Quiz/Quiz'
import Result from '../Quiz/Result';
import UserDashboard from './UserDashboard';
import Results from './Results';
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
          <Route exact path="/user/" component={UserDashboard} />
          <Route exact path="/user/publicquizlist" component={PublicQuizList} />
          <Route exact path="/user/quizlist" component={MyQuizList} />
          <Route exact path="/user/quizlist/quiz" component={ViewQuiz} />
          <Route exact path="/user/create" component={Create} />
          <Route exact path="/user/takequiz" component={Quiz} />
          <Route exact path="/user/results" component={Results} />
          <Route exact path="/user/takequiz/result" component={Result} />
        </Switch>
      </Container>
    </Router>
  );
}

export default User;
