const readLine = require("readline-sync");
/*
Given a number return its multiplication table completely
*/

function multiTable(numb) {
  for (i = 1; i <= 10; i++) {
    console.log(`${i} x ${numb} = ${i * numb}`);
  }
}

let number = Number(readLine.question("Number: "));
multiTable(number);
