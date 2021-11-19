"use strict";
const readLine = require("readline-sync");
/*
Given a text string, return how many vowels 'a-e-i-o-u' have.
*/

function numberVowels(text) {
  let normalizeText = text.toLowerCase();
  let charMap = {};
  const vowels = ["a", "e", "i", "o", "u"];
  let numberVowels = 0;
  for (let char of normalizeText) {
    if (vowels.includes(char)) {
      !charMap[char] ? (charMap[char] = 1) : charMap[char]++;
      numberVowels++;
    }
  }
  return numberVowels && charMap ? [numberVowels, charMap] : [0, ""];
}

//regexp
function numberVowelsRegexp(text) {
  let match = text.match(/[aeiou]/gi);
  return match
    ? { vowels: match, length: match.length }
    : { vowels: [""], length: 0 };
}

const text = readLine.question("Write a text: ");

let result = numberVowels(text);
let result2 = numberVowelsRegexp(text);
console.log(`the text contains: ${result[0]} vowels, `, result[1]);

console.log(`the text contains: ${result2.length} vowels, ${result2.vowels}`);
