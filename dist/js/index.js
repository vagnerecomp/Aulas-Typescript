"use strict";
// Declaring variables
let x = 20;
console.log(x);
// Applying using DOM management
let mainHeading = document.querySelectorAll('h1');
mainHeading[0].innerHTML += " Ola, que passa " + x.toString();
console.log(`The h1's values are ${mainHeading[0].innerHTML}`);
// Typescript variables types are writen in lowcase, including objects types
// Declaring array...
const myNumbers = [1, 2, 3]; //Inferência
console.log(myNumbers);
const otherArrayNumbers = [5, 6, 7]; //Annotations
console.log(otherArrayNumbers);
console.log(typeof (otherArrayNumbers));
