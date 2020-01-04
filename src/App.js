import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/login';
import LogOut from './components/logout';
import Home from './components/home';
import NewUser from './components/newUser';
import SourceSelect from './components/sourceSelect';
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
            <Route path='/newUser' component={NewUser} />
            <Route path='/login' component={LogIn} />
            <Route path='/logout' component={LogOut} />
            <Route path='/srcselect' component={SourceSelect} />
            <Route path='/feed' component={NewsFeed} />
        </Router>
      </div>
    );
  }
}

export default App;
