
/**
 *  JSON structure for standardizing stories
 *  {
 *    source: string
 *    title: string
 *    url: string
 *  } 
 * for(var i = 0; i<10; i++){
        axios
        .get('https://hacker-news.firebaseio.com/v0/item/'+res.data[i]+'.json')
        .then(res2 => {
          extraction[i].source = "HackerNews";
          extraction[i].title = res2.title;
          extraction[i].url = res2.url;
        })
        .catch(err => {
          console.log("Error in get accses" + err);
        });
      }
 */

import axios from 'axios';

var extraction;

function extract() {
  axios
		.get('https://hacker-news.firebaseio.com/v0/topstories.json')
		.then(res => {
      console.log(res);
		})
		.catch(err => {
			console.log("Error in get accses" + err);
		});
}
export function testhckn() {
  extract();
  console.log(extraction);
};