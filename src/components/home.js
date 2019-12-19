import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
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
    );
  }
}

export default Home;