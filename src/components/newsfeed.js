import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import Dash from './dashbar/dashbar';
import { Link } from 'react-router-dom';
import { test } from '../scrapers/wrapper';

class SourceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  componentDidMount() {
    test();
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
    const heading = "News Feed";

    return (
      <div>
        <Dash heading={heading} />
        <Link className="navBarSignIn col" to="/logout/">
            <Button className="navBarSignIn col">
            Sign Out
            </Button>
		</Link>
      </div>
    );
  }
}

export default SourceSelect;