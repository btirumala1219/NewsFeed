import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      userEmail: '',
      error: ''
    };
  }

  handleSubmit(event) {
    this.setState({
      submitted: true,
      userEmail: event.target.elements.formNUEmail.value
    });

    const data = {
      "userEmail": event.target.elements.formNUEmail.value,
      "userPass": event.target.elements.formNUPassword.value,
    };

    axios
      .post('http://localhost:8082/api/user/newuser', data)
      .then(res => {
      })
      .catch(err => {
        console.log("Error in making new User!");
      })
  }

  render() {
    let submitForm;

    if(this.state.submitted){
      submitForm = <div>Account Created!<div>UserName = {this.state.userEmail}</div></div>
    }
    else {
      submitForm = <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group controlId="formNUEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formNUPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Create Account
                    </Button>
                  </Form>
    }

    return (
      <div className="container">
        {submitForm}
      </div>
    );
  }
}

export default NewUser;