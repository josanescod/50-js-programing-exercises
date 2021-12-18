"use strict";
const readLine = require("readline-sync");
/*
Given a string return all possible substrings
*/

function allSubStrings(word) {
  let subStrings = [];
  for (let c in word) {
    let start = parseInt(c);

    for (let i = 0; i <= word.length - start; i++) {
      let finish = parseInt(i) + parseInt(start);

      subStrings.push(word.substring(start, finish));
    }
  }
  return subStrings.filter((element) => element.length >= 1);
}
const word = readLine.question("word: ");
console.log(allSubStrings(word));
