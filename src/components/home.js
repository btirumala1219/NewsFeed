import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {

  };


  render() {

    return (
      <div className="homeBody col-12 span-4">
          <div className="container">
            <div className="homeTitle col-12">
              YourFeed
            </div>
            <div className="col-12 text-center">
              <Button className="">Get Started</Button>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;