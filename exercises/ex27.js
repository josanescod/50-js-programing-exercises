"use strict";
const readLine = require("readline-sync");
/*Given a number, show how many years months and days are equivalent.*/

function calculateDays(days) {
  let years = Math.floor(days / 365);
  let remaining_days = days % 365;
  let months = Math.floor(remaining_days / 30);
  remaining_days = remaining_days % 30;
  return `Equivalent to ${years} years, ${months} months, and ${remaining_days} days.`;
}

const input = readLine.question("Number: ");
console.log(calculateDays(input));
