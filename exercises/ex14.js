"use strict";
const readLine = require("readline-sync");
/*
Given a string and a number repeat the string as many times as the number indicates.
*/

function repeatme(text, number) {
  let repeatedText = "";
  while (number > 0) {
    repeatedText += text;
    number--;
  }
  return repeatedText;
}

//prototype function
String.prototype.repeatme = function (number) {
  let repeatedText = "";
  while (number > 0) {
    repeatedText += this;
    number--;
  }
  return repeatedText;
};

const text = readLine.question("Write a text: ");
const number = readLine.question("Write a number: ");
console.log(repeatme(text, number));
console.log(text.repeatme(3));
