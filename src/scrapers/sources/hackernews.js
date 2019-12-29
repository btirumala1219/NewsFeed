
/**
 *  JSON structure for standardizing stories
 *  {
 *    source: string
 *    title: string
 *    url: string
 *  } 
*/
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

class HackerNews {
  constructor(props) {
    this.getTop = this.getTop.bind(this);
    this.sol = [];
    this.initsol();
  }

  getTop() {
    return new Promise( function(resolve) {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => { 
        resolve(res.data);
      })
      .catch(err => {
        console.log("Error in get accses" + err);
      });
    })
  }

  initsol(){
    for(var i = 0; i<10; i++){
      this.sol[i] = {
        source: "HackerNews",
        title: "",
        url: ""
      }
    }
  }

  test() {
    console.log(this.state.hotIDs);
  }

  setTopTen(addy){
    return new Promise( function(resolve2) {
      axios
      .get('https://hacker-news.firebaseio.com/v0/item/'+addy+'.json')
      .then(res2 => {
        resolve2(res2.data);
      })
      .catch(err => {
        console.log("Error in get accses" + err);
      });
    })
  }

  async getTen(){
      var sol1 = this.sol;
      //console.log(sol1);
      var topposts = await this.getTop();
      //console.log(topposts);

      for(var i = 0; i<10; i++){
        var topcert = await this.setTopTen(topposts[i]);
        //console.log(topcert);
        sol1[i].title = topcert.title;
        sol1[i].url = topcert.url;
      }
      return sol1;
  }
}

export default HackerNews;
