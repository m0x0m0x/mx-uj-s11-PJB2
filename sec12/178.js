/* 
178: Operations with dates
*/
// === Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// imnport
mainHead("178: Operations with dates");
console.log(new Date());

subHead("Calculations on dates");
const fut2 = new Date(2069, 6, 9, 16, 9);
console.log(fut2);

paraText("Converting Long Date to ms");
console.log(Number(fut2));

paraText("Usign Type Coercion");
console.log(+fut2);

subHead("Operation");

// Multiplication is to convert into hours
const caDaysP = (da1, da2) => Math.abs(da2 - da1) / (1000 * 60 * 60 * 24);

// using arrow function with the date
const d1 = caDaysP(new Date(2024, 1, 12), new Date(2024, 1, 8));
console.log(d1 + " days");

paraText("Changes with time");
const d2 = caDaysP(new Date(2024, 1, 12), new Date(2024, 1, 8, 10, 8));

// Using math round , to round up the dates
console.log(Math.round(d2) + " days");

// Recommendation of moment.js , for complex data operations
