"use strict";
/*
Given an array, create another with the first and last elements of the original
*/

function firstLastValues(dataArray) {
  let newArray = [];
  newArray.push(dataArray[0], dataArray[dataArray.length - 1]);
  return newArray;
}

console.log(firstLastValues([100, 200, 300, 780]));
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(firstLastValues(testArray));
console.log(firstLastValues(["bike", "cat", "dog", "laptop", "pants", "car"]));
