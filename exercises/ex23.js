"use strict";
const readLine = require("readline-sync");
/*
Given a text string, capitalize the first letter of each word in the string, and return the result.
*/

function capitalize(text) {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

function capitalize2(text) {
  let newText = "";
  for (let l in text) {
    if (text[l - 1] === " " || l === "0") {
      newText += text[l].toUpperCase();
    } else {
      newText += text[l];
    }
  }

  return newText;
}

function capitalize3(text) {
  let newText = [];
  for (let w of text.split(" ")) {
    newText.push(w[0].toUpperCase() + w.substring(1));
  }
  return newText.join(" ");
}

const text = readLine.question("Text: ");
console.log(capitalize(text));
console.log(capitalize2(text));
console.log(capitalize3(text));
