"use strict";
const readLine = require("readline-sync");
/*
Given a text string, return the most used character.
*/

function mostCommonChar(text) {
  let normalizeText = text.toLowerCase().replace(/\s/g, "");
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of normalizeText) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(charMap);
  return maxChar;
}

const text = readLine.question("Write a text: ");
console.log(`most common char is: ${mostCommonChar(text)}`);
