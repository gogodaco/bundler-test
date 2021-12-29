'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bold$1 = {exports: {}};

bold$1.exports = function(name) {
  return '<b>' + name + '</b>';
};
var boldTagName = bold$1.exports.boldTagName = 'b';

var bold = bold$1.exports;

const italicTagName = 'i';
function italic(name) {
  return '<i>' + name + '</i>';
}

let isBold = true;

function sayHello(name) {
  const formatter = isBold ? bold : italic;

  isBold = !isBold;

  return `Hello! ${formatter(name)}!`;
}

console.log(sayHello('정환')); // 'Hello! <b>정환</b>!'
console.log(sayHello('정환')); // 'Hello! <i>정환</i>!'
console.log(boldTagName); // 'b'
console.log(italicTagName); // 'i'

exports.sayHello = sayHello;
