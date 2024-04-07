/*
172: Math and Rounding
*/
//== Imports
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// ==
mainHead("172: Math and Rounding");

subHead("Testing mathjs");
console.log(math.sqrt(-12).toString());

subHead("Continuing actual course");
console.log(Math.sqrt(49));
console.log(2 ** (2 / 3));

// getting max calue
let maxNum = [2, 5, 6, 7, 8, 9];
console.log(Math.max(2, 2, 3, "4"));
console.log(Math.min(2, 9, 8, 8));

paraText("constants");
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("23x") ** 2);

paraText("Math Random Numbers");
console.log(Math.trunc(Math.random() * 6) + 1);

// writing loop for above function
paraText("Loop to get random numbers");
for (let i = 0; i < 10; i++) {
  console.log(Math.trunc(Math.random() * 6) + 1);
}

paraText("Min and Max Num");
// This is a function for getting random numbers between min and max

const randomIInt = (min, max, iter) => {
  for (let i = 0; i < iter; i++) {
    console.log(Math.trunc(Math.random() * (max - min) + min));
  }
};

randomIInt(1, 9, 5);

paraText("Rounding");
// Here you are adding some numbers after rounding of pi
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI + 5));
