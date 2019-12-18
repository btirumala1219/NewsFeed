import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
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
        </Router>
      </div>
    );
  }
}

export default App;
