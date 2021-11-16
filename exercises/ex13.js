"use strict";
/*
Divide an array into x elements.
Given an array, divide it into as many sub arrays as necessary based on a number that indicates its size.
 */
const initialArray = [7, 8, 9, 10];

function divideArray(someArray, number) {
  let finalArray = [];

  for (let element of someArray) {
    //last array inside finalArray
    let last = finalArray[finalArray.length - 1];
    //if last array does not exist  or last array has n number of elements
    if (!last || last.length === number) {
      finalArray.push([element]);
    } else {
      last.push(element);
    }
  }
  return finalArray;
}
console.log(divideArray(initialArray, 2));
