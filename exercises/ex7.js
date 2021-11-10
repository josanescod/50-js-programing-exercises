"use strict";
const readLine = require("readline-sync");
/*
 * Given two numbers, return how many odd numbers there are between them
 * @param {Number} num1 the first number
 * @param {Number} num2 the second number
 * return {Number} number of odd numbers between num1 and num2
 *
 */
function oddNumbers(num1, num2) {
  let counter = 0;
  while (num1 < num2) {
    if (num1 % 2 !== 0) counter++;
    num1++;
  }
  return counter;
}

const number1 = Number(readLine.question("Number1: "));
const number2 = Number(readLine.question("Number2: "));
console.log(
  `Number of odd numbers between ${number1}-${number2}: ${oddNumbers(
    number1,
    number2
  )}`
);
