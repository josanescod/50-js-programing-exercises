"use strict";
const readLine = require("readline-sync");
/*
give an integer, invert it and return the integer
*/
function reverseNumber(number) {
  let reverseNumber =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  return reverseNumber;
}
const num = readLine.question("number: ");
console.log(reverseNumber(num));
