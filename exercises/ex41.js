"use strict";
const readLine = require("readline-sync");
/*
Given a number, show a triangle of asterisks * with that number of rows.
 */

function printTriangle(number) {
  let half = Math.floor(number - 1);
  let result = "";
  //total rows
  for (let row = 0; row < number; row++) {
    let level = "";
    //print * & spaces
    for (let column = 0; column < 2 * number - 1; column++) {
      if (half - row <= column && half + row >= column) {
        level += "*";
      } else {
        level += " ";
      }
    }
    result += level + "\n";
  }
  return result;
}

const number = readLine.questionInt("input: ");
console.log(printTriangle(number));
