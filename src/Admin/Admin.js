import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminNav from './AdminNav';
import QuizList from './QuizList';
import ViewQuiz from './ViewQuiz';
import Create from './Create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Admin() {
  return (
    <Router>
      <AdminNav/>
      <Container>
      <Switch>
        <Route path="/admin/home">
          <>
          </>
        </Route>
        <Route path="/admin/quizzes">
          <QuizList/>
        </Route>
        <Route path="/admin/create">
          <Create/>
        </Route>
    </Switch>
      </Container>
    </Router>
  );
}

export default Admin;
