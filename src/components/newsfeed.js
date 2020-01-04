import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import Dash from './dashbar/dashbar';
import ScrapeWrapper from '../scrapers/wrapper';

class NewsFeed extends Component {
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
    var self = this;
    axios
    .get('http://3.19.32.4/api/activesession/getactivesession')
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

        {this.state.hackernews.map((article) => (
        <Card style={{ width: '18rem' }}>
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
    );
  }
}

export default NewsFeed;