import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import Dash from './dashbar/dashbar';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctLogin: false,
      entered: false,
      userEmail: '',
      error: '',
      resp: '',
      signedIn: false
    };
  }

  componentDidMount() {
    // check if we are already logged in
    var self = this;
    axios
    .get('http://localhost:8082/api/activesession/getactivesession')
    .then(res => {
      if(res.data[0].userAcEmail !== ''){
        self.setState({
          signedIn: true
        })
      }
    })
    .catch(err => {
      console.log("Error in get accses" + err);
    });
  }

  handleSubmit(event) {
    this.setState({
      entered: true,
      userEmail: event.target.elements.formNUEmail.value
    });
    this.validLogIn(event.target.elements.formNUEmail.value, event.target.elements.formNUPassword.value);
  }

  validLogIn(email, pass){
    var self = this;
    axios
    .get('http://localhost:8082/api/user/User/')
    .then(res => {
      res.data.forEach(function(loginval){
        if(loginval.userEmail === email && loginval.userPass === pass){
          self.updateActiveSession(loginval.userEmail, loginval._id);
          self.setState({
            correctLogin: true
          })
        }
      })
    })
    .catch(err => {
      console.log("Error logging In" + err);
    });
  }

  updateActiveSession(email, id){
    const data = {
      "userAcEmail": email,
    };

    axios
    .get('http://localhost:8082/api/activesession/getactivesession')
    .then(res => {
      axios
      .put('http://localhost:8082/api/activesession/' + res.data[0]._id, data)
      .then(res => {
        console.log(res);
        window.location.reload(false);
      })
      .catch(err => {
        console.log("Error in put" + err);
      })
    })
    .catch(err => {
      console.log("Error in get accses" + err);
    });
  }

  render() {
    let respMes;
    const heading = "Log In Page";

    if(this.state.signedIn){
      respMes = <div>
        <div>You are signed in</div>
        <Link className="navBarSignIn col" to="/srcselect/">
          <Button >
            Select Source
          </Button>
        </Link>
        </div>
    }
    else{
      if(this.state.entered){
        if(this.state.correctLogin){
          respMes = <div>
            <div>Logged In!<div>UserName = {this.state.userEmail}</div></div>
            <Link className="navBarSignIn col" to="/srcselect/">
              <Button >
                Select Source
              </Button>
            </Link>
          </div>
            
        }
        else{
          respMes = <div>
                      <div>Incorrect Log In</div>
                      <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group controlId="formNUEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formNUPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Log In
                        </Button>
                      </Form>
                    </div>
        }
        
      }
      else {
        respMes = <Form onSubmit={(e) => this.handleSubmit(e)}>
                      <Form.Group controlId="formNUEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group controlId="formNUPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Log In
                      </Button>
                    </Form>
      }
    }

    return (
      <div>
        <Dash heading={heading} />
        <div className="container">
          {respMes}
        </div>
      </div>
    );
  }
}

export default LogIn;