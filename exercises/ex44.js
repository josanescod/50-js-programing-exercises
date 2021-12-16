"use strict";
/*
Given an array of strings, return another with the values ​​that are made up of more than two words.
*/

function twoWords(arr) {
  let newArr = [];
  for (let element of arr) {
    if (element.includes(" ")) newArr.push(element);
  }

  return newArr;
}

const arr = [
  "San Francisco",
  "mountain",
  "ship",
  "sheep",
  "New York",
  "France",
  "San Antonio",
  "China",
];

const arr2 = ["flower", "university", "city", "dog", "pizza", "", "new Castle"];
console.log(twoWords(arr));
console.log(twoWords(arr2));
