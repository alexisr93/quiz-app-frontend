import React from 'react';
import './App.css';
import User from './User/User';
import Admin from './Admin/Admin';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
