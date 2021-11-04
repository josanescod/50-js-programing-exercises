"use strict";
const readLine = require("readline-sync");

/*
Given a number return its multiplication table completely
*/

function multiTable(numb) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${numb} x ${i} = ${i * numb}\n`;
  }
  return result;
}

let number = Number(readLine.question("Number: "));
console.log(multiTable(number));
