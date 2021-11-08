"use strict";
const readLine = require("readline-sync");
/*
What is x percent of x number?
*/
const percentage = readLine.question("%: ");
const num = readLine.question("number: ");

function calcPercentage(percentage, num) {
  let operation = num * (percentage / 100);
  let result = `the ${percentage}% of ${num} is: ${operation}`;
  return result;
}

console.log(calcPercentage(percentage, num));
