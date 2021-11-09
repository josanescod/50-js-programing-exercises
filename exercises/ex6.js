"use strict";
const readLine = require("readline-sync");
/*
Draw a hollow square with asterisks
*/
const numberOfAsterisks = readLine.question("Number of asterisks: ");

function drawSquare(number) {
  let square = "";
  for (let i = 0; i < number; i++) {
    square += "\n";
    for (let j = 0; j < number; j++) {
      if (i > 0 && j > 0 && i < number - 1 && j < number - 1) {
        square += " ";
      } else {
        square += "*";
      }
    }
  }
  return square;
}

function sideSquare(number) {
  let side = "";
  for (let i = 0; i < number; i++) {
    side += "*";
  }
  return side;
}

function square(number) {
  let draw = sideSquare(number) + "\n";
  let content = "";

  for (let i = 0; i < number - 2; i++) {
    content = "*";
    for (let x = 0; x < number - 2; x++) {
      content += " ";
    }
    content += "*";

    draw += content + "\n";
  }

  draw += sideSquare(number);
  return draw;
}

console.log(drawSquare(numberOfAsterisks));
//console.log(square(5));
