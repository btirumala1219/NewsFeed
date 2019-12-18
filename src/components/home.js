import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
      /*
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
      */
  };


  render() {

    return (
      <div>
          Home Page Bruh
      </div>
    );
  }
}

export default Home;