"use strict";

/*
Given an array of numbers, return the highest and lowest value
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return {
    max: array[0],
    min: array[array.length - 1],
  };
}

function maxMin(array) {
  let orderedArray = array.sort((a, b) => a - b);
  return [orderedArray[0], orderedArray[orderedArray.length - 1]];
}

function maxMin2(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return `
  higher value = ${max}
  lower value = ${min}
  `;
}

const array1 = [2, 4, 6, 8, 10];
const array2 = [5, 0, 3, 8, 55, -7];
const array3 = [29, 41, 16, 8, 107, 65, 39, 0, -4, 15, 19];

console.log(maxMin(array1));
console.log(maxMin2(array2));

const maxMin3 = bubbleSort(array3);
console.log(maxMin3.max, maxMin3.min);
