"use strict";
const readLine = require("readline-sync");
/*
Given a number show its fibonacci series. Not recursion
*/

function fibonacci(num) {
  let serie = [0, 1];
  for (let i = 2; i <= num; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return [serie, serie[num]];
}
const input = parseInt(readLine.question("input: "));

console.log(`Serie: ${fibonacci(input)[0]}\nTotal: ${fibonacci(input)[1]}`);
