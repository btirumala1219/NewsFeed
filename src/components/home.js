import React, { Component } from 'react';
import '../App.css';
import Dash from './dashbar/dashbar';
import { Card, Button} from 'react-bootstrap';
import '../App.css';
import ScrapeWrapper from '../scrapers/wrapper';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hackernews: []
    };
  }

  async getfromhackernews() {
    var scrapewrapper = new ScrapeWrapper();
    var hcknewstop10 = await scrapewrapper.get10hackernews();
    this.setState({
        hackernews: hcknewstop10
    })
    //console.log(hcknewstop10);
  }

  
  componentDidMount() {
    this.getfromhackernews();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
  }


  render() {
    const heading = "Home";
    return (
      <div>
      <Dash heading={heading} />
        <div className="col-12 span-4">
            <div className="container">
            {this.state.hackernews.map((article) => (
            <Card style={{ width: '100%', backgroundColor: '#bdd1f0' }}>
                <Card.Body>
                    <Card.Title>{article.source}</Card.Title>
                    <Card.Text>{article.title}
                    </Card.Text>
                    <a href={article.url} target="_blank">
                        <Button variant="primary">Go to article</Button>
                    </a>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>
      </div>
    );
  }
}

export default Home;