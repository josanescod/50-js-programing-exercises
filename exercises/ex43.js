"use strict";

/*
Given an array of numbers return the arithmetic average
 */

function averageArray(arr) {
  let average = 0;
  for (let element of arr) {
    average += element;
  }

  average /= arr.length;
  return average;
}

function averageArray2(arr) {
  let sum = arr.reduce((acumulator, currentValue) => {
    return acumulator + currentValue;
  });

  let average = sum / arr.length;
  return average;
}

function getAverage(total, num) {
  return total + num;
}

const arr = [15, 2, 3, 4];
const arr2 = [15, 12, 1, 2, 1, 0, 4];

console.log(averageArray([10, 10, 10, 10]));
console.log(averageArray([2, 4, 6, 8]));
console.log(averageArray([1, 2, 3]));
console.log(arr.reduce(getAverage) / arr.length);
console.log(averageArray2(arr2));
