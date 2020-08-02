import React from 'react';
import './App.css';
import Quiz from './Quiz/Quiz';
import MainNav from './MainNav';
import User from './User/User';
import Admin from './Admin/Admin';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login </Link>
        <Link to="/admin">Admin </Link>
        <Link to="/user">User </Link>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
