"use strict";
const readLine = require("readline-sync");
/*
Given two text strings check if they are anagrams of each other.
*/

function normalizeText(text) {
  let normalizedText = text.toLowerCase().trim().split("").sort().join("");
  return normalizedText;
}

function normalizeText2(text) {
  return text.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
}

function isAnagrama(word1, word2) {
  return normalizeText2(word1) === normalizeText2(word2);
}

const word1 = readLine.question("Word 1: ");
const word2 = readLine.question("Word 2: ");
console.log(normalizeText2(word1), normalizeText2(word2));
console.log(isAnagrama(word1, word2));
