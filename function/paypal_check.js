!function(e,o){for(var n in o)e[n]=o[n]}(exports,function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";o.handler=function(e,o,n){console.log("Received event:",JSON.stringify(e,null,2)),n(null,{statusCode:"200"});var t="cmd=_notify-validate&"+e.body;console.log("Verifying"),console.log(t),request({url:"https://www.sandbox.paypal.com/cgi-bin/webscr",method:"POST",headers:{Connection:"close"},body:t,strictSSL:!0,rejectUnauthorized:!1,requestCert:!0,agent:!1},function(e,o,n){e||200!==o.statusCode?(console.log("Unexpected response!"),console.log(o)):"VERIFIED"===n.substring(0,8)?console.log("Verified IPN!"):"INVALID"===n.substring(0,7)?console.log("Invalid IPN!"):(console.log("Unexpected response body!"),console.log(n))})}}]));