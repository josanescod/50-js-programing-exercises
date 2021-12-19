"use strict";
/*
Given an array of return objects, which are the most common hobbies of the users*/

const users = [
  { userName: "Jhon", hobbies: ["computers", "cinema", "videogames"] },
  { userName: "Noe", hobbies: ["soccer", "cooking", "videogames"] },
  { userName: "Esther", hobbies: ["study French", "netflix", "running"] },
  { userName: "Marc", hobbies: ["animals", "computers", "videogames"] },
  { userName: "Paco", hobbies: ["surf", "cinema", "videogames", "soccer"] },
];
function hobbies(arrObj) {
  let newmap = {};

  arrObj.forEach((element) => {
    for (let hobbi of element.hobbies) {
      !newmap[hobbi] ? (newmap[hobbi] = 1) : newmap[hobbi]++;
    }
  });
  return newmap;
}
console.log(hobbies(users));
