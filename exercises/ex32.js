"use strict";

/*
Given an array of numbers, return the array with its numbers squared.
The array must remove any non-numeric content.
*/

function expArray(array) {
  let result = [];
  let arrayOfNumbers = array.filter((element) => typeof element === "number");
  for (let element of arrayOfNumbers) {
    result.push(Math.pow(element, 2));
  }
  return result;
}

function expArray2(array) {
  let arrayOfNumbers = array
    .filter((element) => typeof element === "number")
    .map((element) => Math.pow(element, 2));

  return arrayOfNumbers;
}

const data1 = [2, "hello", 5, 4, "sun", true, 7, null, 3];
const data2 = [
  1,
  "dog",
  2,
  null,
  3,
  undefined,
  4,
  "flower",
  5,
  true,
  [true, false],
  { name: "johnDoe" },
];
const data3 = [5, 6, "test", 7];
const data4 = [12, 56, false, 77, 80, undefined];

console.log(expArray(data1));
console.log(expArray(data2));
console.log(expArray(data3));
console.log(expArray2(data3));
const newArray = expArray2(data4);
console.log(newArray);
