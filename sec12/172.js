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
