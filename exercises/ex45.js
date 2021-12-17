"use strict";
/*
Given an array of students (name and grade) show how many students have passed and how many have failed.
 */

function studentGrades(arr) {
  let approved = 0;
  for (let element of arr) {
    if (element >= 5) {
      approved++;
    }
  }
  return `
approved students: ${approved}
suspended students: ${arr.length - approved}`;
}

function studentGrades2(arr) {
  let approved = 0;
  for (let student of arr) {
    if (student[1] >= 5) {
      approved++;
    }
  }
  return `
approved students: ${approved}
suspended students: ${arr.length - approved}`;
}

console.log(studentGrades([5, 7, 4.5, 3, 10, 7, 6, 8, 5.5, 7.5]));
console.log(
  studentGrades2([
    ["Chuck", 10],
    ["Maria", 4],
    ["Daniel", 7],
    ["Anna", 4.5],
    ["Tom", 3],
    ["Susana", 6],
  ])
);
