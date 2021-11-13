"use strict";
const readLine = require("readline-sync");
/*
Given a number, show a staircase with "[-]" steps using the number for the stair levels.
*/

function createStair(num) {
  let finalStair = "";
  for (let i = 1; i <= num; i++) {
    let stair = "";
    for (let j = 1; j <= i; j++) {
      stair += `[${i}]`;
    }
    finalStair += stair + "\n";
  }
  return finalStair;
}

function stair(num, level = 1) {
  let teststair = "";
  for (let i = 1; i <= level; i++) {
    teststair += `[${level}]`;
  }
  console.log(teststair);
  level++;
  num--;
  // base case
  if (num > 0) {
    stair(num, level);
  }
}
const num = readLine.question("number: ");
console.log(createStair(num));
stair(num);
