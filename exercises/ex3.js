"use strict";
const readLine = require("readline-sync");
/*
Given a word and a text, return how many times that word appears in the text.
*/

let word = readLine.question("Word: ");
let text = readLine.question("Text: ");
const result = countRepeatedWOrds(word, text);

function countRepeatedWOrds(word, text) {
  const formatWord = word.trim().toLowerCase();
  const formatText = text
    .toLowerCase()
    .trim()
    .replace(/[!¡.,-]/gi, "");

  let result = 0;
  if (formatText.includes(formatWord)) {
    let words = formatText.split(" ");
    //map
    let newMap = {};
    for (let w of words) {
      if (newMap[w]) {
        newMap[w]++;
      } else {
        newMap[w] = 1;
      }
    }
    result = newMap[formatWord];
  } else {
    result = 0;
  }
  return result;
}

console.log(`The word: ${word} is repeated ${result} times in your text.`);
