"use strict";

/*
Given two numbers draw a random number between them
*/

function getRandomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(2, 5));
console.log(getRandomNumber(10, 15));
console.log(getRandomNumber(1, 100));
console.log(getRandomNumber(1, 2));
