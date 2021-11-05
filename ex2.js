"use strict";
const readLine = require("readline-sync");
/*
Given a text string check if it is a palindrome or not
*/

function checkPalindrome(word) {
  let reverseWord = [...word].reverse();
  reverseWord = reverseWord.join("");
  return word === reverseWord;
}

let word = readLine.question("Word: ");
console.log("it's a palindrome? " + checkPalindrome(word));
