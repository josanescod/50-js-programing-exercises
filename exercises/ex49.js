"use strict";
/*
Given an object check if a specific property exists.
*/

function propertyExist(newObject, property) {
  return typeof newObject === "object" && newObject[`${property}`]
    ? true
    : false;
}

function propertyExist2(object, property) {
  if (
    typeof object === "object" &&
    typeof property === "string" &&
    object.hasOwnProperty(property)
  ) {
    return true;
  }
  return false;
}

const user = {
  userName: "Esther",
  age: 33,
  studies: "Computer Science degree",
  univeristy: "University of London",
};

const animal = "dog";

console.log(propertyExist(user, "age"));
console.log(propertyExist(user, "pet"));
console.log(propertyExist(animal, "hair"));
console.log(propertyExist2(user, "money"));
console.log(propertyExist2(user, "web"));
console.log(propertyExist2(user, "studies"));
