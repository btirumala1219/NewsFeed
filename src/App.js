import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import { Button } from 'react-bootstrap';
import NewUser from './components/newUser';
import LogIn from './components/login';
import axios from 'axios';
import { Link } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userEmail: '',
    };
  }

  componentDidMount(){
    this.areWeLoggedIn();
  }

  areWeLoggedIn(){
    axios
      .get('http://localhost:8082/api/activesession/getactivesession')
      .then(res => {
        console.log(res.data[0].userAcEmail);
        if(res.data[0].userAcEmail == ""){
          this.setState({
            loggedIn: false,
            userEmail: "",
          });
        }
        else{
          this.setState({
            loggedIn: true,
            userEmail: res.data[0].userAcEmail,
          });
        }
      })
      .catch(err => {
        console.log("Error ins making new Uss  qer!");
      })
  }

  render() {
    let sidebutton;

    if(this.state.loggedIn){
      sidebutton = 
      <Button className="navBarSignIn col">
        Logout
      </Button>
    }
    else{
      sidebutton = 
      <Link to="/login/">
        <Button className="navBarSignIn col">
          Sign In
        </Button>
      </Link>
    }

    return (
      <div className="bodyBack">
        <div className="col-12 navBar">
          <div className="row">
            <div className="navBarText col-11">  
              Welcome
            </div> 
            {sidebutton}         
          </div>
        </div>
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/newUser' component={NewUser} />
            <Route path='/login' component={LogIn} />
        </Router>
      </div>
    );
  }
}

export default App;
