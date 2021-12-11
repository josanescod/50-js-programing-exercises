"use strict";
const readLine = require("readline-sync");
/*
Given a text check that it is a valid email
 */

function checkEmail(email) {
  const pattern = /^\w+@\w+\.\w+$/gi;
  return pattern.test(email);
}

const email = readLine.question("Enter your email: ");
console.log(checkEmail(email));
