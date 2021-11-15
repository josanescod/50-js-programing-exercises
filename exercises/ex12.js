"use strict";
const readLine = require("readline-sync");
/*
Given a number show all the numbers from that to 0 of 8 in 8.
*/

function returnNumbers(number) {
  let numbers = `--- ${number} to 0 ---\n`;
  while (number > 0) {
    numbers += `- nº${number}` + "\n";
    number -= 8;
  }
  numbers += `--- END ---`;
  return numbers;
}

const number = readLine.question("Write a number: ");
console.log(returnNumbers(number));
