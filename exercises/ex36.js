"use strict";
const readLine = require("readline-sync");
/*
Given a text return how many consonants and vowels it has.
*/

function countLetters(text) {
  const regexVowels = /[aeiou]/;
  const regexConsonants = /[bcdfghjklmnpqrstvwxys]/;
  let numberOfVowels = 0,
    numberOfConsonants = 0,
    normalizedText = "";
  normalizedText = text.toLowerCase().split("");
  for (let letter of normalizedText) {
    if (regexVowels.test(letter)) {
      numberOfVowels++;
    } else if (regexConsonants.test(letter)) {
      numberOfConsonants++;
    }
  }
  return (normalizedText = `consonants: ${numberOfConsonants}
vowels: ${numberOfVowels}
  `);
}

function countLetters2(text) {
  let consonants = 0,
    vowels = 0,
    textNormalized = "";
  textNormalized = text
    .split("")
    .filter((letter) => /[aeiou\w]/gi.test(letter) && isNaN(letter))
    .join("");
  for (let letter of textNormalized) {
    if (/[aeiou]/gi.test(letter)) {
      vowels++;
    } else {
      consonants++;
    }
  }
  return [consonants, vowels];
}
const text = readLine.question("Text: ");
console.log(countLetters(text));
let test2text = countLetters2(text);
console.log(`consonants: ${test2text[0]}
vowels: ${test2text[1]}
`);
