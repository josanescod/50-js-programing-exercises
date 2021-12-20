"use strict";
const readLine = require("readline-sync");
/*
Given a string, say which are the letters that appear only once and which is the first.
*/
function characterOnlyOnce(text) {
  let accountant = {};
  text = text.replace(/\s+/g, "").split("");
  let result = [];
  for (let c of text) {
    if (!accountant[c]) {
      accountant[c] = 1;
    } else {
      accountant[c]++;
    }
  }
  for (let property in accountant) {
    if (accountant[property] === 1) {
      result.push(property);
    }
  }
  return [result, result[0]];
}

const text = readLine.question("text: ");
console.log(characterOnlyOnce(text));
