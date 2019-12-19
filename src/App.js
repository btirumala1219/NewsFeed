import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import { Button } from 'react-bootstrap';
import NewUser from './components/newUser';

class App extends Component {
  render() {
    return (
      <div className="bodyBack">
        <div className="col-12 navBar">
          <div className="row">
            <div className="navBarText col-11">  
              Welcome
            </div>
            <Button className="navBarSignIn col">
              Sign In
            </Button>
          </div>
        </div>
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/newUser' component={NewUser} />
        </Router>
      </div>
    );
  }
}

export default App;
