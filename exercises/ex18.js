"use strict";
const readLine = require("readline-sync");
/*
Given a number show all its divisional numbers

*/

function checkDivider(number, divider) {
  if (number % divider === 0) {
    return divider;
  }
  return 0;
}

function printDividers(number) {
  for (let i = 1; i <= number; i++) {
    if (checkDivider(number, i)) console.log(checkDivider(number, i));
  }
}
const number = readLine.question("Number: ");
printDividers(number);
