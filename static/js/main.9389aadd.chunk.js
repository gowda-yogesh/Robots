(this.webpackJsonprobofriends3=this.webpackJsonprobofriends3||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(12),n(1)),l=n(2),i=n(4),u=n(3),h=function(e){var t=e.userSearch;return r.a.createElement("input",{type:"search",onChange:t,placeholder:"Robot of your choice ;)"})},m=(n(13),function(e){return r.a.createElement("div",{className:"info"},r.a.createElement("img",{className:"images",alt:"Sorry Not Found",src:"https://robohash.org/".concat(e.id,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("h3",null,e.email)))}),d=(n(14),function(e){var t=e.roboList;return r.a.createElement("div",{className:"for-flex"},t.map((function(e,t){return r.a.createElement(m,{key:e.id,name:e.name,id:e.id,email:e.email})})))}),f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"0px solid black",height:"400px"}},e.children)},p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?a.React.createElement("h1",null," Sorry due to Some Error unable to Load the page "):this.props.children}}]),n}(a.Component),v=(n(15),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).userSearch=function(t){console.log(t.target),console.log(t.target.value),e.setState({searchItem:t.target.value}),console.log(e.state.searchItem.toUpperCase())},e.state={robots:[],searchItem:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}));console.log(t)}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toUpperCase().includes(e.state.searchItem.toUpperCase())}));return console.log(t),0===this.state.robots.length?r.a.createElement("h1",{className:"loading"},"LOADING ::: Please Have Patience Dear ..."):r.a.createElement("div",{className:"letsDecideLater"},r.a.createElement("div",null,r.a.createElement("h1",{className:"h1"},"ROBO:.:::.:FRIENDS"),r.a.createElement(h,{className:"search",userSearch:this.userSearch})),r.a.createElement("br",null),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{roboList:t}))))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9389aadd.chunk.js.map