!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(this,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function r(e){if(Array.isArray(e)){for(var n=0,r=Array(e.length);n<e.length;n++)r[n]=e[n];return r}return Array.from(e)}var t=function(e){return e<2100?32:e<2400?24:16},o={RSDF:400,K:t},a=function(e){o=Object.assign.apply(Object,[o].concat(r(e)))},c=function(e,n){return 1/(1+Math.pow(10,(n-e)/(o.RSDF||400)))},i=function(e,n,r){return(o.K||t)(r)*(n-e)},u=function(e){var n=[].concat(e);return n.forEach(function(e){e.rating.length&&(e.avarageRating=e.rating.reduce(function(e,n){return n+=e})/e.rating.length)}),n.forEach(function(e){var r=0,t=0;n.forEach(function(n){e!==n&&(t+=c(e.avarageRating||e.rating,n.avarageRating||n.rating),e.place<n.place?r+=1:e.place==n.place&&(r+=.5))}),r/=n.length-1,t/=n.length-1;var o=i(t,r,e.avarageRating);e.delta=o,e.actualScore=r,e.expectedScore=t}),n};e.exports={processSession:u,configure:a}}])});