(this["webpackJsonpaviso-test"]=this["webpackJsonpaviso-test"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(2),c=a.n(l),r=(a(9),a(3)),i=(a(10),{Class1:[{Name:"Tony",Maths:80,Science:50,English:80,Geography:70,History:50,Status:"pass"},{Name:"Samuel",Maths:80,Science:80,English:80,Geography:80,History:80,Status:"fail"}],Class2:[{Name:"John",Maths:50,Science:50,English:40,Geography:60,History:30,Status:"fail"},{Name:"Tinkle",Maths:25,Science:40,English:30,Geography:50,History:30,Status:"fail"}],Class3:[{Name:"Angel",Maths:80,Science:70,English:80,Geography:70,History:50,Status:"pass"}]});function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,a=e.data,n=void 0===a?[]:a,l=e.className,c=e.onRowClick,r=void 0===c?function(){}:c,i=Object.keys(n[0]);return s.a.createElement("div",{className:"table-container ".concat(l)},t&&s.a.createElement("h2",null,t),s.a.createElement("table",null,s.a.createElement("thead",null,i.map((function(e){return s.a.createElement("th",{key:e},e)}))),s.a.createElement("tbody",null,n.map((function(e){var t=Object.values(e);return s.a.createElement("tr",{key:e.name,onClick:function(t){return function(e,t){t.stopPropagation(),r(e.Class)}(e,t)}},t.map((function(e){return s.a.createElement("td",null,e)})))})))))}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,a){var n={Class:a},s=e[a];n.Students=s.length;var l=s.filter((function(e){return"pass"===e.Status}));return n.Pass=l.length,n.Fail=s.length-l.length,t.push(n),t}),[])};var h=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],l=t[1];return s.a.createElement("div",{className:"app"},s.a.createElement(o,{title:"Class Table",className:"class-table",data:u(i),onRowClick:function(e){l(e)}}),a&&s.a.createElement(o,{title:"Student Table (".concat(a,")"),className:"student-table",data:i[a]}))};c.a.render(s.a.createElement(h,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.6e600d5d.chunk.js.map