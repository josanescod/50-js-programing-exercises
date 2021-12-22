"use strict";

const readLine = require("readline-sync");
/*
Given a number, return how many circles it has.
A number has a loop when it has a closed circle. The 6 and 9 have 1 loop, the 8 has 2.
*/

function numberOfCircles(number) {
  let circles = 0;
  let numberArr = number.toString().split("");
  for (let num of numberArr) {
    num = parseInt(num);
    if (num === 0 || num === 6 || num === 9) {
      circles++;
    } else if (num === 8) {
      circles += 2;
    }
  }

  return `this number has ${circles} circles.`;
}

const number = readLine.questionInt("Number: ");
console.log(numberOfCircles(number));
