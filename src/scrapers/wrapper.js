/**
 *  JSON structure for standardizing stories
 *  {
 *    source: string
 *    title: string
 *    url: string
 *  } 
*/

import HackerNews from './sources/hackernews';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

class ScrapeWrapper {

    async get10hackernews(){
        var hcknews = new HackerNews();
        var sol = await hcknews.getTen();
        //console.log(sol);
        return sol;
    }

}

export default ScrapeWrapper;
