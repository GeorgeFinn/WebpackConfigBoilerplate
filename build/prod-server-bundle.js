module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports={title:"Our first post",author:"George",__content:'<h1 id="long-ago-in-the-kingdom-of-hyrule">Long ago in the Kingdom of Hyrule</h1>\n<p>Our hero wakes up. He is alone.  He must find his sword.</p>\n'}},function(e,t,n){e.exports=n.p+"images/ashton.jpg"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),l=n(3),c=n(1),u=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Gallery"))},i=n(4),s=n(5),f=function(){return o.a.createElement("div",{className:"profile"},o.a.createElement("img",{src:s}),o.a.createElement("h1",null,i.title),o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:i.__content}}))},d=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Article"))},m=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"nav"},o.a.createElement(c.Link,{to:"/"},"Gallery"),o.a.createElement(c.Link,{to:"/about"},"About"),o.a.createElement(c.Link,{to:"/article"},"Article")),o.a.createElement(c.Route,{exact:!0,path:"/",component:u}),o.a.createElement(c.Route,{path:"/about",component:f}),o.a.createElement(c.Route,{path:"/article",component:d}))};t.default=function(){return function(e,t){t.send('<html>\n    <head>\n      <link href="/main.css" rel="stylesheet" />\n    </head>\n    <body>\n      <div id="react-root">'.concat(Object(a.renderToString)(o.a.createElement(l.StaticRouter,{location:e.originalUrl,context:{}},o.a.createElement(m,null))),"</div>\n      <script src='vendor-bundle.js'><\/script>\n      <script src='main-bundle.js'><\/script>\n    </body>\n  </html>"))}}}]);