import React, { Component } from 'react';
import '../App.css';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


    return (
      <div>
					<div className="col-12 navBar">
							<div className="row">
							<div className="navBarText col-2">  
									Feed
							</div>    
							</div>
					</div>
			</div>
    );
  }
}

export default Dash;