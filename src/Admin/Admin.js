import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminNav from './AdminNav';
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
        <Route exact path="/admin/">
          <>
            Admin/Home
          </>
        </Route>
    </Switch>
      </Container>
    </Router>
  );
}

export default Admin;
