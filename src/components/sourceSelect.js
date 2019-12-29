import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import Dash from './dashbar/dashbar';
import { Link } from 'react-router-dom';

class SourceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  componentDidMount() {
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
    event.preventDefault();
    console.log(event.target.elements);
  }

  render() {
    const heading = "Source Selection Page";

    return (
      <div>
        <Dash heading={heading} />
        <div className="container">
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group controlId="srcshack">
              <Form.Label>HackerNews</Form.Label>
              <Form.Control type="checkbox" />
            </Form.Group>
            <Form.Group controlId="srcsothe">
              <Form.Label>Other</Form.Label>
              <Form.Control type="checkbox" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <Link className="navBarSignIn col" to="/feed/">
          <Button >
            Go to Feed
          </Button>
        </Link>
      </div>
    );
  }
}

export default SourceSelect;