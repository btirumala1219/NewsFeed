import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Dash from './dashbar/dashbar';
import axios from 'axios';

class LogOut extends Component {

	componentDidMount(){
		const data = {
			"userAcEmail": "",
		};

		axios
		.get('http://localhost:8082/api/activesession/getactivesession')
		.then(res => {
			axios
			.put('http://localhost:8082/api/activesession/' + res.data[0]._id, data)
			.then(res => {
				console.log(res);
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

    return (
      <div className="bodyBack">
      <Dash />
        <div className="col-12 span-4">
            <div className="container">
              <div className="homeTitle col-12">
                You are logged out. 
              </div>
              <div className="col-12 text-center">
                <Link to="/">
                  <Button className="col-3">Get Return to Home</Button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default LogOut;