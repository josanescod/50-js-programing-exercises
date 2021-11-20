"use strict";
const readLine = require("readline-sync");
/*
Given a number, show the numbers from 1 to the number.
For multiples of 3 print 'buzz'
for multiples of 5 'Lightyear'
For multiples of 3 and 5 print Buzzlightyear.
*/
function buzzLightyear(number) {
  let newArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      newArr.push("BuzzLightYear");
    } else if (i % 3 === 0) {
      newArr.push("Buzz");
    } else if (i % 5 === 0) {
      newArr.push("LightYear");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

// buzzLightyear in 2 parts:
function buzz(number) {
  let result = "";
  if (number % 3 === 0 && number % 5 === 0) {
    result = "Buzzlightyear";
  } else if (number % 3 === 0) {
    result = "Buzz";
  } else if (number % 5 === 0) {
    result = "Lightyear";
  } else {
    return number;
  }
  return result;
}

function print(number) {
  for (let i = 1; i <= number; i++) {
    console.log(buzz(i));
  }
}
const number = readLine.question("Number: ");
//buzzLightyear(number).forEach((e) => console.log(e));
print(number);
