"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[916,472],{472:function(t,e,n){n.r(e);var r=n(689),i=n(87),o=n(184);e.default=function(t){var e=t.movies,n=(t.title,(0,r.TH)());return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title||t.name})},t.id)}))})})}},916:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),i=n(439),o=n(757),u=n.n(o),c=n(791),a=n(87),s=n(472),l="Movies_search_input__u1cbf",f="Movies_search_button__42kJg",h=n(184),d=function(){var t,e=(0,c.useState)([]),n=(0,i.Z)(e,2),o=n[0],d=n[1],v=(0,a.lr)(),p=(0,i.Z)(v,2),_=p[0],m=p[1],S=null!==(t=_.get("title"))&&void 0!==t?t:"",x={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies1",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY)}};function E(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(S,"&include_adult=false&language=en-US&page=1"),x).then((function(t){return t.json()})).then((function(t){return d(t.results)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,c.useEffect)((function(){E()}),[]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{type:"text",placeholder:"Search movie title...",value:S,onChange:function(t){return function(t){m(""!==t?{title:t}:{})}(t.target.value)},className:l}),(0,h.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),E()},className:f,children:"Search"}),(0,h.jsx)(s.default,{movies:o,title:S})]})}},861:function(t,e,n){function r(t,e,n,r,i,o,u){try{var c=t[o](u),a=c.value}catch(s){return void n(s)}c.done?e(a):Promise.resolve(a).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var u=t.apply(e,n);function c(t){r(u,i,o,c,a,"next",t)}function a(t){r(u,i,o,c,a,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=916.c01e7143.chunk.js.map