"use strict";
/*
given 2 arrays return an array with only the common elements between both
*/

const array1 = [4, 5, 6, 7, 8, 9];
const array2 = [7, 8, 9, 7, 5, 8, 8, 9];
const array3 = ["Jeff", "Laura", "Lorena", "Michael", "William"];
const array4 = ["Jhon", "Steve", "Laura", "George", "Jeff"];

function returnCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let value of arr1) {
    for (let element of arr2) {
      if (value === element && !commonElements.includes(value))
        commonElements.push(value);
    }
  }
  return commonElements;
}

function returnFilterElements(arr1, arr2) {
  const filtered = arr1.filter((value) => {
    return arr2.includes(value);
  });
  return filtered;
}

console.log(returnCommonElements(array1, array2));
console.log(returnFilterElements(array1, array2));
console.log(returnCommonElements(array3, array4));
console.log(returnFilterElements(array3, array4));
