"use strict";
const readLine = require("readline-sync");
/*
given two numbers indicate which is greater and which is smallest
*/

function compareNumbers(num1, num2) {
  let result;

  if (num1 === num2) {
    result = `the numbers ${num1} = ${num2} are the same.`;
  } else if (num1 > num2) {
    result = `The greater number is ${num1}\nthe smallest number is ${num2}`;
  } else if (num1 < num2) {
    result = `The greater number is ${num2}\nthe smallest number is ${num1}`;
  } else {
    result = `enter correct numbers`;
  }
  return result;
}

const number1 = parseInt(readLine.question("number1: "));
const number2 = parseInt(readLine.question("number2: "));

console.log(compareNumbers(number1, number2));
