"use strict";
const readLine = require("readline-sync");
/*
Given a number, indicate if it is a palindromic number or not.
Palindromic numbers are read the same from left to right and vice versa.
*/
function palindromic(number) {
  let reversedNumber = parseInt(number.toString().split("").reverse().join(""));
  return number === reversedNumber;
}
const input = parseInt(readLine.question("Number: "));
console.log(palindromic(input));
