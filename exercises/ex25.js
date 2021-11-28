"use strict";
const readLine = require("readline-sync");
/*Given a string, put it in uppercase or lowercase depending on whether there are more uppercase or lowercase letters by default in the string.*/

function upperLower(text) {
  let numberCapitalChar = 0;
  let numberLowerCaseChar = 0;
  let normalizedText = text.split(" ").join("");
  for (let c of normalizedText) {
    if (c === c.toUpperCase()) {
      numberCapitalChar++;
    } else {
      numberLowerCaseChar++;
    }
  }
  return numberCapitalChar === numberLowerCaseChar
    ? text
    : numberCapitalChar > numberLowerCaseChar
    ? text.toUpperCase()
    : text.toLowerCase();
}

//test method
function upperLower2(text) {
  let numberCapitalChar = 0;
  let numberLowerCaseChar = 0;
  for (let c of text) {
    if (/[A-Z]/.test(c)) {
      numberCapitalChar++;
    } else if (/[a-z]/.test(c)) {
      numberLowerCaseChar++;
    }
  }
  return numberCapitalChar === numberLowerCaseChar
    ? text
    : numberCapitalChar > numberLowerCaseChar
    ? text.toUpperCase()
    : text.toLowerCase();
}

const text = readLine.question("text: ");
console.log(upperLower(text));
console.log(upperLower2(text));
