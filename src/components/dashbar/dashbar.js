import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Dash extends Component {
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
        if(res.data[0].userAcEmail === ""){
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
			<Link className="navBarSignIn col" to="/logout/">
        <Button className="navBarSignIn col">
          Sign Out
        </Button>
			</Link>
    }
    else{
			sidebutton = 	
			<Link className="navBarSignIn col" to="/login/">
        <Button >
          Sign In
        </Button>
			</Link>
    }

    return (
      <div>
					<div className="col-12 navBar">
							<div className="row">
							<div className="navBarText col-2">  
									Welcome {this.state.userEmail}
							</div> 
							<div className="navBarHeadText col-8">  
									{this.props.heading}
							</div> 
							{sidebutton}         
							</div>
					</div>
			</div>
    );
  }
}

export default Dash;