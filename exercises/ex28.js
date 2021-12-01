"use strict";
const readLine = require("readline-sync");
/*
Given a number return its factorial
*/

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function factorial2(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

const input = readLine.question("Number: ");
console.log(factorial(input));
console.log(factorial2(input));
