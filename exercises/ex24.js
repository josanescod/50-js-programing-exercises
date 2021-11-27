"use strict";

/*
Given an array of integers and a number, detect if that list of numbers is a permutation of 1 to the given number.
permutation ([1,2,3,4,5], 5) // true
*/

function permutation(sequence, number) {
  for (let i = 0; i < number; i++) {
    if (sequence.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
}

const arrayIntegers = [1, 2, 3, 4, 5];
const number = 5;

console.log(permutation(arrayIntegers, number));
console.log(permutation([2, 3, 4], number));
