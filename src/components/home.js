import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Dash from './dashbar/dashbar';

class Home extends Component {
  render() {

    return (
      <div className="bodyBack">
      <Dash />
        <div className="col-12 span-4">
            <div className="container">
              <div className="homeTitle col-12">
                YourFeed
              </div>
              <div className="col-12 text-center">
                <Link to="/newUser/">
                  <Button className="col-3">Get Started</Button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;