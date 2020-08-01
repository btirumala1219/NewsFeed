import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import NewsFeed from './components/newsfeed';
import ReactGA from 'react-ga';

const trackingId = "UA-119878427-2";

ReactGA.initialize(trackingId);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userEmail: '',
    };
  }

  render() {

    return (
      <div>
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/feed' component={NewsFeed} />
        </Router>
      </div>
    );
  }
}

export default App;
