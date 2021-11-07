"use strict";
const readLine = require("readline-sync");
/*
Given a text string, turn it around and reverse the order of its characters without using the language's own methods
*/

let word = readLine.question("Word: ");
function reverseWord(text) {
  let reverseWord = "";
  for (let c of text) {
    reverseWord = c + reverseWord;
  }
  return reverseWord;
}
console.log(reverseWord(word));
