"use strict";
const readLine = require("readline-sync");
/*
Given a text and a search, censor all matches with the word ['CENSORED']
*/

// replaceAll
function replaceText(text, word) {
  if (text === "" || word === "") {
    return "I can't read the text or the search the text or the search cannot be read.";
  } else {
    return text.replaceAll(word, "CENSURED");
  }
}

// split join
function replaceText2(text, word) {
  let result = "";
  if (!text && !word) {
    result =
      "I can't read the text and the search the text or the search cannot be read.";
  } else if (!text) {
    result = "I can't read the text";
  } else if (!word) {
    result = "I can't read the word";
  } else {
    result = text.split(word).join("CENSURED");
  }
  return result;
}

// RegExp
function replaceText3(text, word) {
  let result = "";
  if (!text && !word) {
    result =
      "I can't read the text and the search the text or the search cannot be read.";
  } else if (!text) {
    result = "I can't read the text";
  } else if (!word) {
    result = "I can't read the word";
  } else {
    result = text.split(word).join("CENSURED");
  }
  return result;
}

// RegExp and toLowerCase()
function replaceText4(text, word) {
  let result = "";
  if (!text && !word) {
    result =
      "I can't read the text and the search the text or the search cannot be read.";
  } else if (!text) {
    result = "I can't read the text";
  } else if (!word) {
    result = "I can't read the word";
  } else {
    text = text.toLowerCase();
    word = word.toLowerCase();
    result = text.replace(new RegExp(word, "gi"), "CENSURED");
  }
  return result;
}

const text = readLine.question("text: ");
const word = readLine.question("word: ");

console.log(replaceText(text, word));
console.log(replaceText2(text, word));
console.log(replaceText3(text, word));
console.log(replaceText4(text, word));
