(this.webpackJsonpuntitled2=this.webpackJsonpuntitled2||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(5),n=a(6),s=a(10),i=a(9),l=a(1),j=a.n(l),u=a(7),o=a.n(u),d=a(3),b=a.n(d),h=a(8),p=a(4);function m(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],n=Object(l.useState)([]),s=Object(p.a)(n,2),i=s[0],j=s[1],u=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.themoviedb.org/3/search/movie?api_key=5d26ee44346e8b6147a823f014582d0d&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(c);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,j(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"form",onSubmit:u,children:[Object(c.jsx)("input",{className:"input",required:!0,type:"text",name:"query",placeholder:"Iron Man, Titanic etc...",value:a,onChange:function(e){return r(e.target.value)}}),Object(c.jsx)("button",{className:"button",type:"submit",children:" Search"})]}),Object(c.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),Object(c.jsxs)("div",{className:"card--content",children:[Object(c.jsx)("h3",{className:"card--title",children:e.title}),Object(c.jsx)("p",{children:Object(c.jsxs)("small",{children:["RELEASE DATE: ",e.release_date]})}),Object(c.jsx)("p",{children:Object(c.jsxs)("small",{children:["RATING: ",e.vote_average,"/10"]})}),Object(c.jsxs)("p",{className:"card--desc",children:[" Summary: ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," ",e.overview]})]})]},e.id)}))})]})}var O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"title",children:"Movie Search"}),Object(c.jsx)("h3",{children:"Made by Ohm Srivastava using the TMDB API"}),Object(c.jsx)(m,{})]})}}]),a}(j.a.Component);o.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dc9b0610.chunk.js.map