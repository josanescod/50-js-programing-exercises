"use strict";
/*
given an array of numbers, return a new array with the odd and even numbers separated.
*/
function oddOrEven(arr) {
  let arraySorted = arr.sort();
  let evenArr = [];
  let oddArr = [];

  for (let number of arraySorted) {
    if (number % 2 === 0) {
      evenArr.push(number);
    } else {
      oddArr.push(number);
    }
  }
  return { evenNumbers: evenArr, oddNumbers: oddArr };
}

function oddOrEven2(arr) {
  return {
    even: arr.filter((num) => num % 2 === 0).sort(),
    odd: arr.filter((num) => num % 2 !== 0).sort(),
  };
}

console.log(oddOrEven([6, 2, 4, 7, 8, 3, 5, 1]));
console.log(oddOrEven2([6, 2, 4, 7, 8, 3, 5, 1]));
