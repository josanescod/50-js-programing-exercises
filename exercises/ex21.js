"use strict";
/*
Give a string of characters and a number, trim the string showing the first X characters.
*/

function slicedText(text, number) {
  let slicedText = "";

  if (typeof text === "string" && typeof number === "number") {
    slicedText = text.substring(0, number);
    return slicedText;
  } else {
    return (slicedText = `data type error`);
  }
}

console.log(slicedText("With Great Power Comes Great Responsibility", "17"));
console.log(slicedText("With Great Power Comes Great Responsibility", 17));
