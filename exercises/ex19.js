"use strict";
const readLine = require("readline-sync");
/*
Given an array of movie objects (title, director, view, show all movies indicating which one you have seen and which one you have not.
*/
const filmsCollection = [
  {
    title: "Lord of the Rings",
    director: "Peter Jackson",
    viewed: true,
  },
  {
    title: "Pirates of the Caribbean",
    director: "Gore Verbinski ",
    viewed: false,
  },
  {
    title: "Iron Man",
    director: "Jon Favreau",
    viewed: true,
  },
  {
    title: "Night of the Livind Dead",
    director: "George A. Romero",
    viewed: false,
  },
];

function myFilms(films) {
  for (let f of films) {
    let info = `"film: ${f.title} and film director: ${f.director}"`;

    if (f.viewed) {
      console.log("You have viewed: ", info);
    } else {
      console.log("You must see: ", info);
    }
  }
  return films;
}

console.log(myFilms(filmsCollection));
