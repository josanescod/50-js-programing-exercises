"use strict";
/*Given an array of numbers, return the array without duplicate elements, if there is a string remove it from the array.*/
function removeDuplicates(originalArray) {
  let arrayOfNumbers = originalArray.filter(
    (element) => typeof element === "number"
  );
  let arrayNoDuplicates = [...new Set(arrayOfNumbers)];
  return arrayNoDuplicates;
}

function removeDuplicates2(originalArray) {
  originalArray = originalArray.filter((e) => {
    return typeof e === "number";
  });
  let setNoDuplicates = new Set(originalArray);
  return Array.from(setNoDuplicates);
}

const testArray = [1, "cat", 2, 1, 1, "dog", 1, 3, "monkey", 4];
console.log(removeDuplicates(testArray));
console.log(removeDuplicates2(["one", "two", 1, 2, 2, 3, 3, 1, 4, "hello", 5]));
