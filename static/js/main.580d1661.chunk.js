(this.webpackJsonpnewsfeed=this.webpackJsonpnewsfeed||[]).push([[0],{18:function(e,t,n){},40:function(e,t,n){e.exports=n(71)},45:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),s=n.n(c),o=(n(45),n(6)),i=n(7),l=n(14),u=n(12),h=n(15),f=n(35),m=n(16),v=(n(18),n(46),n(4)),p=n.n(v),d=(n(48),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-12 navBar"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"navBarText col-2"},"Feed"))))}}]),t}(a.Component)),w=n(72),k=n(73),g=n(17),b=n.n(g),E=function(){function e(t){Object(o.a)(this,e),this.getTop=this.getTop.bind(this),this.sol=[],this.initsol()}return Object(i.a)(e,[{key:"getTop",value:function(){return new Promise((function(e){b.a.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(t){e(t.data)})).catch((function(e){console.log("Error in get accses"+e)}))}))}},{key:"initsol",value:function(){for(var e=0;e<10;e++)this.sol[e]={source:"HackerNews",title:"",url:""}}},{key:"test",value:function(){console.log(this.state.hotIDs)}},{key:"setTopTen",value:function(e){return new Promise((function(t){b.a.get("https://hacker-news.firebaseio.com/v0/item/"+e+".json").then((function(e){t(e.data)})).catch((function(e){console.log("Error in get accses"+e)}))}))}},{key:"getTen",value:function(){var e,t,n,a;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=this.sol,r.next=3,p.a.awrap(this.getTop());case 3:t=r.sent,n=0;case 5:if(!(n<10)){r.next=14;break}return r.next=8,p.a.awrap(this.setTopTen(t[n]));case 8:a=r.sent,e[n].title=a.title,e[n].url=a.url;case 11:n++,r.next=5;break;case 14:return r.abrupt("return",e);case 15:case"end":return r.stop()}}),null,this)}}]),e}(),y=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"get10hackernews",value:function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new E,n.next=3,p.a.awrap(e.getTen());case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}))}}]),e}(),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hackernews:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getfromhackernews",value:function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new y,n.next=3,p.a.awrap(e.get10hackernews());case 3:t=n.sent,this.setState({hackernews:t});case 5:case"end":return n.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.getfromhackernews()}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(e.target.elements)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{heading:"Home"}),r.a.createElement("div",{className:"col-12 span-4"},r.a.createElement("div",{className:"container"},this.state.hackernews.map((function(e){return r.a.createElement(w.a,{style:{width:"100%",backgroundColor:"#bdd1f0"}},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.source),r.a.createElement(w.a.Text,null,e.title),r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement(k.a,{variant:"primary"},"Go to article"))))})))))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hackernews:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getfromhackernews",value:function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new y,n.next=3,p.a.awrap(e.get10hackernews());case 3:t=n.sent,this.setState({hackernews:t});case 5:case"end":return n.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.getfromhackernews();var e=this;b.a.get("http://3.19.32.4/api/activesession/getactivesession").then((function(t){""!==t.data[0].userAcEmail&&e.setState({signedIn:!0})})).catch((function(e){console.log("Error in get accses"+e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(e.target.elements)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{heading:"News Feed"}),this.state.hackernews.map((function(e){return r.a.createElement(w.a,{style:{width:"18rem"}},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.source),r.a.createElement(w.a.Text,null,e.title),r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement(k.a,{variant:"primary"},"Go to article"))))})))}}]),t}(a.Component);n(38).a.initialize("UA-119878427-2");var x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1,userEmail:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:j}),r.a.createElement(m.a,{path:"/feed",component:O})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.580d1661.chunk.js.map