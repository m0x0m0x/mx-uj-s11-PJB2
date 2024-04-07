/*
173: The Remainder Operator
*/
//== Imports
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// ==
mainHead("173: The Remainder Operator");
paraText("Note this is like to modulo operator in python");

subHead("Remainder Operator Testing");
console.log(5 % 2);
console.log(5 / 2);
console.log(65 % 2);

//Checking even and odd number
subHead("Finding Odd and Even Numbers");
console.log(6 % 2);

// Writing loop to see modulos
paraText("Loop to print module products");
for (let i = 0; i <= 10; i++) {
  console.log(200 % i);
}

paraText("Function to check EVEN or ODD");
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(99));
