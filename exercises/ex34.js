"use strict";
/*
Given two numbers, return the results of the basic operations between them (addition, subtraction, product, division)
*/

function calculator(num1, num2) {
  let number1 = parseInt(num1);
  let number2 = parseInt(num2);
  let result = "";

  result = `Addition: ${number1 + number2}
Subtraction: ${number1 - number2}
Product: ${number1 * number2}
Division: ${(number1 / number2).toFixed(2)}`;

  return result;
}

const twoNumberCalculator = calculator(2, 3);
console.log(twoNumberCalculator);
console.log(calculator(5, 5));
