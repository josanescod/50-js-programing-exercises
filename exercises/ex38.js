"use strict";
const readLine = require("readline-sync");
/*
Given a number, show a list  of the powers of 2 of all natural numbers until reaching it.
*/

function showPowerof2(number) {
  let listNumbers = [];
  for (let i = 0; i <= number; i++) {
    listNumbers.push(Math.pow(i, 2));
  }
  return listNumbers;
}

function printNumbers(array) {
  for (let num of array) {
    console.log(num);
  }
}
const num = readLine.questionInt("Number: ");
console.log(showPowerof2(num));
let listofNumbers = showPowerof2(num);
printNumbers(listofNumbers);
