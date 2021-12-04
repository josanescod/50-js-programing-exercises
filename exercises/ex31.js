"use strict";
const readLine = require("readline-sync");
/*
Given a number indicate the type of angle it is.(right, acute, obtuse, straight, reflex, full rotation)
*/
const angles = [
  "acute",
  "right",
  "obtuse",
  "straight",
  "reflex",
  "full rotation",
  "greater than 360°",
];

function typeOfAngle(angle) {
  angle = Math.abs(angle);
  let typeOfAngle = "";
  if (angle < 90) {
    typeOfAngle = angles[0];
  } else if (angle === 90) {
    typeOfAngle = angles[1];
  } else if (angle > 90 && angle < 180) {
    typeOfAngle = angles[2];
  } else if (angle === 180) {
    typeOfAngle = angles[3];
  } else if (angle > 180 && angle < 360) {
    typeOfAngle = angles[4];
  } else if (angle === 360) {
    typeOfAngle = angles[5];
  } else {
    typeOfAngle = angles[6];
  }
  return `The angle with ${angle}° is ${typeOfAngle}`;
}

const angle = parseInt(readLine.question("Angle: "));
console.log(typeOfAngle(angle));
