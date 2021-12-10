"use strict";
/*
Given a text or an array, return the element that appears the most times.
*/

function showMajorityElement(data) {
  let moreFrequently = "";
  let totalValue = 0;

  if (typeof data === "string") {
    data = data.split(" ");
  }

  const newMap = {};

  for (let element of data) {
    if (newMap[element]) {
      newMap[element]++;
    } else {
      newMap[element] = 1;
    }
  }

  for (let element in newMap) {
    if (newMap[element] > totalValue) {
      totalValue = newMap[element];
      moreFrequently = element;
    }
  }
  return `the most frequent element is ${moreFrequently}`;
}

const testArray = [1, 2, 3, 4, 1, 0, 1, 10, 10, 7, 10, 3, 10];
const text = "dog horse cat dog horse water horse";
console.log(showMajorityElement(testArray));
console.log(showMajorityElement(text));
